//*****************************IMG LOGO**************************************** */


const logoLD = document.querySelector('.header-image'); 

logoLD.addEventListener('click', ()=>{

  // window.open('https://idforce.com.co/');

  Swal.fire({
    imageUrl: 'img/otras/saludo_inicial.png',
    imageHeight: 300,
    background: '#121829',
    color:'#fff',
    imageAlt: 'A tall image',
    text: '¡Adelante!'
  })

})

//*****************************SELECCIONAR SECCION**************************************** */

function irASeccion(select) {
  // Obtener el valor de la opción seleccionada
  const seccionId = select.value;

  // Si se seleccionó una opción válida, desplazarse hacia la sección correspondiente
  if (seccionId) {
    const seccion = document.getElementById(seccionId);
    seccion.scrollIntoView({ behavior: 'smooth' });
  }
}


//******************************PÁRRAFOS EXPANDIBLES******************************* */

const bloques = document.querySelectorAll('.bloque-expandible');

bloques.forEach(bloque => {
  const parrafo = bloque.querySelector('.texto-expandible');
  const boton = bloque.querySelector('.boton-ver-mas');
  const imagen = bloque.querySelector('.imagen-expandible');

  boton.addEventListener('click', () => {
    parrafo.classList.toggle('expandido');

    const expandido = parrafo.classList.contains('expandido');

    boton.textContent = expandido ? 'Ver menos...' : 'Ver más...';
    
    // Mostrar u ocultar la imagen
    if (imagen) {
      imagen.style.display = expandido ? 'block' : 'none';
    }
  });
});


//*****************************ALERTA DOS MUNDOS************************************************* */

const imgDosMundos = document.querySelector('.img-dos-mundos'); 

imgDosMundos.addEventListener('click', ()=>{

  // window.open('https://idforce.com.co/');

  Swal.fire({
    imageUrl: 'img/Logos/logo.png',
    imageHeight: 200,
    background: '#000',
    color:'#ccc',
    text: `"Tu tiempo es limitado, así que no lo desperdicies viviendo la vida de otra persona. No dejes que el ruido de las opiniones de los demás ahogue tu voz interior. Ten el coraje de seguir tu corazón y tu intuición."\n - Steve Jobs -`

  })

})




