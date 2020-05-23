const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', (req, res) => {
    const about = {
        avatar_url : "https://avatars1.githubusercontent.com/u/36867823?s=460&u=9fcc56113a19cfde20422bd05f6a2d26af8f56c2&v=4",
        name: "Maicon Boer",
        role: "Aluno - Rocketseat",
        description: 'Programador front-end, focado em manter-se atualizado, com a tecnologias mais utilizadas no mercado, meus repositórios no <a href="https://github.com/maiconboer" target="_blank">GitHub</a>',
        links: [
            {name: "GitHub", url: "https://github.com/maiconboer"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/maicon-boer-35210797/"}
        ]
    }
    return res.render('about', { about })
})

server.get('/portfolio', (req, res) => { 
    return res.render('portfolio', { items: videos })
})

server.get('/video', (req, res) => {
    const id = req.query.id
    const video = videos.find(video => video.id === id)
       
    if(!video) {
        return res.send('Video not found!')
    }

    return res.render('video', { item: video })

    res.send(id)
})
server.listen(5000, () => console.log('Server is running'))