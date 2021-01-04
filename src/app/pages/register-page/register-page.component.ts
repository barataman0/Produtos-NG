import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit {
  name: string;
  price: number; // preço
  categories: string[]; // array de string
  selectedCategory: string | null; // opção selecionada

  constructor() {
    this.categories = [
      "laticínios",
      "bebidas",
      "congelados"
    ]
    this.name = "";
    this.price = 0;
    this.selectedCategory = null;
   }

  ngOnInit(): void {
  }

}
