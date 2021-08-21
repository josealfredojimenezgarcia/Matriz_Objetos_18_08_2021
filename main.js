

// let obj = {
//     suma : function(){
//         return this.num1 + this.num2;
//     }
// }
// let obj2 = Object.create(obj);
// obj2.num1 = 5;
// obj2.num2 = 5;

// console.log(obj2);
// // console.log(obj2.suma());


let D = 5;
let matriz = new Array(D).fill(null);

for(var i=0; i<matriz.length; i++) {
    matriz[i] = new Array(D).fill(null);
    for(var j=0; j<matriz[i].length; j++) {
        matriz[i][j] = new Array(D).fill(null);
        for(var r=0; r<matriz[i][j].length; r++) {
            matriz[i][j][r] = new Array(D).fill(null);
            for(var q=0; q<matriz[i][j][r].length; q++) {
                matriz[i][j][r][q] = new Array(D).fill(null);
            }
        }
    }
}
let obj = {datos:matriz};
Object.preventExtensions(obj);
obj.datos[0][0][0][0][0] = "José";
obj.datos[0][0][0][0][1] = "Alfredo";
obj.datos[0][0][0][0][2] = "Jimenez";
obj.datos[0][0][0][0][3] = "García";
obj.datos[4][4][4][4][4] = "José Alfredo Jimenez García";
console.log(obj);

var arrayBidimensional= new Array(4);
for (var i = 0; i < 4; i++) {
  arrayBidimensional[i] = new Array(2);
}
for (var x = 0; x < 4; x++) {
  for (var y = 0; y < 4; y++) {
    arrayBidimensional[x][y]= ((Math.random()*(20-0)).toFixed(0));
}
}
for (var x = 0; x < 4; x++) {
  for (var y = 0; y < 4; y++) {
    console.log(arrayBidimensional[x][y]);
}
}
// arrayBidimensional[0][0]="1";
// arrayBidimensional[0][1]="2 ";
// arrayBidimensional[1][0]="3";
// arrayBidimensional[1][1]="4";

// console.log("arrayBidimensional[0][0]",arrayBidimensional[0][0]);
// console.log("arrayBidimensional[0][1]",arrayBidimensional[0][1]);
// console.log("arrayBidimensional[1][0]",arrayBidimensional[1][0]);
// console.log("arrayBidimensional[1][1]",arrayBidimensional[1][1]);