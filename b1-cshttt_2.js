let M=[ [0,3,1,1],
[4,1,3,2],
[3,4,0,5],
[1,0,3,4],
[1,1,5,0],
]
let i=0,j=0,k=0;
//console.log("M=");
console.log(M);
let rows = [];
for( i=0;i<M.length;i++){
    for( j=0;j<M[0].length;j++){
        if(M[i][j]===0){
            rows.push([i,j]);
        }
    }
}
console.log("rows=");
console.log(rows);


for( k=0;k<rows.length;k++){
    let cur0 = rows[k][0]; //console.log(M);
    let  cur1 = rows[k][1];
    let sum_sim = 0;
    let sum_sim_r = 0;
    for( i=0;i<M[0].length;i++){
        if(i!==cur1){
            let sum1=0;
            let sum2=0;
            let sum3=0;
            for( j=0;j<M.length;j++){
                if (M[j][cur1] !== 0 && M[j][i] !==0){
                    sum1 += M[j][cur1]*M[j][i]; 
                    sum2 += M[j][cur1]*M[j][cur1];
                    sum3 += M[j][i] *M[j][i];
                }     
            }
            if(i===M[0].length){
                i--;
            }
            if(j===M.length){
                j--;
            }
            let cos = sum1/(Math.sqrt(sum2*sum2)*Math.sqrt(sum3*sum3));
                sum_sim += Math.abs(cos);
                sum_sim_r += cos* M[j][i];   
        }
    }
  //  console.log(sum_sim_r/sum_sim);
  //  console.log(M[0] , M[1])
    M[cur0][cur1] = sum_sim_r/sum_sim;
}
//console.log("M2=");
console.log(M);