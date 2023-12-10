import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent{

  pensamento = {
    conteudo: "I love Angular",
    autoria: "Nay",
    modelo: 'modelo3'
  }

}
