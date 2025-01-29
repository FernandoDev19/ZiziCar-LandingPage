import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faq = [
    {
      label: "¿Qué necesito para alquilar el carro?",
      url: ""
    },
    {
      label: "¿Necesito mi propio seguro?",
      url: ""
    },
    {
      label: "¿Pueden otras personas conducir el carro que he alquilado?",
      url: ""
    },
  ];

  allFaq = [
    {
      label: "¿Qué necesito para alquilar el carro?",
      url: ""
    },
    {
      label: "¿Necesito mi propio seguro?",
      url: ""
    },
    {
      label: "¿Pueden otras personas conducir el carro que he alquilado?",
      url: ""
    },
    {
      label: "¿Qué métodos de pago acepta ZiziCar?",
      url: ""
    },
    {
      label: '¿Qué impuestos están cubiertos en el alquiler?',
      url: ''
    },
    {
      label: '¿Cómo puedo encontrar las mejores ofertas?',
      url: ''
    },
    {
      label: '¿Cuántos kilómetros tengo disponibles?',
      url: ''
    },
    {
      label: '¿Con quién me contacto en caso de accidente?',
      url: ''
    }
  ]

  showAllFaq: boolean = false;

  get getFaq(){
    if(this.showAllFaq){
      return this.allFaq;
    }else{
      return this.faq;
    }
  }

  toggleShowMore(){
    this.showAllFaq = !this.showAllFaq;
  }
}
