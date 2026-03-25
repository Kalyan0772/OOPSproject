function add() {

let id = document.getElementById("pid").value;
let name = document.getElementById("name").value;
let price = document.getElementById("price").value;
let qty = document.getElementById("qty").value;

Module.ccall(
"addProduct",
null,
["number","string","number","number"],
[id,name,price,qty]
);

alert("Product Added");
}

function show() {

Module.ccall(
"showProducts",
null,
[],
[]
);

}