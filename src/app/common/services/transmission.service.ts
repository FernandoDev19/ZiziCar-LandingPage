import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../core/constants/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { GetTransmissionInterface } from '../interfaces/transmission.interface';

@Injectable({
  providedIn: 'root'
})
export class TransmissionService {

  private urlBase: string = environment.apiUrl;
  private transmissionRoutes = {
    getAll: '/transmission'
  }

  constructor(private http: HttpClient) { }

  getTransmissions(): Observable<GetTransmissionInterface[]>
  {
    return this.http.get<GetTransmissionInterface[]>(this.urlBase + this.transmissionRoutes.getAll).pipe(
      catchError(e => {
        return throwError(() => e);
      })
    );
  }

}
