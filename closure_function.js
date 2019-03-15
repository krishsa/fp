//Example 1

const addTo = (x) => {
    return (y) => {
        return x + y
    }
}
console.log("Add to : "+addTo(1)(2))

//Example 2
function newCounter(){
    let count = 0
    return function(){
        console.log(count)
        count++
        return count
    }
}
let counter = newCounter()
console.log("Counter: "+counter())
console.log("Counter: "+counter())
console.log("Counter: "+counter())
console.log("Counter: "+counter())
