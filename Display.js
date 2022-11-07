//Clase que interacturá con los botones y resultado en pantalla

class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '÷',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    borrar() {
        //Tomará el valor actual en la calculadora y borrará del elemento el contenido en su última posición
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    //Método para eliminar todos los números y/o cálculos realizados hasta el momento
    borrarTodo() {
        //Toma todos los valores (actual. anterior) y se asignan cadenas vacías
        this.valorActual = '';
        this.valorAnterior = '';
        //Redefine el tipo de operación como indefinida
        this.tipoOperacion = undefined;
        //Llama la función para mostrar dichos cambios en pantalla (actualizar)
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        //Condicional para evitar que se incluya más de un punto
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    //Método para mostrar los valores en pantalla
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    //método para tomar los elementos en display (incrustados en html) para pasarlos posteriormente a la Calculadora
    calcular() {
        //Constantes para parsear los valores strings y convertirlos en valores numéricos flotantes para poder hacer las operaciones matemáticas
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);
        
        //Si ninguno de los valores es un número, no realizará nada
        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}