  <template>
  <div id="app">
    <el-header>
      <el-menu :default-active="this.$route.path" router @select="handleSelect" mode="horizontal">
        <img src="../public/assets/logo.jpg" class="login-image">
        <el-menu-item v-for="(item,i) in navList" id="topNav" :key="i" :index="item.name">
          {{ item.navItem }}
        </el-menu-item>
      </el-menu>
      <router-view />
    </el-header>
  </div>
</template>
<style lang="scss">
#app {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
.login-image {
  width: 10%;
  height: 10%;
  float: left;
  margin-top: 2%;
  margin-left: 2%;
  margin-right: 2%;
}
.el-menu-demo {
  // float: right;
  margin-right: auto;
  margin-left: auto;
}
#topNav {
  margin-top: 1%;
  margin-right: 50px;
}
.line {
  width: 80%;
  border: 1px solid #ccc;
}
</style>
<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data() {
    return {
      navList: [
        { name: "/Index", navItem: "首页" },
        { name: "/createPaper", navItem: "生成试卷" },
        { name: "/allQuestion", navItem: "题库管理" },
        { name: "/knowledgeList", navItem: "知识点" },
        { name: "/downPaper", navItem: "试题下载" }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0px;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  padding: 0px;
}

.el-menu-item {
  padding-right: 30px;
}

body > .el-container {
  margin-bottom: 40px;
}
.login-image {
  float: left;
  margin: 17px 10px 10px 30px;
}
</style>

