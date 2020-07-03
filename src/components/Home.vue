<template>
  <div class="main">
    <div class="m-left">
      <div class="container" v-for="item in data" :key="item.id">
        <div class="title">
          <router-link to=""> {{ item.title }}</router-link>
        </div>
        <div class="body">
          <div class="b-img" v-show="item.img">
            <img :src="item.img" width="100px" height="100%" />
          </div>
          <div class="b-content">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
    <div class="m-right">
      <div class="personal-tags">
        <div class="book">推荐书籍</div>
        <ul>
          <li v-for="item in tags" :key="item.id">
            <a>{{ item.label }}</a>
          </li>
        </ul>
      </div>
      <div class="book-footer">
        <el-button> 查看全部> </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      data: [
        {
          id: 1,
          title: "如何训练猫咪收爪爪",
          img: require("../assets/diandian.jpg"),
          content:
            "猫咪2-4个月进入快速生长期，这段时间，猫咪不仅身体在快速成长发育，它的精力也会充分释放在各种看似玩耍实际上是自我训练的举动上。它会把各种动态静态的玩具或者“伙伴”当做“假想敌”发起袭击，训练自己的捕猎本领和技巧，这种行为更接近“条件反射”一些。比如：它看到人的手就要扑，看到在它面前晃动的玩具就想咬。这是出于它“捕猎”的欲望，而非“闲来无事的玩耍”。随着年纪的增加，它熟练的掌握了各种捕猎技巧之后，它才会淡化这种“训练自己”的行为，而日常的各种袭击举动则开始变成“玩耍”。可能6-8个月之后会平静很多，到1-2岁以后会变成“你踹它一下，它都懒得理你”"
        },
        {
          id: 2,
          title: "如何提高js水平",
          img: require("../assets/js.png"),
          content:
            "1. 首先要了解相关的基础知识, 比如什么是浏览器, 什么是html, 什么是css, js语言的历史, 什么是动态网页(有个动态gif图片那可不是动态网页...)2. 然后要学习js基础, 比如语法, 关键字, 数据类型, 函数, 作用域, 正则表达式等3. 然后就是高级一点的知识, 比如原型, 闭包, 面向对象编程, 定时器, 异步编程等.和浏览器相关:"
        },
        {
          id: 3,
          title: "jQuery的使用",
          img: require("../assets/jq.png"),
          content:
            "jq 是一种命令行json处理工具，非常好用！安装方法：mac ：brew install jq centos: yum install jq ubuntu: apt-get install jq 在线试用链接：jq play"
        },
        {
          id: 4,
          title: "如何提升自己的.net",
          content:
            "你这才刚刚开始。。这会儿赶紧把公司现有的小项目弄懂弄透，能完成日常工作开发，这是第一阶段。然后是把C#语法、数据库、常用的框架、设计模式去深入学习下，看帖子看官网技术群交流，或者找我学习，再下一阶段就去把一些组件学习下，redis、mongoDB、ReddisMQ、Docker等等，先把格局提升上去，然后就可以好好看一些综合性的开源框架，ABP.vNext、Orleans、eShopOnContainer，这些系统架构设计是你在小公司接触不到的，最后就是去钻研底层啦，CLR、数据结构算法、调优、架构设计等等"
        },
        {
          id: 5,
          title: "如何学习数据库原理与技术",
          content:
            "首先是让你学会操作数据库，如果你将来打算靠编程吃饭，那么学会使用数据库对于大部分人而言就是一个必选项。当然主要是集中在服务端，你要去做前端或者游戏客户端什么的，会推迟对这方面知识的需求，但是早晚你还是会需要用到的"
        }
      ],
      tags: [
        {
          id: 1,
          label: "javascript权威指南"
        },
        {
          id: 2,
          label: "高性能javascript"
        },
        {
          id: 3,
          label: "C#入门经典第三版"
        },
        {
          id: 4,
          label: "C#高级编程第bai3版"
        },
        {
          id: 5,
          label: "SQL Server 数据库设计与系统开发教程"
        },
        {
          id: 6,
          label: "数据库设计与开发"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;
  .m-left {
    width: 60vw;
    border: 1px solid #ebebeb;
    background: #fff;
    border-radius: 3px;
  }
  .container {
    padding: 2rem;
    border-bottom: 1px solid #ebebeb;
    .title {
      font-size: 18px;
      font-weight: bold;
      padding-bottom: 0.5rem;
      a {
        color: #000;
      }
    }
    .body {
      padding: 0.5rem 0;
      display: flex;
      flex-direction: row;
      .b-img {
        width: 100px;
        height: 8rem;
        margin-right: 2rem;
      }
      .b-content {
        max-height: 8rem;
        line-height: 1.6;
        flex-wrap: wrap;
      }
    }
  }
  .m-right {
    margin-left: 1rem;
    width: 20vw;
    height: 40vh;
    border: 1px solid #ebebeb;
    background: #fff;
    border-radius: 3px;
    .book-footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      .el-button {
        width: 100%;
      }
    }
  }
  .personal-tags {
    padding: 2rem;

    .book {
      font-size: 14px;
      color: #969696;
      margin-bottom: 1rem;
    }
    ul li {
      padding: 0.5rem;
      a {
        cursor: pointer;
        &:hover {
          color: #409eff;
        }
      }
    }
  }
}
</style>
