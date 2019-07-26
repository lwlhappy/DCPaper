<template>
  <div class="login">
    <div class="title">{{title}}</div>
    <div class="loginBorder">
      <div class="admin">{{admin}}</div>
      <el-container>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="工号" prop="num">
            <el-input v-model.number="ruleForm.num"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-container>
    </div>

  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("工号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        num: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        num: [{ validator: checkAge, trigger: "blur" }]
      },
      title: "在 线 生 成 试 卷 名 系 统",
      admin: "管理员登录"
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.admin {
  text-align: center;
  color: #060606;
  padding-top: 40px;
  margin-bottom: 30px;
}
.loginBorder {
  width: 420px;
  height: 320px;
  background: #ffffff;
  margin-left: 36%;
  margin-top: 100px;
  padding-left: 30px;
  opacity: 0.3;
  border: none;
  border-radius: 20px;
  /*box-shadow: 1px 1px 5px 7px #CCCCCC;*/
  z-index: 2;
}
.title {
  text-align: center;
  font-size: 38px;
  color: #ffffff;
  padding-top: 90px;
}
.login {
  width: 100%;
  height: 703px;
  background-image: url("../../public/assets/login.jpg");
}
.el-input__inner {
  width: 210px;
}
</style>
