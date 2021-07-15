function enviar() {
    var email = document.querySelector('.digite-email').value;

    if (email == null || email == "") return

    if (!email.includes("@")) {
        alert("Este email não é válido.");
    } else if (localStorage.getItem(email)) {
        alert("Este email já foi cadastrado.");
    } else {
        localStorage.setItem(email, "gravado");
        alert("Email cadastrado com sucesso!")
    }
    limparCampo();
}

function limparCampo() {
    document.querySelector('.digite-email').value = "";
}