/*Declaración de variables de tipo const, a las cuales se les asigna un valor usando como método de búsqueda "getElementById",
el cual retornará el elemento que coincida con el id especificado en los paréntesis*/
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');

/*Declaración de variables de tipo const, a las cuales se les asigna un valor usando como método de búsqueda "querySelectorAll",
el cual retornará todos los elementos que coincidan con la clase especificada en los paréntesis*/
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

//Se crea una instancia de la clase Display (Script Display); declarando variable const, y asignando aquí la instancia a través de la palabra reservada "new", seguida del nombre de la clase y sus argumentos
const display = new Display(displayValorAnterior, displayValorActual);

//Función para cada uno de los botones. Cada vez que se presione un botón, este agregará (método agregarNumero (script display)) el número que corresponda al botón clickeado, a la pantalla de resultado (Incrusta número en el html) a través del innerHTML
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});



/* Switch */

//Declaración de variable para referenciar elemento de id switch (botón modo día-modo noche)
const btnSwitch = document.querySelector('#switch');

//Función para establecer lo que hará el botón al efectuarse el click
btnSwitch.addEventListener('click', () => {
    //Se accederá a la lista de clases (classList) del elemento body y se le agregará una nueva clase 'dark', la cual está asociada a una serie de estilos para dar vida al modo nocturno
    document.body.classList.toggle('dark');
    //De igual modo al botón (con id #switch) se le agregará una nueva clase 'active', la cual tiene asociada una serie de estilos
    btnSwitch.classList.toggle('active');
})