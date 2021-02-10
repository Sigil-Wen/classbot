const express = require('express')
const app = express() 
const server = require('http').Server(app) //creates a server usable with socket.io
const io = require('socket.io')(server) //creates a server and passes through socket.io 
const {v4: uuidV4} = require('uuid')


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.redirect(`/${uuidV4()}`) //redirects to a random uuid 
})

app.get('/:room',(req,res)=>{
    res.render('room', {roomId: req.params.room })
})

io.on('connection', socket => { //everytime there is a connection to the socket
    socket.on('join-room', (roomId, userId) => {
        console.log(roomId, userId)
        socket.join(roomId) //socket joins room witht his user, everything in this room will sent to user
        socket.to(roomId).broadcast.emit('user-connected', userId)//sends a message to everyone, listenable event with userId
    } ) //event listener 

})

server.listen(3000)


