const gameboard=document.querySelector(".board")
const numbers=document.querySelector(".numbers")
const letters=document.querySelector(".letters")

let white=true
let letter="ABCDEFGH"

for (let i=1;i<=64;i++)
    {
        let square=document.createElement("div")
        sqaure.classList.add("square")
        if (!white)
            {
                square.classList.add("black")
            }
        white=!white
        if (i%8===0)
            {
                white=!white
            }
        gameboard.appendChild(square)
    }

for (i=1;i<=8;i++)
{
   let numberli=document.createElement("li")     
   numberli.textContent=i
    numbers.appendChild(numberli)
    let letterli=document.createElement("li")
    letterli.textContent=letter[i-1]
    letters.appendChild(letterli)
}
