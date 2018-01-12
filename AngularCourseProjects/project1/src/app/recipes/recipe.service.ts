import { Recipe } from './recipe.module';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
        new Recipe('A Test Recipe',
        'This is a simply test', 'http://www.serious'+
        'eats.com/images/2017/04/20170405-one-pot-chicken-recipes-roundup-collage.jpg',
        [new Ingredient('Meat',1),
         new Ingredient('French Fries',3)
        ]),

        new Recipe('A Test Recipe',
        'This is a simply test',
        'http://www.serious'+
        'eats.com/images/2017/04/20170405-one-pot-chicken-recipes-roundup-collage.jpg',
        [new Ingredient('Buns',2),
         new Ingredient('Meat',1)
        ])
    ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipe(){
        return this.recipes.slice();//deep copy of the array.
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        for (let ingredient of ingredients){
            this.shoppingListService.addIngredients(ingredient);
        }

    }




}
