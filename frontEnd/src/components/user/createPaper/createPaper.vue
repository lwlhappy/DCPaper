<template>
  <div class="content">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div class="content-title">创建试卷</div>
      <el-form-item label="试卷名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="试卷类型" prop="region">
        <el-select v-model="ruleForm.region" class="selectType" placeholder="请选择试卷类型">
          <el-option label="练习题" value="test"></el-option>
          <el-option label="单套A卷" value="paperA"></el-option>
          <el-option label="单套B卷" value="paperB"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="难易度" class="difficulty" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="非常难"></el-radio>
          <el-radio label="难"></el-radio>
          <el-radio label="一般"></el-radio>
          <el-radio label="简单"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="试卷备注" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(row) {
      this.$router.push({ name: "selectQuestions" });
    },
   resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
};
</script>
<style scoped>
.content {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.demo-ruleForm {
  width: 50%;
}
.content-title {
  font-size: 25px;
  margin-bottom: 50px;
}
.selectType {
  display: flex;
  justify-content: left;
  width: 50%;
}
.difficulty {
  display: flex;
  justify-content: left;
  /* margin-left: -50px; */
}
</style>
