/* Se configura la clase padre denominada Figura
A través de ella se heredarán las propiedades y métodos a la clase hija Círculo y Triángulo Escaleno y clase nieta Triángulo Equilátero*/

export abstract class Figura {
  protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;

    }
    abstract calcularPerimetro(): number;
}

//Se configura la clase hija denominada Círculo
export class Circulo extends Figura {
    private radio: number;
    constructor(radio: number) {
        super('Círculo');
        this.radio = radio;
    }   
    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }   
}

// Se configura la clase hija denominada Triángulo Escaleno
export class TrianguloEscaleno extends Figura {
    private ladoa: number;
    private ladob: number;
    private ladoc: number;

    constructor(ladoa: number, ladob: number, ladoc: number) {
        super('Triángulo Escaleno');
        this.ladoa = ladoa;
        this.ladob = ladob;
        this.ladoc = ladoc;
    }
    calcularPerimetro(): number {
        return this.ladoa + this.ladob + this.ladoc;
    }   
}

// Se configura la clase nieta denominada Triángulo Equilátero
export class TrianguloEquilatero extends TrianguloEscaleno {
    constructor(ladoa: number) {
        super(ladoa, ladoa, ladoa);
    }
}   

//Antes de finalizar, se realiza la creación de instancias para probar el funcionamiento de las clases
const tEscaleno = new TrianguloEscaleno(3, 4, 5);
console.log(tEscaleno.calcularPerimetro());

const tEquilatero = new TrianguloEquilatero(6);
console.log(tEquilatero.calcularPerimetro());