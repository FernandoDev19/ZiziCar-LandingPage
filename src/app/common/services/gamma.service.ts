import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetGammaInterface } from '../interfaces/gamma.interface';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../core/constants/environment';

@Injectable({
  providedIn: 'root'
})
export class GammaService {

  private urlBase: string = environment.apiUrl;
  private gammaRoutes = {
    getAll: '/gamma'
  }

  constructor(private http: HttpClient) { }

  getGammas(): Observable<GetGammaInterface[]>
  {
    return this.http.get<GetGammaInterface[]>(this.urlBase + this.gammaRoutes.getAll).pipe(
      catchError(e => {
        return throwError(() => e);
      })
    );
  }

}
