import service from '../service/http'

const baseUrl = '/articles';

const articleApi = {};

//获取所有文章
articleApi.getAll = (pageNum, pageSize) => {
  return service({
    url: `${baseUrl}`,
    params: pageNum, pageSize,
    method: `get`
  })
};

//获取对应id文章
articleApi.getOne = id =>{
  return service({
    url: `${baseUrl}/${id}`,
    method: `get`
  })
};

//发布一个新的文章
articleApi.add = (article) => {
  return service({
    url: `${baseUrl}`,
    data: article,
    type: 'json',
    method: `post`
  })
};

//文章更新
articleApi.update = (id, article) =>{
  return service({
    url: `${baseUrl}/${id}`,
    data: article,
    method: `put`
  })
};

//删除对应id
articleApi.delete = id => {
  return service({
    url: `${baseUrl}/${id}`,
    method: `delete`
  })
};

export default articleApi
