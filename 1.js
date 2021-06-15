var s1 = "LOS ANGELES";
var s2 = "LAS VEGAS";

var a1= s1.split("");
var a2= s2.split("");

const total = a1.concat(a2).sort();
var count = [];

for (let i=0; i<total.length; i++){
    let q = total[i];
    let b = -1;
    for (let j=0; j<total.length; j++){
        if(q==total[j]){
            b+=1;
        }
    }
    count[i]=b;
}

const x=[];

for(let i=0; i<count.length+1; i++){
    if(count[i]== 0 && total[i]!=''){
        x.push(total[i]);
    }
}

console.log(x);