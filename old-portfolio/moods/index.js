const express = require("express");
const cors = require('cors');
const { json } = require("express");
const app = express();
app.use(cors());
app.use(json());
class Player{
  constructor(id){
    this.id = id;
  };
  moodPlayer(mood){
    this.mood = mood;
  }
  updatePosition(x,y){
    this.x = x;
    this.y = y;
  }
  feelPlayer(feels){
    this.feelPlayer = feels;
  }
};
class Mood {
  constructor(name){
    this.name = name;
  }
}
const players = [];
app.get('/welcome',(req,res)=>{
let id = `${Math.random()}`;
let player = new Player(id);
players.push(player);
res.setHeader('Access-Control-Allow-Origin',"*");
  res.send(id);
})
app.post("/mood/:playerId",(req,res)=>{
  const playerId = req.params.playerId || '';
  const name = req.body.mood || '';
  const mood = new Mood (name);
  const playerIndex = players.findIndex((player)=>playerId === player.id
  );
  if (playerIndex >= 0) {
    players[playerIndex].moodPlayer(mood);
  }
  console.log(players);
  console.log(playerId);
  res.end();
});
app.post("/mood/:playerId/direction",(req,res)=>{
  const playerId = req.params.playerId || '';
  const x =req.body.x || 0;
  const y = req.body.y || 0;
  const playerIndex = players.findIndex((player)=>playerId === player.id
  );
  if (playerIndex >= 0) {
    players[playerIndex].updatePosition(x,y);
  }
  const playerEnemy = players.filter((player)=>playerId !== player.id)
  res.send({
    playerEnemy
  });
})
app.post("/mood/:playerId/feels",(req,res)=>{
  const playerId = req.params.playerId || '';
  const playerFeels = req.body.feels || [];
  const playerIndex = players.findIndex((player)=>playerId === player.id
  );
  if (playerIndex >= 0) {
    players[playerIndex].feelPlayer(playerFeels)
  }
  res.end();
});
app.get("/mood/:playerId/feels",(req,res)=>{
  const playerId = req.params.playerId || '';
const player = players.find((player)=>player.id === playerId)
res.send({
  feels: player.feelPlayer || []
})
});
app.listen(8080, () => {
  console.log("El servidor funciona");
});
