const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');

const all_projects = [
    {
        "type": "desktop",
        "lang": "python",
        "title": "Morse Code Converter",
        "description": "A desktop application that converts test from & to Morse Code.",
        "github": "https://github.com/RanaHafez/MorseCodeConverter",
        "image": "https://raw.githubusercontent.com/RanaHafez/MorseCodeConverter/master/morse-in-action.gif"
    },
    {
        "type": "web",
        "lang": "python",
        "title": "Recognize What I Say.",
        "description": "A Flask web app that recognizes speach in 2 different languages (Ar and En).",
        "github": "https://github.com/RanaHafez/Speech-Recognition",
        "image": "https://raw.githubusercontent.com/RanaHafez/Speech-Recognition/master/img.png"
    },
    {
        "type": "desktop",
        "lang": "python",
        "title": "Typing Speed Test",
        "description": "A desktop app that calculates your typing wpm, accuracy, and Net wmp.",
        "github": "https://github.com/RanaHafez/Measure-Typing-Speed-Desktop",
        "image": "https://raw.githubusercontent.com/RanaHafez/Measure-Typing-Speed-Desktop/master/typing-speed.gif"
    },
    {
        "type": "web",
        "lang": "python",
        "title": "Robot Control Panel",
        "description": "A Flask website that controls the movement of the robot and saves the movements in a database.",
        "github": "https://github.com/RanaHafez/RobotControlPanel",
        "image": "https://raw.githubusercontent.com/RanaHafez/RobotControlPanel/master/img.png"
    },
    {
        "type": "desktop",
        "lang": "python",
        "title": "Breakout Game",
        "description": "This is a desktop game using python turtle.",
        "github": "https://github.com/RanaHafez/breakout-game",
        "image": "https://raw.githubusercontent.com/RanaHafez/breakout-game/master/img.png"
    },
    {
        "type": "web",
        "lang": "python",
        "title": "To Do Website",
        "description": "This Website allows you to create your to do list using Flask and SqlAlchemy",
        "github": "https://github.com/RanaHafez/To-Do-Website",
        "image": "https://raw.githubusercontent.com/RanaHafez/To-Do-Website/master/img_2.png"
    },
    {
        "type": "web",
        "lang": "python",
        "title": "Extract Colors from Image",
        "description": "A website that extracts the colors from a selected image. Using Flask-Python and HTML.",
        "github": "https://github.com/RanaHafez/Extract_Colors_From_Image",
        "image": "https://raw.githubusercontent.com/RanaHafez/Extract_Colors_From_Image/master/img.png"
    },
    {
        "type": "desktop",
        "lang": "python",
        "title": "Disappearing Text Writing App",
        "description": "A desktop app that allows writers to write thoughts none stop and if the writer stops for 5 seconds all text will disappear.",
        "github": "https://github.com/RanaHafez/Disappearing-Text-Writing-App",
        "image": "https://raw.githubusercontent.com/RanaHafez/Disappearing-Text-Writing-App/master/img.png"
    },
    {
        "type": "web",
        "lang": "python",
        "title": "Cafes-API-Website",
        "description": "A website that allows you to search for a cafe, to add your own cafe, and to view the cafes added to see whether they have what you want. For Example, toilets or free wifi",
        "github": "https://github.com/RanaHafez/Cafes-API-Website",
        "image": "https://raw.githubusercontent.com/RanaHafez/Cafes-API-Website/master/img.png"
    },
{
"type": "desktop",
        "lang": "python",
        "title": "Image Watermarking Desktop App",
        "description": "A Desktop app that adds my logo to locally stored images on my PC.",
        "github": "https://github.com/RanaHafez/My-Image-Watermarking-Desktop-App",
        "image": "https://raw.githubusercontent.com/RanaHafez/My-Image-Watermarking-Desktop-App/master/img.png"
    },
{
"type": "script",
        "lang": "python",
        "title": "MY TIC TAC TOE",
        "description": "The game has 2 players. they can play with O or X. the game chooses which player plays with which symbol.",
        "github": "https://github.com/RanaHafez/MyTicTacToe",
        "image": "https://raw.githubusercontent.com/RanaHafez/MyTicTacToe/master/tictactoe.gif"
    },
{
"type": "web",
        "lang": "python",
        "title": "Elephants in History",
        "description": "A website that uses data from a public API. the website allows to get a random elephant in history, to see it and explore it. allows you to search for an elephant",
        "github": "https://github.com/RanaHafez/Elephant_History_Website",
        "image": "https://raw.githubusercontent.com/RanaHafez/Elephant_History_Website/master/img.png"
    },
{
"type": "scraping",
        "lang": "python",
        "title": "Web Scraping (Top 100 anime series of all time)",
        "description": "A custom web scraping project, collecting the 100 top anime series of all time.",
        "github": "https://github.com/RanaHafez/100-anime-series-web-scraping",
        "image": "https://raw.githubusercontent.com/RanaHafez/100-anime-series-web-scraping/master/img.png"
    },
    {
        "type": "web",
        "lang": "python",
        "title": "Smartest Methods Get Website",
        "description": "This website allows to save an integer in the db and views the integers saved to the db.",
        "github": "https://github.com/RanaHafez/Sensor-Values-to-Database-through-GET",
        "image": "https://raw.githubusercontent.com/RanaHafez/Sensor-Values-to-Database-through-GET/master/img.png"
    },
    {
        "type": "desktop",
        "lang": "python",
        "title": "Convert PDF to AudioBook",
        "description": "A desktop app that converts pdf to audio.",
        "github": "https://github.com/RanaHafez/PDF-to-AudioBook",
        "image": "https://raw.githubusercontent.com/RanaHafez/PDF-to-AudioBook/master/img_1.png"
    },
    {
        "type": "app",
        "lang": "dart",
        "title": "Gaith Project",
        "role": "Front-End Developer",
        "description": "Gaith is a cross-platform app that allows women all around the world to memorize holy Quran with assesmnets.",
        "play_store": "https://play.google.com/store/apps/details?id=com.rslTeam.gaith_alqurani",
        "ios_store": "https://apps.apple.com/app/%D8%BA%D9%8A%D8%AB-%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86%D9%8A/id1642135262",
        "image": "\public/gaith.jpg",
    },
    {
        "type": "app",
        "lang": "dart",
        "title": "Blocker Project",
        "role": "Full-Stack Developer",
        "description": "My graduation project. Imagine being able to read as many books as you want!! this app allows readers to provide and borrow books.",
        "github": "https://github.com/RanaHafez/Graduation_Project_BLocker",
        "image": "\public/blocker.gif"
    },
    {
        "type": "app",
        "lang": "dart",
        "title": "Quiz Me App",
        "role": "Full-Stack Developer",
        "description": "Quiz me!! an app that will test you knowledge in computers by asking 10 questions. The questions are from opendb API.",
        "github": "https://github.com/RanaHafez/QuizMeApp",
        "image": "\public/blocker.gif"
    }
];
// app.get("/", (req, res) => {

// });

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));

const corsOptions ={
    origin:'https://portofolio-8jzk.onrender.com', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use('/public', express.static('public'));
app.use(cors(corsOptions));

app.get("/server/web", (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://portofolio-8jzk.onrender.com");
    const web_projects = [];
    all_projects.forEach(project => {
        if (project.type == "web"){
            web_projects.push(project);
        }
    });
    res.json({projects: web_projects});
});

app.get("/server/app", (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://portofolio-8jzk.onrender.com");
    const url = req.protocol + '://' + req.get('host')
    const app_projects = [];
    all_projects.forEach(project => {
        if (project.type == "app"){
            const ans = {}
            for (const key in project){
                if (key == "image") {
                    ans[key] = url + "/" + project[key];
                } else {
                    ans[key] = project[key];
                }
            }
            app_projects.push(ans);
        }
    });
    res.json({projects: app_projects});
});

app.get("/server/python", (req, res) => {
    res.header("Access-Control-Allow-Origin", "https://portofolio-8jzk.onrender.com");
    const py_projects = [];
    all_projects.forEach(project => {
        if (project.lang == "python"){
            py_projects.push(project);
        }
    });
    res.json({projects: py_projects});
});
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//   });
app.listen(PORT, () => {
    console.log("Rana");
})