const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;


    const data = {
        nombre: nombre,
        email: email,
        mensaje: mensaje
    };

    const jsonData = JSON.stringify(data);

    localStorage.setItem('formularioContacto', jsonData);

    form.reset();


});

    //SEEWT ALERT
    const btn = document.querySelector('#btn');

    btn.addEventListener('click', miAlerta);
    
    function miAlerta() {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Enviado! Muchas Gracias',
            showConfirmButton: false,
            timer: 1500
        });
    }