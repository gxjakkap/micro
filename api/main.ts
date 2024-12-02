import express from 'express'

const app = express()

app.get('/echo', (req, res) => {
    const data = decodeURIComponent(req.query.data as string || 'blank')
    res.send(`${data}`)
})

app.listen(3000, () => {
    console.log('listening')
})

export default app