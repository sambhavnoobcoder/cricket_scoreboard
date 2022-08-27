let hts =document.getElementById("home-score").innerText
let gts =document.getElementById("guest-score").innerText
let h=0 
let g=0

function addPoints(team, pts) 
{
  if (team === "home") {
    h += pts
    document.getElementById("home-score").innerText=h
      } else {
    g += pts
    document.getElementById("guest-score").innerText = g
  } 
}



function newgame()
{
    h=0
    g=0    
    document.getElementById("home-score").innerText=0
    document.getElementById("guest-score").innerText =0
    
} 