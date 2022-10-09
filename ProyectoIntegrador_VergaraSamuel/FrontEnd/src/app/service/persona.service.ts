import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = environment.URL + 'personas/';

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.HttpClient.get<persona[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.HttpClient.get<persona>(this.URL + `detail/${id}`);
  }

  // public save(educacion: Educacion): Observable<any>{
  //   return this.HttpClient.post<any>(this.URL + 'create', educacion);
  // }

  public update(id: number, Persona: persona): Observable<any>{
    return this.HttpClient.put<any>(this.URL + `update/${id}`, Persona);
  }

  // public delete(id:number): Observable<any>{
  //   return this.HttpClient.delete<any>(this.URL + `delete/${id}`);
  // }
}