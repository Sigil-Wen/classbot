const socket = io('/') //socket conencts to root

socket.emit('join-room', ROOM_ID, 10) //calls the join room event sending the id and user id
socket.on('user-connected', userId =>{
    console.log('User connected: '+userId)
})