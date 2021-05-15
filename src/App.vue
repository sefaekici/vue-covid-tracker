<template>
  <div id="app">
    <div class="navbar">
      <img src="./assets/icon-navbar.png" alt="">
      <h2>COVİD19 TRACKER</h2>
      <div></div>
    </div>

    <div class="selector">
      <select name="" id="">
        <option value="">Genaral</option>
      </select>
    </div>

    <div class="statistics">
      <div class="total">
        <h5>Total</h5>
        <p>121212</p>
      </div>
      <div class="recovered">
        <h5>Recovered</h5>
        <p>121212</p>
      </div>
      <div class="deaths">
        <h5>Deaths</h5>
        <p>12.20202</p>
      </div>
    </div>

    <div class="table-div">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Deneme</th>
              <th>Deneme</th>
              <th>Deneme</th>
            </tr>
          </thead>
          

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>deneme</td>
              <td>deneme</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>deneme</td>
              <td>deneme</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>deneme</td>
              <td>deneme</td>
            </tr>

          </tbody>

        </table>

    </div>

  </div>
</template>

<script>
export default {
  data() {
    
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
    background:#ffffd2;
  }
  .statistics .recovered{
    background: #a8d8ea;
  }
  .statistics .deaths{
     background: #f29191;
  }

  .table-div{
    width: 75%;
    margin-top:4rem ;
   
  }


</style>
