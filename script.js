
// DOM Element
// on Click
// ["", "", ""] notre jeu
// cas de victoire [[0,1,2,3][0,1,2,3]...]
// btn restore
// function jeu gagnant
// function changer de joueur


document.addEventListener("DOMContentLoaded", ()=> {
    
    const box = document.querySelectorAll(".container>div")
    let player = document.getElementById("player")
    const again = document.querySelector("button")
    
    const game = ["", "", ""]
    let nbClick = 0
    
    for (let i = 0; i<box.length; i++) {
        
        box[i].addEventListener("click", () => {
            nbClick++;
            if (nbClick % 2 === 1) {
                player.innerText = "O, à vous de jouer"
                box[i].innerText = "O"
                
            }
            
            else {
                player.innerText = "X, à vous de jouer"
                box[i].innerText = "X"
            }
        })
        
    }
    
})
    