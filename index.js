const http = require('http')
const app = require('./app')

const server = http.createServer(app)

process.on('SIGINT', () => {
    server.close()
    console.log('server closed')
})

server.listen(8080, () => {
    console.log('server listens on port 8080')
})
