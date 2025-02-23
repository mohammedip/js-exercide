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

let Companie1 = "cisco"
let Companie2 = "IBM"
for(let i=0;i<itCompanies.length;i++){

    if(Companie2.toLocaleLowerCase()==itCompanies[i].toLocaleLowerCase()){

        console.log(itCompanies[i]);
        break;
    }else if(Companie2.toLocaleLowerCase()!=itCompanies[i].toLocaleLowerCase()  && i<itCompanies.length-1){
        continue;
    }else{
        console.log("Company is not found");
    }
    
}

console.log("------------------");

let count=0;
let CompanyWithMoreThenOneO = [];

for(let i=0;i<itCompanies.length;i++){
    // itCompanies[i].forEach(element => {
    //     if(element=="o"){
    //         count+=1;
    //         if(count>1){
    //             CompanyWithMoreThenOneO+=itCompanies[i];
    //         }
    //     }
    // });
    for(let j=0;j<itCompanies[i].length;j++){
        if(itCompanies[i][j]=="o"){
                    count+=1;
                    if(count>1){
                        CompanyWithMoreThenOneO.push(itCompanies[i]);
                        count=0;
                    }
                }
    }
}
console.log(CompanyWithMoreThenOneO);

console.log("------------------");

itCompanies.sort();
console.log(itCompanies);

console.log("------------------");

itCompanies.reverse();
console.log(itCompanies);

console.log("------------------");

let first3CompaniesSlacied= itCompanies.slice(0,3);
console.log(itCompanies);
console.log(first3CompaniesSlacied);

console.log("------------------");

let last3CompaniesSlacied= itCompanies.slice(-2);
console.log(itCompanies);
console.log(last3CompaniesSlacied);

console.log("------------------");
