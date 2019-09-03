<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="题型">
        <el-select v-model="formInline.type" placeholder="题型">
          <el-option label="选择题" value="1"></el-option>
          <el-option label="判断题" value="2"></el-option>
          <el-option label="填空题" value="3"></el-option>
          <el-option label="化简计算题" value="4"></el-option>
          <el-option label="画图题" value="5"></el-option>
          <el-option label="综合应用题" value="6"></el-option>
          <el-option label="分析与设计" value="7"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="知识点">
        <el-select v-model="formInline.points" placeholder="知识点">
          <el-option label="知识点1" value="1"></el-option>
          <el-option label="知识点2" value="2"></el-option>
          <el-option label="知识点3" value="3"></el-option>
          <el-option label="知识点4" value="4"></el-option>
          <el-option label="知识点5" value="5"></el-option>
          <el-option label="知识点6" value="6"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSelect">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click.native="addQuestion()">添加</el-button>
      </el-form-item>
    </el-form>
    <el-tabs tabPosition="left" style="height: 500px;">
      <div style="margin-top: 20px;">
        <template>
          <!--查询结果-->
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="ID" :index="indexOperation"></el-table-column>
            <el-table-column prop="question" label="题目"></el-table-column>
            <el-table-column prop="answer" label="答案" width="180"></el-table-column>
            <el-table-column prop="knowledgePoints" label="知识点"></el-table-column>
            <el-table-column prop="difficulty" label="难易度"></el-table-column>
          </el-table>
        </template>
      </div>
      
    </el-tabs>
    <!--下拉选择框，题型和知识点选择-->
    <el-dialog title="添加" :visible.sync="dialogFormVisible" >
      <el-tabs v-model="activeName2" type="card" @tab-click="handleClick1" style="text-align:left;">
        <!-- 填空题 -->
        <el-tab-pane label="填空题" name="3">
          <el-form :model="form">
            <el-form-item label="难 度" :label-width="formLabelWidth" prop="type">
              <el-select v-model="form.type" placeholder="请选择">
                <el-option v-for="item in LevelList" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="类 型" :label-width="formLabelWidth" prop="types">
              <el-cascader
                v-model="form.types"
                placeholder="请选择"
                :options="subjectList"
                :props="subjectOptProp"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="题 目" :label-width="formLabelWidth">
              <el-input
                v-model="form.topic"
                type="textarea"
                :rows="5"
                placeholder="请输入题目"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <!--  -->
            <el-form-item label="答 案" :label-width="formLabelWidth">
              <el-input
                v-model="form.answer"
                type="textarea"
                :rows="5"
                placeholder="请输入答案"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <!-- 选择题 -->
        <el-tab-pane label="选择题" name="1">
          <el-form :model="form">
            <el-form-item label="难 度" :label-width="formLabelWidth">
              <el-select v-model="form.type" placeholder="请选择">
                <el-option v-for="item in LevelList" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="类 型" :label-width="formLabelWidth" prop="types">
              <el-cascader
                v-model="form.types"
                placeholder="请选择"
                :options="subjectList"
                :props="subjectOptProp"
              ></el-cascader>
            </el-form-item>
            <el-form-item label="题 目" :label-width="formLabelWidth">
              <el-input
                v-model="form.topic"
                type="textarea"
                :rows="5"
                placeholder="请输入题目"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="选项A" :label-width="formLabelWidth">
              <el-input v-model="form.inputA" placeholder="请输入选项" class="choose-input"></el-input>
            </el-form-item>
            <el-form-item label="选项B" :label-width="formLabelWidth">
              <el-input v-model="form.inputB" placeholder="请输入选项" class="choose-input"></el-input>
            </el-form-item>
            <el-form-item label="选项C" :label-width="formLabelWidth">
              <el-input v-model="form.inputC" placeholder="请输入选项" class="choose-input"></el-input>
            </el-form-item>
            <el-form-item label="选项D" :label-width="formLabelWidth">
              <el-input v-model="form.inputD" placeholder="请输入选项" class="choose-input"></el-input>
            </el-form-item>

            <el-form-item label="答 案" :label-width="formLabelWidth">
              <el-select v-model="form.answer" placeholder="请选择">
                <!--                        <el-option label="A" value="primary"></el-option>-->
                <!--                        <el-option label="B" value="intermediate"></el-option>-->
                <!--                        <el-option label="C" value="senior"></el-option>-->
                <!--                        <el-option label="D" value="senior"></el-option>-->
                <el-option v-for="item in ChooseList" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAdd()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>



<script>
export default {
  name: "allQuestion",
  data() {
    return {
      dialogFormVisible:false,
       dialogVisible: false,
       activeName2: "3",
       ChooseList: ["A", "B", "C", "D"],
        form: {
        name: "",
        questionType: "",
        difficulty: "",
        answer: "",
        answerX: "",
        projectType: "",
        title: "",
        inputA: "",
        inputB: "",
        inputC: "",
        inputD: "",
        date1: "",
        date2: "",
        delivery: false,
        types: "",
        type: "",
        topic: "",
        resource: "",
        desc: ""
      },
      formInline: {
        type: "",
        points: ""
      },
      // 查询题目列表
      tableData: [
        {
          question: "三开间的和罚款大家说的大发",
          answer: "A",
          knowledgePoints: "第一章",
          difficulty: "一般"
        },
        {
          question: "三开间的和罚款大家说的大发",
          answer: "A",
          knowledgePoints: "第一章",
          difficulty: "一般"
        },
        {
          question: "三开间的和罚款大家说的大发",
          answer: "A",
          knowledgePoints: "第一章",
          difficulty: "一般"
        },
        {
          question: "三开间的和罚款大家说的大发",
          answer: "A",
          knowledgePoints: "第一章",
          difficulty: "一般"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    onSelect(type) {
      console.log("submit!");
      console.log(type);
    },
    addQuestion(){
      this.dialogFormVisible = true;
    },
    handleAdd(){
      this.dialogFormVisible = false;
      
    }
  }
};
</script>

<style scoped>
.demo-form-inline{
  line-height: 20px;
  text-align: left;
  margin-top: 30px;
}
</style>
