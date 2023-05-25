function counter (){
    var count = 1 
    function add(count){
       return ++count
    }
    return `original count: ${count}, new count: ${add(count)}`
}

console.log(counter())