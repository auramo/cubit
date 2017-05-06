const express = require('express')
const compression = require('compression')
const path = require('path')

const app = express()
const serverHttpPort = process.env.PORT || 8002

app.use(compression({threshold: 512}))
app.use('/', express.static(`${__dirname}/../dist`))


app.listen(serverHttpPort, (req, resp) => {
    console.log('Cubit server listening on port ', serverHttpPort)
})
