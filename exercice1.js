let arrayNumbers=[];
arrayNumbers=[1,5,4,8,7];

console.log(arrayNumbers.length);
console.log("------------------");
console.log(arrayNumbers[0],arrayNumbers[(arrayNumbers.length-1)/2],arrayNumbers[arrayNumbers.length-1] );

let mixedDataTypes=[true,1,"hi",56,false,"false"];
console.log(mixedDataTypes.length);
console.log("------------------");

let itCompanies =["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log("------------------");
console.log(itCompanies.length);
console.log("------------------");
console.log(itCompanies[0],itCompanies[(itCompanies.length-1)/2],itCompanies[itCompanies.length-1] );
console.log("------------------");

for(let i=0;i<itCompanies.length;i++){
    console.log(itCompanies[i]) 
}
console.log("------------------");

for(let i=0;i<itCompanies.length;i++){

    let Companies=itCompanies[i].toUpperCase()
    console.log(Companies) 
}
console.log("------------------");

let string="";
for(let i=0;i<itCompanies.length;i++){

    if(i==itCompanies.length-2){
        string+=itCompanies[i]+" and "
    }else if(i==itCompanies.length-1){
        string+=itCompanies[i]+" are big IT companies."
    }else {
        string+=itCompanies[i]+", " 
    }
    
}
console.log(string);
console.log("------------------");




