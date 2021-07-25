import { Component } from '@angular/core';

@Component({
  selector: 'mi-componente',
templateUrl:'./mi-componente.component.html'
})
export class Micomponente{
   
   public titulo!: string;
   public comentario!: string;
   public year!: number;
  
   constructor(){
   this.titulo = " hola mundo, soy MI COMPONENTE";
   this.comentario = "Este es mi primer componente";
   this.year = 2021;

   console.log("componente mi-componente cargando");
   console.log(this.titulo, this.comentario, this.year);

   }
}