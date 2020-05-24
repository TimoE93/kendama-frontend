import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComboService {
  private comboUrl = 'http://localhost:3000/combo?difficulty=1';
  
  constructor(
    private http: HttpClient,
  ) { }

  getCombo() {
    return this.http.get(this.comboUrl).pipe(
        catchError(this.handleError<any>())
    );
  }

  private handleError<T>() {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(error);
    };
  }
}
