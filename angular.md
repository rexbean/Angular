# Angular 4
## What is angular?
- Angular is a JavaScript Framework which allows you to create reactive **Single-Page-Applications(SPAs)**
- SPAs means that it seems that we have many different urls but it only one HTML files and it is rendered by the browser.
- advantage: It gives users very reactive user experiences.
## Angular.js vs Angular 2/ Angular 4
- Angular 5 is the latest version
- Angular.js ----> Angular 1
- Anuglar    ----> Angular 2/Angular 4 /Angular 5
## first application
### Angular CLI
- Angular CLI means Angular Command Line Interface which can make creating, managing and building angular app very simple.
- Importing Angular manually will be a really pain.
- The CLI is also a great tool for big and very big Angular projects! It allows you to focus on Angular code instead of workflow tasks!
- Angular CLI needs the Node.js first.
- **See instrutions for installing Angular CLI in tutorial.md**
- Using **ng serve** will start a server.
- The reason why we need a server instead of just double- clicking the html file is that we need load some resources dynamically.
- There are many files out of folders which are some configuration files and used to do defualt configuartion.
- **e2e folder** is used for end to end testing
- **src folder** is where we will used to create our project
    + the files out of the folder are also used for doing some specific configuartion for our project.
    + The most important file is **index.html**. It is the single page in our app, which is going to serve, but we don't need to change here.
    + We will write all the code in the **app folder**.
        - app.component.ts     --> **data module?**
        - app.component.html   --> template
        - index.html file will be replaced by the **component** defined in the app component.html file.
        - In angular, **we use componets to build our web application** and **the compontent defines what we will see at the page**.
    + The **assest folder** is used to store some static assestin our app, like images.
    + The environment folder can be used for environment variables.
- When the **ng serve** is running, it will watch the files for changes and automatically recompile them and reload our project in the browser.
