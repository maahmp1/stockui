import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  categorias: Categoria [] = [
    {id:1, categoria:'eletrodomestico'},
    {id:2, categoria:'eletronico'},
    {id:3, categoria:'comida'},
    {id:4, categoria:'fruta'},
    {id:5, categoria:'eletronico'},
    {id:6, categoria:'moveis'},
    {id:7, categoria:'eletrodomestico'}
  ];
  constructor() { }

  displayedColumns = [ 'id','categoria']

  ngOnInit(): void {
  }

}
