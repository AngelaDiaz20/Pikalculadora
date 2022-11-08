//Clase que interacturá con los botones y resultado en pantalla

class Display {
    //constructor necesario para pasar los parámetros de aquellos valores cambiantes
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        //objeto, instancia de la clase Calculadora (script Calculadora)
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        //array asociativo
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

    //Método computar, recibe como parámetro el tipo de operación
    computar(tipo) {
        //Evaluación para establecer cálculo si el tipo de operación en diferente a igual (valor en index)
        this.tipoOperacion !== 'igual' && this.calcular();
        //Si es diferente, se asigna el tipo de operación a la variable elegida por el usuario
        this.tipoOperacion = tipo;
        //se asigna valor a variable valorAnterior, teniendo en cuenta, si hay un valor actual, o no
        this.valorAnterior = this.valorActual || this.valorAnterior;
        //Se resetea el valor actual de la calculadora, dejando este espacio vacío para ingresar nuevo valor
        this.valorActual = '';
        //Se llama el método de imprimir valores para mostrar resultados en pantalla
        this.imprimirValores();
    }

    //Método para agregar números, recibe como parámetro aquellos digitados por el usuario
    agregarNumero(numero) {
        //Condicional para evitar que se incluya más de un punto y en su defecto, no retornar nada
        if(numero === '.' && this.valorActual.includes('.')) return
        //Se asigna a variable valorActual la cantidad de números que agregue el usuario, pasándolos como strings y concatenándolos de esta manera
        this.valorActual = this.valorActual.toString() + numero.toString();
        //Se llama el método de imprimir valores para mostrar resultados en pantalla
        this.imprimirValores();
    }

    //Método para mostrar los valores en pantalla
    imprimirValores() {
        //Se asigna el valor actual obtenido del usuario al contenido en display (espacio del segundo div)
        this.displayValorActual.textContent = this.valorActual;
        //Se asigna el valor anterior obtenido del usuario al contenido en display (espacio del primer div), para ello se accede al valorAnterior concatenandole el signo[posición] (proveniente del array asociativo); en caso de no tener un signo asociado, se imprime un string vacío, si no se hiciera esa evaluación nos arrojaría un valor undefined
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