AOS.init();

const form = document.getElementById('formc')
const nome = document.getElementById('username')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')

form.addEventListener('submit', (e => {
    checkInputs();
}))

function checkInputs() {
    const nomeValue = nome.value
    const emailValue = email.value
    const telefoneValue = telefone.value

    if(nomeValue == "") {
        setErrorfor(nome, 'O nome é obrigatório')
    } else {
        setSuccessfor(nome)
    }

    if(emailValue == "") {
        setErrorfor(email, 'o email é obrigatório')
    } else if(!checkEmail(emailValue)) {
        setErrorfor(email, 'o email é inválido')
    } else {
        setSuccessfor(email)
    }

    if(telefoneValue == ""){
        setErrorfor(telefone, 'o telefone é obrigatório')
    }else {
        setSuccessfor(telefone)
    }
}

function setSuccessfor(input) {
    const formControl = input.parentElement;

    //add classe sucesso
    formControl.className = "form-control success"
}

function setErrorfor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add msg erro
    small.innerText = message;

    //add classe error
    formControl.className = "form-control error";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}

const carrosel = document.querySelector(".carousel")
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCard = carrosel.querySelector(".card").offsetWidth;
const carouselChildrens = [...carrosel.children]

let cardPerView = Math.round(carrosel.offsetWidth / firstCard)

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carrosel.insertAdjacentHTML("afterbegin", card.outerHTML)
})

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carrosel.insertAdjacentHTML("beforeend", card.outerHTML)
})

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carrosel.scrollLeft += btn.id === "left" ? -firstCard : firstCard
    })
})

const infiteScroll = () => {
    if(carrosel.scrollLeft === 0) {
        carrosel.scrollLeft = carrosel.scrollWidth - (2 * carrosel.offsetWidth)
    } else if(Math.ceil(carrosel.scrollLeft) === carrosel.scrollWidth - carrosel.offsetWidth) {
        carrosel.scrollLeft = carrosel.offsetWidth;
    }
}

carrosel.addEventListener("scroll", infiteScroll)