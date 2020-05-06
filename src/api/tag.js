import service from '../service/http'

const baseUrl = '/tags';

const tagApi = {};

tagApi.getAll = () => {
  return service({
    url: `${baseUrl}`,
    method: 'get'
  })
};

tagApi.addOne = (tag) => {
  return service({
    url: `${baseUrl}`,
    data: tag,
    method: 'post'
  })
};

tagApi.updateOne = (id, tag) => {
  return service({
    url: `${baseUrl}/${id}`,
    data: tag,
    method: 'put'
  })
};

tagApi.deleteOne = (id) => {
  return service({
    url:`${baseUrl}/${id}`,
    method: 'delete'
  })
};
export default tagApi
