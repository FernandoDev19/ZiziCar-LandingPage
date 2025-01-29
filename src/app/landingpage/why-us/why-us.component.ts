import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlay, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-why-us',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {
  faPlay: IconDefinition = faPlay;
}
