// app/service/testdb.js

const Service = require('egg').Service;

class TestDBService extends Service {
  async getAllFruits() {
    // 查询数据库中所有水果数据并返回
    const fruits = await this.app.mysql.select('fruits');
    return fruits;
  }

  async deleteFruit(name) {
    // 删除数据库中指定名称的水果
    const result = await this.app.mysql.delete('fruits', { name });
    return result.affectedRows === 1; // 如果影响行数为 1 则表示删除成功，否则表示删除失败
  }

  async editFruit(oldName, newName) {
    // 修改数据库中指定名称的水果名称
    const result = await this.app.mysql.update('fruits', { name: newName }, { where: { name: oldName } });
    return result.affectedRows === 1; // 如果影响行数为 1 则表示修改成功，否则表示修改失败
  }
}

module.exports = TestDBService;
