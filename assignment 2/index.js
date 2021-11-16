// function to output the rest of the sentence after the first occurrence of the letter in the sentence

function btnClicked(){
    document.getElementById("output").innerHTML = restOfSentence(document.getElementById("sentence").value, document.getElementById("letter").value);
}

function restOfSentence(sentence, letter) {
    var index = sentence.indexOf(letter);
    if (index == -1) {
        return "The letter does not exist in the sentence"
    }
    return sentence.substring(index + 1);
}
