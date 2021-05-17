<template>
     <div class="selector">
      <select  v-model="selectedCountry">
        <option  v-for="country in countries" :value="country.Slug" :key="country.Slug">{{country.Country}}</option>
      </select>
    </div>
</template>


<script>
import axios from 'axios';
export default {

    data(){
        return{
            selectedCountry:"Global",
        }
    },
    methods:{
        setStatistics(){
            axios.get("https://api.covid19api.com/summary")
            .then(response=>{
               this.$store.commit("setStatistics",response.data.Global);
               this.$store.commit("setSummaryData",response.data.Countries);
            })
        },
        getSpesifiCountry(){
            //spesific olarak seçilen ülkenin bulunması sağlanmışltır.
            const data=this.$store.state.summaryData.filter(country=>{
                return country.Slug==this.selectedCountry;
            })
            //veri bulunamadıysa
            if(data.length===0){
                alert("Ülkeye dair veriler alınamadı!Tüm dünyanın verileri getirilecektir...");
                //ülke bulunamadığı için global verilerin getirilmesi sağlanır.
                this.setStatistics();
            }
            else{
                console.log(data[0]);
                this.$store.commit("setStatistics",data[0]);
            }
        }
        
    },
    computed:{
        countries(){
            return this.$store.getters.getCountries;
        },
        
    },
    watch:{
        selectedCountry(){
            this.$store.commit("setSelectedCountry",this.selectedCountry);
            this.getSpesifiCountry();
        }
    },
    mounted(){
        this.setStatistics();
    }

}
</script>