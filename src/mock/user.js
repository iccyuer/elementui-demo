import Mock  from 'mockjs'

const BaseResponse = (data) => {
  return {
    data,
    status: '200',
    message: 'OK'
  }
};

const getList = () => {
  let list = Mock.mock({
    'list|1-10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'id|+1': 1
    }]
  })
  return BaseResponse(list);
}

export default {
  getList
}

