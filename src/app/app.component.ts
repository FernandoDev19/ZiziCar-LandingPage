import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommunicationService } from './common/services/communication.service';
import { AlertComponent } from './components/alert/alert.component';
import { PrimeNGConfigType } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  loader: boolean = false;

  constructor(
    private communicationService: CommunicationService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.communicationService.loading.subscribe((getLoader) => {
      setTimeout(() => {
        this.loader = getLoader;
      }, 0);
    });
    this.cdr.detectChanges();
  }
}
