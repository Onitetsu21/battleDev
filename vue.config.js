module.exports = {
    devServer: {
        proxy: {
            '^/api':{
                target: 'http://localhost:8080/users',
                changeOrigin: true
            }
        },
        port: 3000,
    },
}