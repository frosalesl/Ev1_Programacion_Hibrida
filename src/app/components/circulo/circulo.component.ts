import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Circulo } from '../../model/class';

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule 
  ]
})
export class CirculoComponent {

  radio = 0;
  resultado: number | null = null;

  calcularPerimetro() {
    const figura = new Circulo(this.radio);
    this.resultado = figura.calcularPerimetro();
  }
}