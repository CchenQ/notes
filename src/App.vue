<template>
  <div id="app">
    <div class="nav">
      <el-menu
        :default-active="onRoutes"
        class="el-menu-demo"
        mode="horizontal"
        router
        @select="handleSelect"
      >
        <el-menu-item index="home">主页</el-menu-item>
        <el-menu-item index="catgeory">分类</el-menu-item>
        <el-menu-item index="personal">关于</el-menu-item>
      </el-menu>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "",
      defaultOpeneds: []
    };
  },
  computed: {
    onRoutes() {
      let path = this.$route.path.replace("/", "");
      return path ? path : "/";
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
#app .content {
  width: 80%;
  height: 80vh;
  margin: 0 auto;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;
  margin-top: 0.5rem;
}
</style>
