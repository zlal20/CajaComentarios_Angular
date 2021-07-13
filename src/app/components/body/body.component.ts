import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

//se añaden 2 json al array
comentarios: any [] = [{

    nombre:"Eduardo",
    alias:"@zlal20",
    comentario:"marco angular"
},

{

  nombre:"Eduardo",
  alias:"sasa",
  comentario:"ssh"


}];

  nombre: any;
  comentario: any;

  constructor() { }

  ngOnInit(): void {
  }


agregarComentario(){

  console.log(this.nombre);
  console.log(this.comentario);

  let comentarioAux = {
  
    nombre: this.nombre,
    alias: `@ ${ this.nombre }`,
    comentario: this.comentario

  }

this.comentarios.push(comentarioAux);


}
  eliminar(indice:any){

      this.comentarios.splice(indice, 1)



  }


}
