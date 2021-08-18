
const howru = (max, input) => {
    let result =[];
    let current = "";
    for(let i=0; i < input.length; i++){
        if((input[i].length + current.length + 1) <= max){
            current = current != "" ?  current + "-" + input[i] : input[i];//to handle initial hyphen
        }else{
            result.push(current);
            current = input[i];
        }
    }
    result.push(current);//last element
    console.log("result :" + max + " : " +result.join("; "));
}

howru(10, ["how", "are", "you", "doing", "senthil"]);
howru(10, ["how", "are", "u", "doing", "senthil"]);
howru(7, ["how", "are", "u", "doing", "senthil"]);