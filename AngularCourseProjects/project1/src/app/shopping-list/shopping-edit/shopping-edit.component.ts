import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.module';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput : ElementRef ;
  @ViewChild('amountInput') amountInput: ElementRef ;
  @Output() addIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onClickAdd(){
      const ingredientName = this.nameInput.nativeElement.value;
      const ingredientAmount = this.amountInput.nativeElement.value;
      this.addIngredient.emit(new Ingredient(ingredientName,ingredientAmount));
  }

}
