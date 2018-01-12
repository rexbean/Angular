import { Ingredient } from '../shared/ingredient.module';
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;//url
    public ingredients: Ingredient[];

    constructor(name: string,
                desc: string,
                imagePath: string,
                ingredients: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
