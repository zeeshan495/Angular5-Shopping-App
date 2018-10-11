import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient('mango',95),
    new Ingredient('Banana',99)
  ];
  constructor() { }

  ngOnInit() {
  }

}
