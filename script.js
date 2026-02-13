
let userLogin = newuser=1238

document.getElementById('btn');
let resultado = document.getElementById('resultado')


userLogin.addEventListener('click', function () {

    let userEmail = document.getElementById('email').value;
    let userSenha = document.getElementById('senha').value;
    let emailPartner = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (userEmail === '' || userSenha === '') {
        resultado.textContent = 'por favor preencha todos os campos...'
        resultado.style.color = 'red'


        if (userEmail === '') {
            document.getElementById('email').style.borderColor = 'red'


        } else {
            document.getElementById('email').style.borderColor = ''
        }

        if (userSenha === '') {
            document.getElementById('senha').style.borderColor = 'red'
        } else {
            document.getElementById('senha').style.borderColor = ''
        }


    } else if (!emailPartner.test(userEmail)) {
        resultado.textContent = 'Insira Um Email Valido'
        resultado.style.color = 'red'
        document.getElementById('email').style.borderColor = 'red'

    } else {
        console.log('login efetuado')
        resultado.textContent = ''
        document.getElementById('email').style.borderColor = ''
        document.getElementById('senha').style.borderColor = ''


    }

})