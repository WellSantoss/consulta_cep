const btnConsultar = document.querySelector('.search button');
const inputCEP = document.querySelector('#cep');
inputCEP.focus();

btnConsultar.addEventListener('click', valida);

function valida(event) {
  event.preventDefault();

  const msg = document.querySelector('form .msg');
  if (inputCEP.value != '' && inputCEP.value.length == 8) {
    consulta(inputCEP.value);
    msg.innerText = '';
  }
  else {
    const inputs = document.querySelectorAll('.response input');

    inputs.forEach(input => {
      input.value = '';
    })

    msg.innerText = 'Informe um CEP válido!';
    inputCEP.focus();
  }
}

function consulta(value) {
  const inputRua = document.querySelector('#rua');
  const inputBairro = document.querySelector('#bairro')
  const inputCidade = document.querySelector('#cidade')
  const inputEstado = document.querySelector('#estado')
  const inputDDD = document.querySelector('#ddd')

  fetch(`https://viacep.com.br/ws/${value}/json/`)
    .then(response => response.json())
    .then(response => {
      inputRua.value = response.logradouro;
      inputBairro.value = response.bairro;
      inputCidade.value = response.localidade;
      inputEstado.value = response.uf;
      inputDDD.value = response.ddd;
    });
}
