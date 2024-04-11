const input = document.querySelectorAll('.input');
const botao = document.querySelector('.botao');
const required = document.querySelectorAll('.required');

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('change', function (index) {
        if (i === 0) {
            if (input[i].value != '') {
                input[i].classList.remove('naoPreenchido');
                required[i].style.visibility = "hidden";
                input[i].classList.add('preenchido');
            }else if (input[i].value == '') {
                input[i].classList.remove('preenchido');
            }
        }else if (i === 1) {
            if (input[i].value.includes("@")) {
                input[i].classList.remove('naoPreenchido');
                required[i].style.visibility = "hidden";
                input[i].classList.add('preenchido');
            }else if (input[i].value.includes('@') == false) {
                input[i].classList.remove('preenchido');
            }
        }else if (i === 2) {
            if (isNaN(input[i].value) === false && input[i].value != '') {
                input[i].classList.remove('naoPreenchido');
                required[i].style.visibility = "hidden";
                input[i].classList.add('preenchido');
            }else if (input[i].value == '') {
                input[i].classList.remove('preenchido');
            }
        }else if (i === 3) {
            if (input[i].value != '') {
                input[i].classList.remove('naoPreenchido');
                required[i].style.visibility = "hidden";
                input[i].classList.add('preenchido');
            }else if (input[i].value == '') {
                input[i].classList.remove('preenchido');
            }
        }
    })

    botao.addEventListener('click', function (x) {
        if (input[i].classList.contains('preenchido') == false) {
            input[i].classList.add('naoPreenchido');
            required[i].style.visibility = "visible";
            x.preventDefault();
        }
    })
}