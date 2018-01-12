import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput : ElementRef ;
  @ViewChild('amountInput') amountInput: ElementRef ;
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onClickAdd(){
      const ingredientName = this.nameInput.nativeElement.value;
      const ingredientAmount = this.amountInput.nativeElement.value;
      this.shoppingListService.addIngredients(new Ingredient(ingredientName,ingredientAmount));
  }

}
