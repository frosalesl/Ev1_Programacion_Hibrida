import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TrianguloEscaleno, TrianguloEquilatero } from '../../model/class';

@Component({
  selector: 'app-triangulo',
  standalone: true,
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule 
  ]
})
export class TrianguloComponent {
  tipo = 'escaleno';

  lado1 = 0;
  lado2 = 0;
  lado3 = 0;

  lado = 0;

  resultado: number | null = null;

  calcularPerimetro() {
    if (this.tipo === 'escaleno') {
      this.resultado = new TrianguloEscaleno(
        this.lado1, this.lado2, this.lado3
      ).calcularPerimetro();
    } else {
      this.resultado = new TrianguloEquilatero(
        this.lado
      ).calcularPerimetro();
    }
  }
}