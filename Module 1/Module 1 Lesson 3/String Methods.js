const sentence = "<A set of words that is complete in itself, Typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate Clauses."


function UpCaseDetec (n){
    sentence.trim(" ")
    if( sentence.length <= n){
        return console.log("No uppercase has been found on your sentence")
    }
    else if (sentence.charAt(n) === sentence.charAt(n).toLowerCase()){
        UpCaseDetec(n+1)
    } else    if (sentence.charAt(n) === sentence.charAt(n).toUpperCase()){
        return console.log("An uppercase letter has been found on your sentence, Letter:"+ sentence[n])
    }
}

UpCaseDetec(0)
console.log(sentence.charAt(0) === sentence.charAt(0).toLowerCase())