import app from "./app"
const port = 3333 || process.env.port

app.listen(port,()=>{
    console.log(`server running port ${port}`)
})
