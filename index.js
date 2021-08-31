const http = require('http')
const app = require('./app')

const server = http.createServer(app)

server.listen(8080, () => {
	console.log("server listens on port 8080")
})
