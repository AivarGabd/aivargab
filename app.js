const express = require('express')
const exphbs = require('express-handlebars')
let sslRedirect = require('heroku-ssl-redirect').default
const path = require('path')
const fs = require('fs')
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
    fs.readFile('public/home/content/book_genre.json', (err, data) => {
        if (err) throw err
        let books_colors = []
        let books_genres = JSON.parse(data)
        books_genres.forEach(genre =>{
            genre.list.forEach(book_genre =>{
                books_colors.push(book_genre.color)
            })
        })
        let colors_array = JSON.stringify(books_colors)
        res.render('home',{colors_array})
    })
})

app.get("/i-love-ny", async (req, res) => {
    res.render('i-love-ny')
})

app.get("/i-love-ny-process", async (req, res) => {
    res.render('i-love-ny-process')
})
app.get("/i-love-ny-life", async (req, res) => {
    res.render('i-love-ny-life')
})



const PORT = process.env.PORT || 3010
app.listen(PORT, console.log(`Server started on http://localhost:${PORT}/` ))