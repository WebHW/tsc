//

import express from 'express';
import { DataStore } from './data';
const app = express()

app.get('/',(req,res)=>{
    // res.end('111')
    res.json(DataStore.list)
})

app.listen(8080,()=>{
    console.log('服务已经运行在8080端口')
})


