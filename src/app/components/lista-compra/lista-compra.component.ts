import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css'],
})
export class ListaCompraComponent implements OnInit {
  constructor(private localStorage: LocalStorageService) {}

  // identificador: tipo = valor
  productos: string[] = [];

  nuevoProducto: string = '';

  // se ejecuta una vez al iniciarse el componente
  // hay que implementar OnInit en la clase
  ngOnInit() {
    console.log(this.productos);
    const listaGuardada = this.localStorage.leer('lista-compra');
    if (listaGuardada) {
      this.productos = listaGuardada;
    }
  }

  incluirProducto() {
    this.productos.push(this.nuevoProducto);
    this.nuevoProducto = '';
    this.guadarLista();
  }

  vaciarLista() {
    // borramos de localStorage
    this.localStorage.borrar('lista-compra');
    // vaciar la lista en el componente
    this.productos = [];
  }

  guadarLista() {
    this.localStorage.guardar('lista-compra', this.productos);
  }

  borrarProducto(index: number) {
    this.productos.splice(index, 1);
    this.guadarLista();
  }
}
