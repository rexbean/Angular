import { Component, OnInit, Input, OnChanges} from '@angular/core';
import { Recipe } from './recipe.module';
import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
      this.recipeService.recipeSelected.subscribe(
          (recipe:Recipe) => {
              this.recipe = recipe;
          }
      );
  }

}
