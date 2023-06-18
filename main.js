
let boton_no = document.getElementsByClassName('segunda')[0];

boton_no.onmouseover = () => {
      boton_no.style.position = "absolute";
      boton_no.style.left = Math.random()*300 + 'px';
      boton_no.style.top = Math.random()*200 + 'px';
}

// modal

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
modal_container.classList.remove('show');
});
