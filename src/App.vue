<template>
  <div id="app">
    <Menu />
    <div class="content">
      <router-view />
    </div>
    <div class="footer">
      Copyrights © 2020 Lemon All Rights Reserved
    </div>
  </div>
</template>

<script>
import Menu from "./components/Menu";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Menu
  },
  methods: {}
};
</script>

<style lang="scss">
#app {
  background: #f6f6f6;
  height: 100%;
  .content {
    width: 80%;
    height: 80vh;
    margin: 0 auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    overflow: auto;
  }
  .footer {
    position: absolute;
    bottom: 5px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
