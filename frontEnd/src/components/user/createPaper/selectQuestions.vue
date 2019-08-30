<template>
  <div class="content">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="知识点" prop="type">
        <div class="chapter" style>
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="第一章" name="type"></el-checkbox>
            <el-checkbox label="第二章" name="type"></el-checkbox>
            <el-checkbox label="第三章" name="type"></el-checkbox>
            <el-checkbox label="第四章" name="type"></el-checkbox>
            <el-checkbox label="第五章" name="type"></el-checkbox>
            <el-checkbox label="第六章" name="type"></el-checkbox>
            <el-checkbox label="第七章" name="type"></el-checkbox>
            <el-checkbox label="第八章" name="type"></el-checkbox>
          </el-checkbox-group>
          <div class="search">
            <el-button type="primary" @click="searchQuestionData()">搜索</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </div>
        </div>
      </el-form-item>
    </el-form>
    <el-table
      :data="resourceData"
      height="600"
      border
      class="questionList"
      stripe
      highlight-current-row
      @selection-change="handleSelectionChange"
      ref="multipleTable"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" label="序号" width="100" align="center"></el-table-column>
      <el-table-column prop="questionTitle" label="题目" min-width="100" align="center"></el-table-column>
    </el-table>
    <div class="finish">
      <el-button type="primary" @click="searchQuestionData()">完成</el-button>
      <el-button @click="resetForm()">重置</el-button>
    </div>
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
      resourceData: [
        {
          id: 1,
          questionTitle: "名称好好"
        },
        {
          id: 2,
          questionTitle: "名称好好"
        },
        {
          id: 3,
          questionTitle: "名称好好"
        },
        {
          id: 4,
          questionTitle: "名称好好"
        },
        {
          id: 5,
          questionTitle: "名称好好"
        },
        {
          id: 1,
          questionTitle: "名称好好"
        },
        {
          id: 2,
          questionTitle: "名称好好"
        },
        {
          id: 3,
          questionTitle: "名称好好"
        },
        {
          id: 4,
          questionTitle: "名称好好"
        },
        {
          id: 5,
          questionTitle: "名称好好"
        },
        {
          id: 4,
          questionTitle: "名称好好"
        },
        {
          id: 5,
          questionTitle: "名称好好"
        },
        {
          id: 3,
          questionTitle: "名称好好"
        },
        {
          id: 4,
          questionTitle: "名称好好"
        },
        {
          id: 5,
          questionTitle: "名称好好"
        },
        {
          id: 4,
          questionTitle: "名称好好"
        },
        {
          id: 5,
          questionTitle: "名称好好"
        },
      ],
      multipleSelection: []
    };
  },
  methods: {
    searchQuestionData(row) {
        this.$router.push({ name: "previewPaper" });
    },
    resetForm(formName) {
      this.$refs.multipleTable.clearSelection();
    },
    handleSelectionChange(val) {
        this.multipleSelection = val;
      }
  }
};
</script>
<style  scoped>
.content-top {
}
.queryBtn {
  background-color: #1890ff;
  color: #fff;
}
.content-body {
  padding-top: 20px;
}
.form-input {
  width: 518px;
}
.content {
  /* display: flex;
  justify-content: center; */
  margin-top: 20px;
}
.chapter {
  text-align: left;
  margin-left: 50px;
  border-bottom: 1px solid #ccc;
}
.serach {
  /* float: right; */
  /* display: inline-block; */
}
.questionList {
  height: 500px;
  width: 84%;
  margin: 0 auto;
}
.finish {
  display: flex;
  justify-content: flex-end;
  margin-right: 190px;
  margin-top: 50px;
}
</style>
