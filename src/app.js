let sayi1 = 10
sayi1 = "Engin Demiroğ"
let student = {id:1 , name:"Engin"}
//console.log(student)

function save(puan=10,ogrenci) {
    //console.log(ogrenci.name + " : " + puan)
}

//save(undefined,student);

let students = ["Engin Demiroğ","Halit Kalaycı","Engin Toprak","Büşra"]

// console.log(students)

let students2 = [student,{id:1, name:"Halit"},"Ankara",{city:"İstanbul"}]

//console.log(students2)

// rest
// c# => params
// java => varArgs

let showProducts = function (id,...products) {
    console.log(id)
    console.log(products[0])
    
}

//console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"])

// spread
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

// Destructuring = Var olan değerleri değişkenlere atamak
let populations = [10000,20000,30000,[4000,10000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number){
    console.log(small1)
}

someFunction(populations)

let category = {id:1 , name:"İçecek"}
console.log(category.id)
console.log(category["name"]) // =>2.gösteriş 

let {id,name} = category
console.log(id)
console.log(name)
