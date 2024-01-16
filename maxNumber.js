function minNumber (input){
    let index = 0
let num = Number(input[index])
index++
let min= Number.MAX_SAFE_INTEGER;
while (num !== "Stop"){
    let theNumber=Number(num);
    if(num<min){
        min=theNumber;
    }
    num=input[index];
    index++
}

    console.log(min);
}
minNumber(["100",

"99",

"80",

"70",

"Stop"])