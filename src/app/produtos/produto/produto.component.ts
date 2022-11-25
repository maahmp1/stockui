import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  produtos: Produto [] = [
    {produto:'geladeira'},
    {produto:'celular'},
    {produto:'lasanha'},
    {produto:'banana'},
    {produto:'apple watch'},
    {produto:'sofá'},
    {produto:'liquidificador'},


  ];
  constructor() { }
  displayedColumns = ['Produto']

  ngOnInit(): void {
  }

}
