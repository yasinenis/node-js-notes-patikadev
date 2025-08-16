import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('Contact Page')
})

app.use((req, res) => {
  res.status(404).send('404 Page not Found')
})

const port = 3000;

app.listen(port, ()=> {
    console.log(`Server running at ${port} port..`);
});