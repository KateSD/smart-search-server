const express = require('express')
const routes = require('./routes')
const cors = require('cors');
const bodyParser = require('./bodyParser')
const PORT = process.env.PORT || 5001
const app = express()

app.use(cors())
bodyParser(app)
routes(app);
app.listen(PORT, ()=>{
    console.log(`1800 flowers server listening on port ${PORT}`)
})



