# Angular course projects
## Course Projects for Basics
- It is a recipe book and shopping list.
### Planning the app
#### 1. Lay out the structure of the app.
- Which components we are probably going to need.
- Which components should be own component.
- Which components should be merged into one component.
#### 2. Plan of the app.
- *data* for the features
- **data** for the components
- normal for the model
- **Root**
    + **header**
        + *Shopping list*
            + **Shopping list**
            + **Shopping list edit**
            + Ingradient
        + *Recipe book*
            + **Recipes**
                + **Recipe list**
                + **Recipe Detail**
            + **Recipe Item**
            + Recipe
#### 3. Setting up a new application
- Using ng new \<project name> to create a new app.
- Adding the boostrap CSS framework to the app.
    - npm install --save bootstrap
    - add         **"../node_modules/bootstrap/dist/css/bootstrap.min.css",** in the **.angular-cli.json** file's style array.
- Using ng serve to start the server.
- Adding some code in .html to testing whether bootstrap has installed successfully 
