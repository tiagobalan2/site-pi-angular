import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aviso } from '../types/aviso.type';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {

  private apiUrl = 'http://localhost:8080/avisos';

  constructor(private httpClient: HttpClient) { }

  getAllAvisos(): Observable<Aviso[]> {
    return this.httpClient.get<Aviso[]>(this.apiUrl);
  }
}
