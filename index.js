// Write your solution here!
const cats=["Milo","Otis","Garfield"]
function destructivelyAppendCat(Ralph){
cats.push("Ralph")
}
function destructivelyPrependCat(Bob){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(Broom){
    const newcats=[...cats,"Broom"]
    return newcats
}
function prependCat(Arnold){
    const newcats=["Arnold",...cats]
    return newcats
}
function removeLastCat(){
    const newcats=cats.slice(0,-1)
    return newcats
}
function removeFirstCat(){
    const newcats=cats.slice(1)
    return newcats
}