import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Hello Recipe Box!</h1>
    <div class="row">
      <div class="col-md-4">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Recipe</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let recipe of recipes">
              <td (click)="recipeClicked(recipe)">{{recipe.title}}</td>
            </tr>
          </tbody>
        </table>
      </div> <!-- col -->

      <div class="col-md-8">
        <form *ngIf="clickedRecipe" class="form-horizontal">
          <div class="form-group">
            <label for="title">Title:</label>
            <input [value]="clickedRecipe.title" (input)="clickedRecipe.title = $event.target.value" type="text" class="form-control" id="title" placeholder="Recipe Name or Title">
          </div>
          <div class="form-group">
            <label for="directions">Directions:</label>
            <input type="text" class="form-control" id="directions" placeholder="List instructions">
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-default">Submit</button>
          </div>
        </form>
      </div> <!-- col -->
    </div> <!-- row -->
  </div> <!-- container -->
  `
})

export class AppComponent {
  clickedRecipe: Recipe = null;
  recipes: Recipe[] = [
    new Recipe('Stew', ['water', 'meat', 'potatoes'],
      "Boil water.\nAdd potatoes.\nBrown meat.\nAdd to pot.\n"),
    new Recipe('Cookies', ['flour', 'sugar', 'eggs', 'butter', 'milk'],
      "Mix.\nPut in oven.\nBake at 350 for 20 min. until golden bronw.\n")
  ];

  recipeClicked(recipe) {
    this.clickedRecipe = recipe;
  }
}

export class Recipe {
  constructor(public title: string, ingredients: string[], directions: string) { }
}
