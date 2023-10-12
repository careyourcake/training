// app/controller/fruit.js

const Controller = require('egg').Controller;

class FruitController extends Controller {
  async index() {
    const { ctx } = this;
    const fruits = await ctx.service.fruit.getAllFruits(); // 调用 Service 层的方法获取所有水果数据
    ctx.body = fruits;
  }

  async destroy() {
    const { ctx } = this;
    const success = await ctx.service.fruit.deleteFruit(ctx.params.name); // 从路径参数中获取水果名称，并调用 Service 层的方法删除对应的水果
    if (success) {
      ctx.status = 204; // 如果删除成功，返回 204 状态码表示无内容
    } else {
      ctx.throw(400, '删除失败'); // 如果删除失败，则抛出 400 错误并携带错误信息
    }
  }

  async update() {
    const { ctx } = this;
    const { name: oldName } = ctx.params; // 从路径参数中获取旧的水果名称
    const { name: newName } = ctx.request.body; // 从请求体中获取新的水果名称
    const success = await ctx.service.fruit.editFruit(oldName, newName); // 调用 Service 层的方法修改水果名称
    if (success) {
      ctx.status = 204; // 如果修改成功，返回 204 状态码表示无内容
    } else {
      ctx.throw(400, '修改失败'); // 如果修改失败，则抛出 400 错误并携带错误信息
    }
  }
}

module.exports = FruitController;
