
let animals =[
    {name:'Blue',    species : 'bunny'},
    {name:'Carniya', species : 'cat'},
    {name:'Ceaser',  species : 'cat'},
    {name:'Duggy',   species : 'dog'},
    {name:'Suzi',    species : 'dog'},
    {name:'Peppa',   species : 'fish'},
    {name:'Glazzel', species : 'deer'},
    {name:'George',  species : 'fish'}
]

//Simple functions
//--------------------
let dogs = []
for(var i =0; i< animals.length; i++){
    if(animals[i].species === 'dog'){
        dogs.push(animals[i])

    }
}
for(var i =0; i < dogs.length; i++){
    console.log(dogs[i])
}

 

// Higher Order function
//-----------------------
let dog_ls = animals.filter(function(animal){
    return animal.species === 'dog'
})
console.log("<----------Higher Order Function---------------> ")
dog_ls.map(v => console.log(v))

//Example 2
const once = f => {
    let done = false 
    return (...args) => {
        if(!done){
            done = true
            f(...args)
        }
    }
}
const submit = a => console.log(a + " submitted")
submit("form")
submit("form")
submit("form")

const submitOnce = once(submit)
submitOnce("Action")
submitOnce("Action")
submitOnce("Action")