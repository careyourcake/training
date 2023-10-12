import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        // host: '192.168.2.53',
        // port: 8080,
        //跨域处理
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:7001',//后端服务器
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        }
    },
    base: './',//打包后文件引入路径配置
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                //如果要打包多个页面，下一行接触注释，修改html名字即可
                // nested: resolve(__dirname, 'login.html'),
            },
        },
    },
})

