import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  operacao = '';
  resultado = '';
  ultimovalor = '';
  numero = false;
  caracter = true;
  caracteres = ['.','/','*','+','-'];


  constructor() {}

  ngOnInit() {}

  calcularOperacao(){
    try{
      this.resultado = evaluate(this.operacao);
    } catch (err) {
    this.resultado = 'Inválido!';
    }
  }
  
  adicionarValor(valor:string){
    this.caracter = this.caracteres.includes(valor);

    if (!this.caracter) {
      this.operacao += valor;
      this.numero = true;
    } else if (this.caracter && this.numero) {
      this.operacao += valor;
      this.numero = false;
    }
  }

  limparMemoria() {
    this.operacao = '';
    this.resultado = '';
    this.numero = false;
  }
  

  limparOperacao(){
    this.operacao = '';
    this.numero = false;

  }

  apagarCaracter(){
    if (this.operacao.length > 0){
    this.operacao = this.operacao.substring(0, this.operacao.length - 1);
    }

    const ultimo = this.operacao.substring(this.operacao.length, 1);
    this.caracter = this.caracteres.includes(ultimo);

    console.log(ultimo);

    if (!this.caracter) {
      this.numero = true;
    } else {
      this.numero = false;
    }
  }
}
