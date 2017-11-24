var socket = io();

socket.on('connect',function(){
  console.log("connected to server");

  socket.emit('CreateMessage', {
    from:'AnkitDwivedi@gmail.com',
    text:'Email send'
  });
});

socket.on('disconnect',function(){
console.log("Disconnected to server");
});
socket.on('newMessage', function(email){
  console.log("New message",email);
});
