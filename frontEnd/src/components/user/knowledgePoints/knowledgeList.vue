<template>
  <div>
    <!--题库列表-->
    <el-button type="primary" icon="el-icon-plus" @click="onAddPoints()" style="position:relative;float: left;margin-top: 15px;padding-bottom: -20px;">添加知识点</el-button>
    <el-table
      :data="knowledgePointsData"
      style="width: 100%">
      <el-table-column
        label="知识点">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.knowledge }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="knowledgePointDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import cdService from "@/apis/service.cd";
import { callbackify, log } from "util";
  export default {
    name: "knowledgeList",
    data() {
      return {
        //知识点页面的添加知识点
        form: {
          knowledgePoints: ''
        },
        //知识点页面的数据列表
        knowledgePointsData: [{
          knowledge: '',
        }],
      };
    },
    mounted() {
      this.getKnowledgePointData()
    },
    methods: {
      async getKnowledgePointData() {
      let param = {
        current: 10, //第几页
        size: 2, //每页多少条
      };
      let res = await cdService.getKnowledgePointData(param);
    
        this.knowledgePointsData = res.data;
      console.log(res.data, "res1111111111111");
    },
      onAddPoints() {
        this.$prompt('输入添加的知识点', '提示', {
          confirmButtonText: '添加',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '成功添加知识点: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });
        });
        let that = this;
        this.type='qd'
        that.dialogVisible = true
      },
      knowledgePointDelete(index, row) {
        console.log(index, row);
      },
    }

  };
</script>

<style scoped>
</style>
