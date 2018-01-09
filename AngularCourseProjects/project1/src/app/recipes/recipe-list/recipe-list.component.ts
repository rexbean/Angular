import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
      new Recipe('A Test Recipe', 'This is a simply test', 'http://www.serious'+
      'eats.com/images/2017/04/20170405-one-pot-chicken-recipes-roundup-collage.jpg'),
      new Recipe('A Test Recipe', 'This is a simply test', 'http://www.serious'+
      'eats.com/images/2017/04/20170405-one-pot-chicken-recipes-roundup-collage.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
