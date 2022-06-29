let ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]

let sum = []
function iterate() {
    if (ls.length === 0) return console.log([0]) 
    let res = ls.reduce(function(total,value){
        return total += value
    })
    sum.push(res)
        
    if (ls.length == 1) {
        sum.push(0)
        return console.log(sum)
    }
    ls.shift()
    iterate()
}

iterate()
let teste = [10037855,9293730,9292795,9292388,9291934,9291504,9291414,9291270,2581057,2580168,2579358,0]
console.log(sum == teste )




