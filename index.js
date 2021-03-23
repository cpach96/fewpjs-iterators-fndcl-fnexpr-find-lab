
function superbowlWin(array){
    if(array.find(s => s.result === "W")){
        return array.find(s => s.result === "W").year
    }else{
        return undefined
    }
}