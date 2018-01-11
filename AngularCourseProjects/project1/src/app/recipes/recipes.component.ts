import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit,OnChanges {
  @Input() recipe:Recipe;
  constructor() {
  }
  ngOnChanges(){
      console.log(this.recipe);
  }
  ngOnInit() {
  }

}
