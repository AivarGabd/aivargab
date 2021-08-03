const express = require("express");
const exphbs = require("express-handlebars");
let sslRedirect = require("heroku-ssl-redirect").default;
const path = require("path");
const fs = require("fs");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(sslRedirect());

const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", 1);

let books_colors = []
let books_genres = JSON.parse(fs.readFileSync('public/home/content/book_genre.json', 'utf8'))
books_genres.forEach((genre) => {
    genre.list.forEach((book_genre) => {
        books_colors.push(book_genre.color);
    })
})

let projects = [{
        id: "ideaparallels",
        colors: books_colors,
        nodejs: [{
                name: "@a2seven/yoo-checkout",
                description: "(платeжная система юкассы)",
            },
            {
                name: "@azure/cosmos",
                description: "(лучше Mongo: для работы с большими JSON и поддерживает SQL запросы)",
            },
            {
                name: "async",
                description: "",
            },
            {
                name: "bcryptjs",
                description: "",
            },
            {
                name: "cookie-session",
                description: "",
            },
            {
                name: "express",
                description: "",
            },
            {
                name: "express-handlebars",
                description: "",
            },
            {
                name: "heroku-ssl-redirect",
                description: "",
            },
            {
                name: "mobile-detect",
                description: "(Для редирект IOS или Android)",
            },
            {
                name: "Nodemailer",
                description: "(Рассылка по почте)",
            },
            {
                name: "nodemailer-juice",
                description: "(CSS в email)",
            },
            {
                name: "nodemon",
                description: "",
            },
            {
                name: "uuid",
                description: "",
            },
        ],
        Frontend: [{
                name: "d3.js",
                description: "(Визуализация данных)",
            },
            {
                name: "sweetalert2@10",
                description: "(Диалоговые окна)",
            },
            {
                name: "Clipboard",
                description: "(Запись в буфер обмена)",
            },
            {
                name: "Swiperjs",
                description: "(Slider)",
            },
            {
                name: "GSAP ScrollTrigger",
                description: "(Parallax для мобильных устройств)",
            },
        ],
        UX: [
            "Чтобы сократить время на поиск необходимого элемента на главном экране – каждой категории присвоен свой уникальный цвет.",
            "Чтобы пользователь быстрее обрел привычку ориентироваться на цвета: 1)Цвета должны отличаться высокой контрастностью от друг друга. 2)Цвета должны плавно манятся.",
            "Сайт получился весьма сложным в использовании, поэтому цель была – поймать «топорный стиль» facebook, Instagram и других самых популярных сайтов.",
        ],
    },
    {
        id: "art-lebedev-patnashki",
        colors: ["whitesmoke", "#dddddd"],
        nodejs: [{
                name: "express",
                description: "",
            },
            {
                name: "express-handlebars",
                description: "",
            },
            {
                name: "heroku-ssl-redirect",
                description: "",
            },
            {
                name: "nodemon",
                description: "",
            },
        ],
        Frontend: [{
                name: "normalize.min.css",
                description: "",
            },
            {
                name: "asscroll x GSAP ScrollTrigger",
                description: "(Smooth parallax)",
            },
            {
                name: "jquery",
                description: "(Получение валюты с биржи)",
            },
        ],
        UX: [
            "Переверстать страницу – презентацию",
            "<a href='https://www.artlebedev.ru/i-love-ny/'>Пятнашки «Я люблю Нью-Йорк»</a>",
        ],
    },
];

app.get("/", async(req, res) => {
    let projects_data = { projects: JSON.stringify(projects) };
    res.render("home", { projects_data });
});

app.get("/i-love-ny", async(req, res) => {
    res.render("i-love-ny");
});

app.get("/i-love-ny-process", async(req, res) => {
    res.render("i-love-ny-process");
});
app.get("/i-love-ny-life", async(req, res) => {
    res.render("i-love-ny-life");
});

app.get("/ideaparallels-texteditor", async(req, res) => {
    let texts = fs.readFileSync('public/ideaparallels-text-editor/book_subchapters.json', 'utf8')
    res.render("ideaparallels-texteditor", { texts });
});


const PORT = process.env.PORT || 3010;
app.listen(PORT, console.log(`Server started on http://localhost:${PORT}/`));