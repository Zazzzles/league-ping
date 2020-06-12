<script>
  import { servers } from "./consts";
  import checkping from "checkping";
  import PingTile from "./components/pingTile.svelte";

  let pings = {
    "South America": 0,
    "EU Nordic & East": 0,
    "EU West": 0,
    "Latin America": 0,
    "Nothern America": 0,
    Oceania: 0,
    Japan: 0,
    "South East Asia": 0,
    Korea: 0,
    China: 0
  };

  function pingAll(i) {
    setTimeout(() => {
      Object.keys(servers).forEach(key => {
        getPings(key);
      });
      if (i < 10) {
        i++;
        pingAll(i);
      }
    }, 1000);
  }

  function getPings(serverKey) {
    let server = servers[serverKey];
    checkping(server[0])
      .then(res => {
        pings[serverKey] = res;
      })
      .catch(err => {
        console.log(err);
      });
  }

  pingAll(0);
</script>

<style>
  main {
    max-width: 100vw;
    height: 100vh;
    background-image: url("/static/images/bg.jpg");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tileContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 40px;
  }
</style>

<svelte:head>
  <title>Pingcheck</title>
  <meta name="title" content="League of Legends server ping checks" />
  <meta
    name="description"
    content="A handy tool for checking league of legends server pings" />
</svelte:head>

<main>
  <div class="tileContainer">
    {#each Object.keys(pings) as pingItem}
      <PingTile
        name={pingItem}
        ip={servers[pingItem][0]}
        ping={pings[pingItem]} />
    {/each}
  </div>
</main>
