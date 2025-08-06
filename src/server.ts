
import 'module-alias/register'
import http from 'http'
import app from "./app"
import { PORT, HOST } from '@config/index'
const server = http.createServer(app)
server.listen(PORT,HOST,()=>{
    console.log(`Server starts at http://${HOST}:${PORT}`)
})