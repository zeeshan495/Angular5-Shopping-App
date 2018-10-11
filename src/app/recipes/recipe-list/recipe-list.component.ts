import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('chicken','Tasty with protien','https://www.cbc.ca/food/content/images/recipes/KoreanChicken.jpg'),
    new Recipe('Maggie','Fast Food and Tasty','https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/article/2017/11/29/nestle-hit-by-new-maggi-noodle-setback-in-india/7591781-1-eng-GB/Nestle-hit-by-new-Maggi-noodle-setback-in-India_wrbm_large.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
