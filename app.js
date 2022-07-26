import express from 'express'

const port = process.env.PORT || 3000
const app = express()

app.listen(port, ()=>{
    console.log(`Servidor rodando em http://localhost:${port}`)
})

app.use(express.json())