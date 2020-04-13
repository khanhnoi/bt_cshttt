let M=[ [5,3,0,1],
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
    let  cur0 = rows[k][0]; //console.log(M);
    let  cur1 = rows[k][1];
    let sum_sim = 0;
    let sum_sim_r = 0;
    for( i=0;i<M.length;i++){
        if(i!==cur0){
            let sum1=0;
            let sum2=0;
            let sum3=0;
            for( j=0;j<M[0].length;j++){
                if (M[cur0][j] !== 0 && M[i][j] !==0){
                    sum1 += M[cur0][j]*M[i][j] 
                    sum2 += M[cur0][j]*M[cur0][j]
                    sum3 += M[i][j]*M[i][j]
                }     
            }
            if(j===M[0].length){
                j--;
            }
            let cos = sum1/(Math.sqrt(sum2*sum2)*Math.sqrt(sum3*sum3));
                sum_sim += Math.abs(cos);
                sum_sim_r += cos* M[i][j];   
        }
    }
  //  console.log(sum_sim_r/sum_sim);
  //  console.log(M[0] , M[1])
    M[cur0][cur1] = sum_sim_r/sum_sim;
}
//console.log("M2=");
console.log(M);