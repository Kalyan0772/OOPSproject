let inventory = [];

function add() {
    let pid = document.getElementById("pid").value;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let qty = document.getElementById("qty").value;

    if(pid=="" || name=="" || price=="" || qty==""){
        alert("Please fill all fields");
        return;
    }

    let product = {
        id: pid,
        name: name,
        price: price,
        qty: qty
    };

    inventory.push(product);

    alert("Product Added!");
}

function show() {
    let output = document.getElementById("output");

    output.innerHTML = "";

    for(let i=0;i<inventory.length;i++){
        let p = inventory[i];

        output.innerHTML += 
        "ID: " + p.id + 
        " | Name: " + p.name + 
        " | Price: " + p.price + 
        " | Quantity: " + p.qty + 
        "\n";
    }
}