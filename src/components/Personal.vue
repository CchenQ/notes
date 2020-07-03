<template>
  <div class="personal">
    <div class="p-skill">
      <div class="p-title">我的技能</div>
      <div class="p-content">
        <ul>
          <li class="p-mark" v-for="item in list" :key="item.id">
            <div class="p-body">
              <div class="p-progress-title">{{ item.title }}</div>
              <div class="p-progress">
                <el-progress
                  :text-inside="true"
                  :stroke-width="26"
                  :percentage="item.percentage"
                >
                </el-progress>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="p-title">我的爱好</div>
      <div class="p-content">
        <el-tag v-for="item in tags" :key="item.id" effect="plain">
          {{ item.label }}
        </el-tag>
      </div>
      <div class="p-title">我的相册</div>
      <div class="p-content">
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="item in photos" :key="item.id">
            <img :src="item.label" width="100%" height="100%" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personal",
  data() {
    return {
      list: [
        {
          id: 1,
          title: ".net",
          percentage: 80
        },
        {
          id: 2,
          title: "sqlserver",
          percentage: 80
        },
        {
          id: 3,
          title: "javascript",
          percentage: 70
        },
        {
          id: 4,
          title: "css",
          percentage: 60
        },
        {
          id: 5,
          title: "html",
          percentage: 60
        },
        {
          id: 6,
          title: "ajax",
          percentage: 60
        },
        {
          id: 7,
          title: "jquery",
          percentage: 60
        },
        {
          id: 8,
          title: "mvc",
          percentage: 80
        }
      ],
      tags: [
        {
          id: 1,
          label: "羽毛球"
        },
        {
          id: 2,
          label: "撸猫"
        },
        {
          id: 3,
          label: "旅游"
        },
        {
          id: 4,
          label: "登山"
        }
      ],
      photos: [
        {
          id: 1,
          label: require("../assets/diandian.jpg")
        },
        {
          id: 2,
          label: require("../assets/1.png")
        },
        {
          id: 3,
          label: require("../assets/2.png")
        },
        {
          id: 4,
          label: require("../assets/3.png")
        },
        {
          id: 5,
          label: require("../assets/4.png")
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.personal {
  width: 80%;
  margin: 0 auto;
  .p-skill {
    .p-title {
      padding-top: 4rem;
      width: 100%;
      padding-bottom: 2rem;
      text-align: center;
      font-size: 18px;
      font-weight: bold;
    }
    .p-content {
      text-align: center;
      .el-tag {
        padding: 0 2rem;
        margin: 0 2rem;
      }
      .p-mark {
        display: inline-block;
        padding: 2rem;
        .p-body {
          display: flex;
          flex-direction: row;
          .p-progress-title {
            display: flex;
            align-items: center;
            font-size: 15px;
            font-weight: bold;
            margin-right: 1rem;
            width: 5rem;
          }
          .p-progress {
            width: 20rem;
          }
        }
      }
      .el-carousel__item img {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }
  }
}
</style>
