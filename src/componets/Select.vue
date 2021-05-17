<template>
     <div class="selector">
      <select  v-model="selectedCountry">
        <option  value="Summary" selected>Summary</option>
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
               console.log(response.data.Global);
            })
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
            this.setStatistics();
        }
    }
}
</script>