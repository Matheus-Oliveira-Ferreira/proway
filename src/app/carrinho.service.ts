import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  itens: IProdutoCarrinho[]=[];

  constructor() { }

  obtemCarrinho(){//vamos utilizar cookies para manter o dados do carrinho salvos

    this.itens =  JSON.parse(localStorage.getItem("carrinho")||"");//convertendo objeto em string
    return this.itens;

  }
  adicionarAoCarinho(produto: IProdutoCarrinho){

    this.itens.push(produto);
    localStorage.setItem("carrinho",JSON.stringify(this.itens));//convertendo string em objeto

  }
  limparCarrinho(){

    this.itens=[];
    localStorage.clear;
  }
  removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho",JSON.stringify(this.itens));


  }
}
