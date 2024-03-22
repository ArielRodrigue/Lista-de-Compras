function adicionarItem() {
    var itemInput = document.getElementById("itemInput");
    var listaCompras = document.getElementById("listaCompras");

    if (itemInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = itemInput.value;
        listaCompras.appendChild(li);
        itemInput.value = "";
    } else {
        alert("Por favor, insira um item válido.");
    }
}

function limparLista() {
    var listaCompras = document.getElementById("listaCompras");
    listaCompras.innerHTML = "";
}
