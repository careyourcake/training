// app/router.js

module.exports = app => {
  const { router, controller } = app;

  router.get('/api/fruit', controller.fruit.index); // 获取所有水果数据的 API
  router.delete('/api/fruit/:name', controller.fruit.destroy); // 删除指定名称的水果的 API
  router.put('/api/fruit/:name', controller.fruit.update); // 修改指定名称的水果名称的 API
};
