import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Importar las clases con herencia
import { TrianguloEscaleno, TrianguloEquilatero } from '../../model/class'; // Ajusta ruta si es necesario

@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [IonicModule, FormsModule, CommonModule]
})
export class TrianguloComponent {

  tipo: string = 'escaleno';

  // Escaleno
  lado1 = 0;
  lado2 = 0;
  lado3 = 0;

  // Equilátero
  lado = 0;

  resultado: number | null = null;

  calcularPerimetro() {
    if (this.tipo === 'escaleno') {
      const figuraEscaleno = new TrianguloEscaleno(this.lado1, this.lado2, this.lado3);
      this.resultado = figuraEscaleno.calcularPerimetro();

    } else {
      const figuraEquilatero = new TrianguloEquilatero(this.lado);
      this.resultado = figuraEquilatero.calcularPerimetro();
    }
  }
}
