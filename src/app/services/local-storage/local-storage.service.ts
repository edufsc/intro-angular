import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  guardar(id: string, paraGuardar: any) {
    const paraGuardarJSON = JSON.stringify(paraGuardar);
    localStorage.setItem(id, paraGuardarJSON);
  }

  leer(id: string) {
    const paraLeerJSON = localStorage.getItem(id);
    // si había algo guardado con esa clave
    if (paraLeerJSON) {
      const paraLeer = JSON.parse(paraLeerJSON);
      // lo retornamos
      return paraLeer;
    } else {
      // si no, devolvemos null
      return null;
    }
  }

  borrar(id: string) {
    localStorage.removeItem(id);
    console.log('Eliminado ' + id);
  }
}
