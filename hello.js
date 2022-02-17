var halo = "hello world";
console.log(halo);

//deklarasi variabel
var x = 1;
let y = 2;
const z = 1;

//======== Operasi aritmatika ========
//// penjumlahan
console.log("x tambah y=",x+y);
//// perkalian
console.log("x kali y=",x*y);

//===== Pernyataan Kondisional ========
//// if
if (x>= 1){
    console.log("y sama dengan satu!")
}

//// if-else
if (y == 1){
    console.log("y besar sama dengan satu!")
}
else {
    console.log("y tidak sama dengan satu!")
}

//// if-else if-else
a=3;
b=2;
if (a < b){
    console.log("a < b");
}
else if (a > b){
    console.log("a > b");
}
else{
    console.log("a = b");
}

//====== Pengulangan ======
//// while
var a = 4;
while (a > 0.1){
    a = a - 0.1
    console.log(a);
}
console.log("==============")
//// for
var b = 4;
for (var i=0;i<10;i++){
    b = b - 0.1
    console.log(b);
}


//========Fungsi==========
function f(x){
    return x**2;
}

////fungsi transenden
var x;
function eks(x){
    return Math.exp(x);
}