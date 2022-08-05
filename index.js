// Code your solutions in this file


function writeCards(names, birthday) {
    let arr = [];
    for(let i=0; i < names.length; i+=1) {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`)
    }
    return arr 
}
function countDown(integer) {
    let i = integer;
    while (i >= 0) {
        console.log(i);
        i -= 1;
    }
}