<template>
  <div id="app">
   
    <appNavbar></appNavbar>

    <appSelect></appSelect>

    <appStatistics></appStatistics>
  
    <appTable></appTable>

  </div>
</template>

<script>
import Navbar from "./componets/Navbar";
import Table from "./componets/Table";
import Statistics from "./componets/Statistics";
import Select from "./componets/Select";
import axios from "axios";
export default {
  components:{
    appTable:Table,
    appStatistics:Statistics,
    appSelect:Select,
    appNavbar:Navbar,
  },
  data() {
    return{}
  },
  created(){
    axios.get("https://api.covid19api.com/countries")
    .then(response=>{
      this.$store.commit("setCountries",response.data);
    })
  }
};
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    background: #eeeeee;
  }

  #app{
    display: flex;
    align-items:center;
    flex-direction: column;
  }

  .navbar{
    width: 80%;
    height: 100px;
    background-color: #a8d8ea;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1rem;
    margin-top:1rem ;
  }

  .navbar img{
    margin-left: 10px;
  }

  .selector{
    margin-top: 1rem;
    width: 75%;
  }
  .selector select{
    width: 100%;
    height:40px;
    border-radius: 0.5rem;
    padding: 0px 10px;
    outline: none;
  }
  .statistics{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    max-height: 200px;
    border-radius: 10px;
    margin-top: 3rem;
    padding: 0px 50px;
  }

  .statistics p{
    margin-top:20px;
    font-size: 30px;
  }

  .statistics .total,.recovered,.deaths{
    height: 150px;
    width: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .statistics .total{
    background:#a8d8ea;
  }
  .statistics .recovered{
    background: #9fe6a0;
  }
  .statistics .deaths{
     background: #f29191;
  }

  .table-div{
    width: 75%;
    margin-top:4rem ;
    margin-bottom: 1.5rem;
  }

  @media screen and (max-width: 1000px) {
  .statistics{
    flex-direction: column;
    margin-bottom:250px;
  }
  .statistics .deaths,.recovered,.total{
    margin-bottom: 20px;
  }
}
</style>
