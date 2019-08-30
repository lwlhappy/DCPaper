import request from '../lib/request'

export default {
  //获取知识点
  getKnowledgePointData: (param) => {
    return request.get('/knowledge/selectKnowledgePoint', param)
  },
  
}

