function enviar() {
    var email = document.querySelector('.digite-email').value;

    if (email == null || email == "") return

    if (localStorage.getItem(email)) {
        alert("Este email já foi cadastrado.");
    } else {
        localStorage.setItem(email, "gravado");
        alert("Email cadastrado com sucesso!")
    }
}