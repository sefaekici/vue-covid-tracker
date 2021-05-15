<template>
     <div class="selector">
      <select v-model="selectedCountry">
        <option value="total" selected>Total</option>
        <option  v-for="country in countries" :value="country.Slug" :key="country.Slug">{{country.Country}}</option>
      </select>
    </div>
</template>


<script>
export default {
    computed:{
        countries(){
            return this.$store.getters.getCountries;
        },
        selectedCountry:{
            set(payload){
                this.$store.commit("setSelectedCountry",payload);
            }
        }
    }
}
</script>