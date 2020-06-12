<script>
  import { getColor } from "../helpers";
  export let name = "";
  export let ip = "";
  export let ping = "";
</script>

<style>
  .container {
    height: 100px;
    width: 450px;
    border-radius: 10px;
    background-color: #00000057;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    margin-right: 15px;
    margin-bottom: 15px;
    padding: 20px;
  }
  .textContainer {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
  .heading {
    color: white;
    font-size: 23px;
  }
  .ip {
    margin-top: 5px;
    color: white;
    font-size: 12px;
  }
  .pingTextContainer {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
  .pingText {
    font-size: 45px;
  }
  .msText {
    color: white;
    font-size: 15px;
  }
</style>

<div class="container">
  <div class="textContainer">
    <div class="heading">{name}</div>
    <div class="ip">{ip}</div>
  </div>
  <div class="pingTextContainer">
    <div class="pingText" style="color: {getColor(ping)}">
      {ping.toFixed(0)}
    </div>
    <div class="msText">ms</div>
  </div>
</div>
