<template>
  <div class="catgeory">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="萌宠饲养" name="1">
        <ul>
          <li><router-link to="">如何教猫咪喝水</router-link></li>
          <li><router-link to="">如何训练猫咪收爪爪</router-link></li>
          <li><router-link to="">猫咪挑食怎么办</router-link></li>
          <li><router-link to="">怎样开发猫咪的技能</router-link></li>
          <li><router-link to="">猫咪不听话怎么办</router-link></li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="vue知识点" name="2">
        <ul>
          <li><router-link to="">vue的生命周期</router-link></li>
          <li><router-link to="">vue-router的应用</router-link></li>
          <li><router-link to="">vuex的使用</router-link></li>
          <li><router-link to="">element-ui的使用</router-link></li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title=".net的相关知识点" name="3">
        <ul>
          <li><router-link to="">分布式缓存</router-link></li>
          <li><router-link to="">算法</router-link></li>
          <li><router-link to="">网络通信</router-link></li>
          <li><router-link to="">并发处理</router-link></li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="sqlserver的相关知识点" name="4">
        <ul>
          <li>
            <router-link to=""
              >实体完整性（Entity Integrity 行完整性）</router-link
            >
          </li>
          <li>
            <router-link to=""
              >域完整性（Domain Integrity 列完整性）</router-link
            >
          </li>
          <li>
            <router-link to=""
              >参照完整性（Referential Integrity）属于表间规则</router-link
            >
          </li>
          <li>
            <router-link to=""
              >参照完整性规则（Referential Integrity）要求</router-link
            >
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "catgeory",
  data() {
    return {
      activeName: "1"
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.catgeory {
  padding: 2rem;
  border: 1px solid #ebebeb;
  background: #fff;
  border-radius: 3px;
}
</style>
