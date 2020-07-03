<template>
  <div class="menu">
    <div class="m-img">
      <img src="../assets/blog.png" width="80px" alt="" />
    </div>
    <h1>学如逆水行舟 不进则退</h1>
    <div class="nav">
      <el-menu
        :default-active="onRoutes"
        class="el-menu-demo"
        mode="horizontal"
        router
      >
        <el-menu-item index="home">主页</el-menu-item>
        <el-menu-item index="catgeory">分类</el-menu-item>
        <el-menu-item index="personal">关于</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  },
  computed: {
    onRoutes() {
      let path = this.$route.path.replace("/", "");
      return path ? path : "/";
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.menu {
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  height: 10vh;
  width: 100%;
  border: 1px solid #ebebeb;
  background: #fff;
  justify-content: center;
  min-height: 10rem;
  .m-img {
    position: absolute;
    left: 1rem;
    top: 2rem;
    width: 5rem;
  }
  h1 {
    display: flex;
    font-family: cursive;
    align-items: center;
    justify-content: center;
  }
  .nav {
    bottom: 0;
    position: absolute;
    right: 2rem;
  }
}
</style>
