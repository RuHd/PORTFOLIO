class disc {
    constructor(n,width = 60){
        this.name = `disc${n}`
        this.width = width,
        this.height = "40px",
        this.color = " ",
        this.borderRadius = "10px",
        this.place= {
            top: " ",
            bottom: " ",
            left: " ",
            right: " ", 
        }
    }

    setColor(nameColor) {
        return this.color = nameColor
    }

    setWidth(currentWidth) {
        return this.width += currentWidth
    }
}

const groupColor = ["blue","red","yellow","purple"]
const c = document.getElementById("container")



const alldiscs = []

for (let i = 0; i<4; i++) {
    alldiscs.push(new disc(i+1))
}

var multiplier = 0
alldiscs.forEach( function(value,index) {
    value.setColor(groupColor[index])
    value.setWidth(multiplier)
    multiplier += 20

})

function createDiscs() {
    for (let i = 0; i<alldiscs.length; i++) {
        let div = document.createElement("div")
        let strWidth = alldiscs[i].width.toString()
        div.style.borderRadius = alldiscs[i].borderRadius
        div.style.backgroundColor = alldiscs[i].color
        div.style.width ="60px"
        div.style.height = alldiscs[i].height
        div.style.position = "absolute"
        div.style.bottom = "50px"
        c.appendChild(div)
       
    }

     
}

createDiscs()
console.log(c)










