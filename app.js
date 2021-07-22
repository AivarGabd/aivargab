const express = require('express')
const exphbs = require('express-handlebars')
let sslRedirect = require('heroku-ssl-redirect').default
const path = require('path')
const app = express()



app.use(express.static(path.join(__dirname, 'public')))
app.use(sslRedirect())

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')


app.use(express.json({}))
app.use(express.urlencoded({extended: true}))
app.set('trust proxy', 1) 

app.get("/", async (req, res) => {
    res.render('home')
})

app.get("/i-love-ny", async (req, res) => {
    res.render('i-love-ny')
})

app.get("/process", async (req, res) => {
    res.render('process')
})
app.get("/life", async (req, res) => {
    res.render('life')
})



const PORT = process.env.PORT || 3010
app.listen(PORT, console.log(`Server started on http://localhost:${PORT}/` ))