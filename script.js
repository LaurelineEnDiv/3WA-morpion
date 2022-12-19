// DOM Element
// on Click
// ["", "", ""] notre jeu
// cas de victoire [[0,1,2,3][0,1,2,3]...]
// btn restore
// function jeu gagnant
// function changer de joueur


document.addEventListener("DOMContentLoaded", () => {

    const box = document.querySelectorAll(".container>div")
    let player = document.getElementById("player")
    const again = document.querySelector("button")

    
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [3,4,6]
        ]
    
    let nbClick = 0

    for (let i = 0; i < box.length; i++) {

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

    // fonction pour relancer le jeu

    box.forEach(function(element) {
        again.addEventListener("click", () => {
            element.innerText = " "
        })
    });

    // fonction jeu gagnant

    for (let i = 0 ; i<win.length; i++){
        let game = ["", "", ""]
        
    if(box[win[i][0]].innerText==="X") {
        game[0]=true
    }    
    
    else if (box[win[i][0]].innerText==="O") {
        game[0]=false
    }   
    
    if(box[win[i][1]].innerText==="X") {
        game[1]=true
    }    
    
    else if (box[win[i][1]].innerText==="O") {
        game[1]=false
    }  
    
    if(box[win[i][2]].innerText==="X") {
        game[2]=true
    }    
    
    else if (box[win[i][2]].innerText==="O") {
        game[2]=false
    }   
        
    }
    


})
