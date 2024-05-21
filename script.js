 

// let menu = document.getElementsByClassName("menu")[0]
let menu = document.querySelector(".menu")
let iconeBarras = document.getElementById("icone-barras")
let Xlogo = document.getElementById("xlogo")

function abrirFecharMenu() {
    console.log(menu);

    if (menu.classList.contains("menu")) {
        menu.classList.remove("menu")
        Xlogo.style.display = "inline"
        iconeBarras.style.display = "none"

    } else {
        menu.classList.add("menu")
        Xlogo.style.display = "none"
        iconeBarras.style.display = "inline"
    }
}

window.onresize = () => {
    menuclassList.remove("menu")
    Xlogo.style.display = "inline"
    iconeBarras.style.display = "none"
}


const solicitarOrcamento = (event) => {
    let valorEmail = document.getElementById("E-mail").value

    let valorContato = document.getElementById("Contato").value

    console.log(valorEmail)
    console.log(valorContato)


    let dadosForm = {
        email: valorEmail,
        Contato: valorContato
    }


    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify(dadosForm)
    })
        .then(resposta => {
            console.log(resposta)
            document.querySelector("#contato form").reset()
            alert("Solicitação cadastrada!!!!")
        })
        .catch(erro => {
            console.erro(erro)
            alert("Erro desconhecido ")
        })

    event.preventDefalt()
}
