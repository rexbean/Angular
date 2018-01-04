# Angular 4
## What is angular?
- Angular is a JavaScript Framework which allows you to create reactive **Single-Page-Applications(SPAs)**
- SPAs means that it seems that we have many different urls but it only one HTML files and it is rendered by the browser.
- advantage: It gives users very reactive user experiences.
## Angular.js vs Angular 2/ Angular 4
- Angular 5 is the latest version
- Angular.js ----> Angular 1
- Anuglar    ----> Angular 2/Angular 4 /Angular 5
## Angular CLI
- Angular CLI means Angular Command Line Interface which can make creating, managing and building angular app very simple.
- Importing Angular manually will be a really pain.
- The CLI is also a great tool for big and very big Angular projects! It allows you to focus on Angular code instead of workflow tasks!
- Angular CLI needs the Node.js first.
- **See instrutions for installing Angular CLI in tutorial.md**
- Using **ng serve** will start a server.
- The reason why we need a server instead of just double- clicking the html file is that we need load some resources dynamically.
- There are many files out of folders which are some configuration files and used to do defualt configuartion.
- **node_modules** holds all third party packages
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
- install and import other dependencies
    + using npm install --save \<package name>, for example: npm install --save bootstrap
- Behind the scenes, the CLI uses Webpack, a Tool which bundles all your JS and CSS files and adds them to the index.html file.This is configured in **.angular-cli.json**.We can see it has a styles array.
    + It allows us to define some imports of global style sheets which will apply to our whole application.
    + It has imported style.css defaultly.
    + We can add reference to the bootstrap.css file we have just downloaded.
    ```
        "styles":[
            "../node_modules/bootstrap/dist/css/bootstap.min.css",
            "styles.css"
        ]
    ```
## TypeScript
### Introduction
- TypeScript is a superset to JavaScript.
- It offers more features than vanilla(common) JavaScript. For example, Strong typing, Classes, Interfaces,etc.
- Advantages:
    - Let writing code easier
        - Using keyword class to create classes
        - Creat interfaces
    - Using type to let code robust
        - Reducing errors to assign the wrong type to variables
        - It will check when you write it instead of the time you run it.
- TypeScript cannot run in the browser, it should be compiled to JavaScript in the end.This compilation is handled by CLI. The compilation is very fast and in the end JavaScript will run in the browser.
### Type
- let \<variable name>: \<Type>
    - For example: **let myString: string;**
    - Assignment: **myString = 'This is a string';**
    - If we do **myString = 4;** will get error, type number should not assign to type string
- If there is some errors in Type, .ts file will aslo be compiled to JavaScript, for there is no concept type in JavaScript.
- TypeScript can also infer the type, if we assign the value in the declaration time. For example: let myString = 'This is a string without :string', it will also know myString is a string.
- But it will not work when we didn't assign the value in the declaration time. It will let it be type **any** like JavaScript. We can also use **any** as a type.
- Type can prevent errors and it is really helpful.
- Types we can use in TypeScript:
    - string
    - number
    - boolean
    - Array\<string>
    - any
    - we also get void and enums
### classes
- In recent version of JavaScript, we can use keyword class
- The advantage in this way is .ts file will be compiled to the old version of JavaScript. It can be used in any browser
``` JavaScript
    class Car  {
        engineName: string;
        gears:number;
        private speed: number;
        // only can be accessed in this class but //JavaScript does not know this. TypeScript knows.

        constructor(speed:number){
            this.speed = speed || 0;
        }

        accelerate():void{
            this.speed++;
        }

        throttle():void{
            this.speed--;
        }
        getSpeed():void{
            console.log(this.speed);
        }

        static numberOfWheels():number{
            return 4;
        }
        // static method likes the static method in Java.
        // do not need to instantiate the class and can be //invoked be the class.
    }
    //create class
    let <object name> = new <classname>(<parameters>);
    let car = new Car(5);
    car.accelerate();
    car.throttle();
    console.log(Car.numberOfWheels());
```
### Interfaces
- example with just fields
    ``` JavaScript
    interface User{
        username: string;
        password: string;
        confirmPassword?:string;
        //question mark means this is not required.
    }
    ```
- Interface just like a contract. When we implement this interface, some attributes should be provided and some are not required(using question mark).
- Advantages
    + Interface can tell objects that they can safely access the certain attributes or method.
    + Interface can be also used to create our own type without creating a class for it. When we think we don't need to create a class for it and instantiate it. We just want a blue print for it.
- Example
    ```
    let user: User;
    user = {username: 'max', password: 'supersecret'};
    ```
- example with just method
    ```
    interface CanDrive{
        accelerate(speed:number):void;
    }
    let car:CanDrive = {
        accelerate:function(speed:number){
            //..
        }
    };
    ```
- We won't see any interfaces in the compiled .js file
### generics
- Generic allow us to be flexible regarding the type the certain object uses.
    ```
    let numberArray: Array<number>;
    numberArray = [1, 2, 3];
    ```
### wrap-up & module
- Modularity is supported by TypeScript.
- It is used to tell us the variable, class or whatever should be available outside of the file where it lives in
- By defualt, if we don't have the key word export, things can only be used in the file.
- When we add the keyword export, we can use the things in other files.
- The system just load our JavaScript files in which are different parts live. We need the export keyword for this to actually work correctly.
- Modularity is really about splitting up our code over several files and have them work together smoothly through typescript and other things.
