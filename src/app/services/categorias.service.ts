import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url: any = 'http://localhost:8080/v1/categorias';

  constructor(private http: HttpClient) { }

  obtenerCategorias(){
    return this.http.get(this.url);
  }

}
