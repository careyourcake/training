/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1696918671737_7352';

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    // database configuration
    client: {
      // host
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'homework',
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };
  // 配置cors：把这个复制到config.default.js
  // 跨域的配置
  config.cors = {
    origin: '*', // 允许的域，*代表所有的
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH', // 允许跨域的请求方法
  };
  // 文件上传
  config.multipart = {
    mode: 'file',
  };
  // 设置cookie过期时间
  config.session = {
    key: 'EGG_SESS',
    maxAge: 7 * 24 * 3600 * 1000, // 7 天
    httpOnly: true,
    encrypt: true,
  };

  return {
    ...config,
    ...userConfig,
  };
};
