import { Component } from '@angular/core';
import { NavComponent } from "../../components/header/nav/nav.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-thanks',
  imports: [NavComponent, FooterComponent, RouterLink],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.css'
})
export class ThanksComponent {
  title: string = 'Gracias | Zizicar';

  ngOnInit(): void {
    document.getElementsByTagName('title')[0].textContent = this.title;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
