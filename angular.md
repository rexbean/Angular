# Introduction to Angular
## What is angular?
- Angular is a JavaScript Framework which allows you to create reactive **Single-Page-Applications(SPAs)**
- SPAs means that it seems that we have many different urls but it only has one HTML files and it is rendered by the browser.
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
    + The **environment folder** can be used for environment variables.
- When the **ng serve** is running, it will watch the files for changes and automatically recompile them and reload our project in the browser.
- install and import other dependencies
    + using npm install --save \<package name>, for example: npm install --save bootstrap
- Behind the scenes, the CLI uses Webpack, a Tool which bundles all your JS and CSS files and adds them to the index.html file.This is configured in **.angular-cli.json**.We can see it has a styles array.
    + It allows us to define some imports of global style sheets which will apply to our whole application.
    + It has imported style.css defaultly.
    + We can add reference to the bootstrap.css file we have just downloaded.
    ``` TypeScript
        "styles":[
            "../node_modules/bootstrap/dist/css/bootstap.min.css",
            "styles.css"
        ]
    ```
# TypeScript
## Introduction
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
## Type
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
## Classes
- In recent version of JavaScript, we can use keyword class
- The advantage in this way is .ts file will be compiled to the old version of JavaScript. It can be used in any browser
``` TypeScript
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
## Interfaces
- example with just fields
    ``` TypeScript
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
    ``` TypeScript
    let user: User;
    user = {username: 'max', password: 'supersecret'};
    ```
- example with just method
    ``` TypeScript
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
## Generics
- Generic allow us to be flexible regarding the type the certain object uses.
    ``` TypeScript
    let numberArray: Array<number>;
    numberArray = [1, 2, 3];
    ```
## Wrap-up & module
- Modularity is supported by TypeScript.
- It is used to tell us the variable, class or whatever should be available outside of the file where it lives in
- By defualt, if we don't have the key word export, things can only be used in the file.
- When we add the keyword export, we can use the things in other files.
- The system just load our JavaScript files in which are different parts live. We need the export keyword for this to actually work correctly.
- Modularity is really about splitting up our code over several files and have them work together smoothly through typescript and other things.

# Angular Basics
## How Angular loaded and started
- Angular is a framework which allows us to create a single page application. So the single page is the index.html. In other words, index.html is served by the server, but other component.html is not served by the server.
- In index.html file, we can see **\<app-root>Loading...\</app-root>**. It is not a default. It is one of our componetns created by CLI for us.
- The files in the app folder which have component name in their names.
- Load: **Tag in index.html -> selector in componet.ts ->
templateUrl -> componet.html (content which will replace the tag in index.html)**
- **ng serve** will rebuild our project. It will create JavaScript bundles and derive imports in the index.html. These will contains **our own code** too.
- These JavaScript imports will be executed at first.
- **Main.ts** will be the first code to be executed.
    + many imports maybe to check production mode or not, turn off the warning or not.
    + Bootstrap starts our application: **platformBrowserDynamic().bootstrapModule(AppModule)** -> **AppModule** -> import  {AppModule} from **app.module.ts** -> **boostrap:[AppComponent]** -> import {AppComponent} from **'app.component.ts'** -> **selector**
## Components
### Why we use Components?
- We build our whole application by composing it from a couple of components which we create on our own.
- We start with the AppComponent which is the root components. It hold our entire application in the end.
- AppComponent will be to component which will add or nets other components to.
- We separate the who page into several reusable parts(components). Each components has their own template and style.The most important, they can have their own business logic.
- Advantage: reuse the business logic, styling and etc.
### Creating our own component
- We will not add selector in the index.html.We add them in the app.component.html
- Create a new folder(**\<component name>**).Its name is same as the component's name.
- Create **\<component name>.component.ts**
- At first, component is a **class**.
- We should add a **decorator** to tell angular this is a comonent. Decorators are a TypeScript features which allow us to enhance our classes and enhance elements in our code.
- import decorator
- Create template file in the same folder **\<component name>.component.html**
    ``` TypeScript
    import { Component } from '@angular/core'
    // in order to use @Component() decorator.@angular/core has the core functions
    @Component({ //special decorator
        selector: 'app-<Component name>',
        templateUrl:'relative path to the .html file'

    }) // pass a JavaScript object to this component to configure
    // setup some meta data to tell angular what to do with this class
    export class <component name>Component {

    }
    ```
### Understanding the module and component
- Change AppModule to use our own component
    - import your component on the top of the file without '.ts'.
    - add the component in to the declaration
- Angular uses modules to bundle different pieces for example components(functionalities) of your app into packages.
- Module is just the empty TypeScript class like component and tranform it into something else by adding a decorator here.
- Four properties:
    + **bootstrap**: tell angular which component you should be aware of at the point of the whole **application starts**,which component you should basically recognize **in the index.html**. ----> **register basic components here**
    + **declaration**: **register new component**
    + **imports**: add other modules
        + BrowserModule is used to give us all the base functionalities we need to start our app.
    + **providers**: provide to the Angular how to use the service.
### Using the custom component
- Add the component element(selector tag) in the .html file.
### Creating component by CLI and nesting component
- CLI create component automatically.
    - **ng generate component \<component name>**
    - **ng g c \<component name>**
- Add the component selector tag in one of the .html file which we want to nest the component.
### Working with component template
- We can add HTML code in the TypeScript file.
- Component ***must*** have either **templateUrl** or **template** property, but **only one** of them.
- Using **template property** means inline template.
- We can directly write the HTML code in the **template property**
    + Using **''** , we can just write the HTML code in one line.
    + Uisng **``** , we can write the HTML code in multiple lines.
- Inline template is better when there are less than 3 lines of HTML code.
### Working with component style
- Using **bootstrap** makes the page seem more beautiful in .html file.
    ``` HTML
    <div class = "container">
        <div class = "row">
            <div class = "col-xs-12">
                <h3>I'm in the AppComponent</h3>
                <hr>
                <app-servers></app-servers>
            </div>
        </div>
    </div>
    ```
- Using **Angular** to beautify the page in .css file.
    ``` CSS
    h3 {
        color: darkblue;
    }
    ```
- We can reference multiple style (.css file) in **StyleUrls**.
- We can also use **inline style**, an array names **style** and **back tick(``)** for **multiple lines**.

### Fully understand the component selector
- **Selector** must be unique.
- **Three** types of selectors:
    - by elements:
        + selector : '\<selecotr name>'
        + \<\<selector name>></\<selector name>>
    - by attribute:
        + selector : '[\<selector name>]'
        + \<div \<selector name>>\</div>
    - by class :
        + selector : '. \<selector name>'
        + \<div class = "\<selector name>">\</div>
## DataBinding
### What is dataBinding
- DataBinding == Communication
- Communication between your TypeScript code of your component and the template which the user sees.
- In typescript code, we will **fetch some data from server** or **do some calcualtion** and want to show to the user by template.
+ Output data:
    + String interpolation : {{data}}
    + Property Binding : [property] = "data"
+ React to (User) Events:
    + Event Binding : (event) = "expression"
+ Two - way - binding
### String Interpolation:
- We use **{{ }}** to do the string interpolation
    - Things in the **{{}}** must be **string in the end**,it could be
        + String
        + Number
        + Method which returns String
### Property Binding
- We use **[\<property name>] = "\<value>"** to do the property binding.
- Property Binding is used to bind the **value(fields or methond)** defined in the component class to the **property of the HTML element(DOM)**.
- **() => {} means function(){}**
### Property binding VS String interpolation
- String interpolation is just a String
- Property Binding can be any kind of value
### Event binding
- We use **(\<event name>) = "\<method name>()"** to do the event binding.
- Using name **on\<event name>** names the method.
### Passing and using data with event Binding
- Using **$event** to pass the data getting from the event.
- **$event** is a kind of reserved variable name, it will be the data emmitted by that event.
- The parameters of the method should be(event: Event)
- Code in the method : **(HTMLInputElement)event.target.value;**
### Two - way - Binding
- Two - way - binding combines the property binding and event binding.
- **[\(ngModel)] = "\<property name>"** will be trigger on the input event and update the value of the property \<property name> automatically. It will also update the value of the input element, if somewhere else change the property \<property name>.
- To be able to use 'ngModel', the FormsModule(from @angular/forms) needs to be added to tyour importsp[] array in the AppModule.
## Directive
### Understanding directive
- Directives are instructions in the DOM!
- Components is one of the directive in the template.
- Other directives without template.
- We could build our **own directive**.
- We can use our custom directive by typically **adding directive name in attributes selector**(3 types).
    ``` TypeScript
    @Directive({
        selector: '<directive name>'
    })
    export class <directive class name>{

    }
    ```
### Using ngIf to output data conditionaly
- Built in directive uses the attribute selector.
- Using ***ngIf = "\<elementsName>(the element will return true or false)"** to use the ngIf directive.
- ngIf should add **'*'** before the directive, because it is **a structural directive**, which means it **changes the structure of our DOM**. In other word, it **adds or does not add** the element.
- For else condition:
    + \# is a local reference.
    + \<ng-template> is a component with angular which you can use to mark places in the DOM
    + Using \<ng-template> with local referece, we mark a certain spot in the template.
    + The completely code is :
    ``` HTML
    <p *ngIf = "True" else noServer>Has Server</>
    <ng-template #noServer>
        <p>no server</p>
    </ng-template>
    ```
### Styling elements dynamically using ngStyle
- Attribute directives don't add or remove elements. They only change the element thye were placed on.
- Attribute directives **do not need \***
- Using **property binding** to configure it.
- **ngStyle is used to change the CSS file.**
- The advantage of the ngStyle can let us dynamically update the style.
- Using **[ngStyle] = "{\<property name> : value(value, proerty, method)}"**
### Applying CSS classes dynamically by ngClass
- ngClass is used to **add or remove** css classes;
- ngClass is also used **property binding**.
- ngClass uses key - value pairs.
    + Key: CSS class name
    + Value: the condition that CSS class is attached or not
### Output list using ngFor
- ngFor is a structural directive.
- Using **\*ngFor** = "let \<T> of Array\<T>" to iterate the Array
- Using **let i = index** gets the index of the iteration, separated by the **';'** with ngFor.
## Debugging
### Understand Angular Error Message
- Using developer tool in the Chrome.
### Debugging code in the browser uisng Sourcemap
- Click the **Sources**, find the **main.bundle.js**, find the **logic** then add **break point**.
- Click the **Sources**, find **webpack://**, find the **.** folder, we can find the TypeScript Source code.
### Using Augury to dive in to Angular App
- This is a Chrome extension
- We can see all components, properties, inject dependencies and routing.
## Component & Databinding Deep Dive
### Splitting apps into components
- Creating new components which is better for the code reusing.
- Move the properties into the certain components.
### Property and event binding overview
- Passing data between the components.
- Property and event binding can be used in:
    + HTML elements for Native Properties & Events
    + Directives for Custom Properties & Events
    + Components for Custom Properties & Events
### Binding to the custom properties
- **type definition** for a property {type: string, name: string, content: string}
- **All properties** of the component **only can be accessed** by this component.
- If you want the parent component bind the property in the child component, we should **add decorator Input()** before the property in the child component. And then using property binding in the element in the child component.
- Decorator **Input()** can also be imported from **@angular/core**.
### Assigning the alias to the custom property
- We can add the alias as the parameter in the **decoraor Input()**
### Binding to custom event
- Maybe this is used to inform the parent component from the child one.
- This is a little bit complicated than binding custom property.
- The way to bind the custom event is same as the way to bind the event of the HTML element. But the argument **$event** is defined by the event in the child component.
- In the child component, define a new property **invoked in the parent component** whose type is EventEmitter\<\<Paramter define>>() with **decorator Output() before**;
- Creating a **method** in child component to **invoke the EventEmitter** by **\<EventEmitter>.emit({\<paramenter>})** and generate the parameters.
### Assigning the alias to the custom Event
- Adding the alias as the argument in the decorator Output()
### Summary
- **Input & Output** is a way to communicate between components.
- **Service** is another way to do so.
### Understanding view encapsulation
- The way CSS works it doesn't really care in which CSS file you define the rule, It simply is applied to the **whole document** normally.
- Angular has the goal of encapsulating styles for the component they belong to.
- Angular uses different selector of the element to do the view encapsulation.
### More on View encapsulation
- We can add **encapsulation: ViewEncapsulation.None** in **@Component**, then there won't be different selector for the same kind of elements.
- Emulated is the default one.
- In the way above, no matter where the css rule writes, it will be applied by all the html files,but only this component doesn't have the unique selector.
### Using Local References in Templates
- **Local reference** can be added to **any HTML elements**.
- Using **#\<reference Name>** to use the local reference.
- In this way, it hold a reference to that element.
- local reference can be used in anywhere in the HTML file but no in the typescript file.
- But we can pass the local reference to the method as argument. In this way, we can use it in the TypeScript file.
- In the typescript, we will get an element which local reference reference to.
### Getting Access to the Template & DOM with @ViewChild
- A way to access any elements in the template from typescript code.
- Add **decorator ViewChild** before a property.
- The argument is used to the selector of the element.
    + The name of the local reference.
    + The component.
- This only get the **ElementRef**;
- We can get the element by add **.nativeElement**
- **Do not use this way to modify the value of the element!**
### Projecting Content into Components with ng-Content
- Passing complicated HTML code into component from outside.
- Everything placed between the opening and closing tag of component will be lost by default.
- Using **\<ng-content>\</ng-content> as a hook** in component to mark the place for angular where it should add any content it finds between the opening and closing tag here.
### Understanding the Component Lifecyle
- **ngOnInit()** is a **lifecyle hook**.
- There are different phases for creation process and it will actually give us a chance to hook into these phases and excute some code.
- We can hook into these phases by implementing some methods angular will call if they are present.
- **ngOnChanges**
    + may be executed multiple times.
    + It will be executed **at the start** when a new component is created
    + It will also be executed whenever one of our **bound input properties changes**.
    + It should receive some arguments type of SimpleChanges.It is the change element in the component.
- **ngOnInit**
    + It will be executed when the component is initialized.
    + It is a phase when objects were created.
    + It would run after the constructor.
- **ngDoCheck**
    + Run multiple times.
    + It will be executed whenever **change detection** runs.
        + **Change detection** used a system which Angular determines whether something changed on the template of a component or inside of a component, like the value of the property changes.
    + It will not only be executed when something changes, but also some trigger of the events.
- **ngAfterContentInit**
    + This will be called whenever the content which will be  projected to the ng-content has been initialized.
    + Not only the component but also the part in the parent component which will be added into the component.
- **ngAfterContentChecked**
    + It will be called every time the projected content has been checked, which means the after each check detection cycle.
- **ngAfterViewInit**
    + It will be called after the component's view and child views has been initialized ---> (has been rendered).
- **ngAfterViewChecked**
    + It will be called every time the view and child views have been checked.
    + We can assured that well every all changes which had to be done were displayed in the view or no changes were detected by angular.
- **ngOnDestroy**
    + It will be called when some components been removed.
    + A great place to do some clean up work.
    + It will be called right before the objects are destroyed by angular.
### Seeing LifeCyle Hooks in Action
- For all hooks, we should implement that interface at the class.
- Constructor() -> ngOnInit() -> ngAfterContentInit() -> ngAfterViewInit()
- ngDocheck() -> ngAfterContentChecked() -> ngAfterViewChecked()
### LifeCycle Hooks and Template Access
- When we get the value of the DOM in different hook, the value will b e different.
### Getting Access to ng-content with @ContentChild
- Using **ContentChild** can get the access to content which is stored in the another component but then passed by the ng-content.
## Directives Deep Dive
### Module Introduction
- Attribute:
    - They sit on the element just like the attribute
    - Only change the properties.
- Structural:
    - Also sit on the element just like the attribute
    - They also change the structure of the DOM around this element.
    - Add or remove the element.
### ngFor & ngIf Recap
- We cannot have **more than one structural directives** on the **same element**.
### ngClass and ngStyle Recap
- ngClass
    - Used to add or remove CSS class
    - [ngClass] = {\<class name> : \<condition to use the class>}
- ngStyle
    - Used to add or remove a CSS style
    - [ngStyle] = {\<property> : \<value>}
### Creating a Basic Attribute Directive
- Create a new folder in the app folder named the name of the directive.
- Create a new file named \<directive name>.directive.ts
- Add square bracket to the selector to have this into attribute style. This can be recognize when I do not add the square element.
- the arguments can be listed and Angular can give us this is injection which will be talked next module.
- It is better to implements the ngOnInit();
- Add code in it
    ``` TypeScript
    import { Directive } from '@angular/core';
    @Directive({
        selector:'[<CamelCaseNotation>]'
    })
    export.class <directive name> implements OnInit {
        constructor(){

        }
        ngOnInit(){

        }
    }
    ```
- Add the directive to declaration in the **app.module.ts**
- Add the directive to the element we want.
### Using the Renderer to build a Better Attribute Directives
- Directly acess the element and change its style is not the best way to do this.
- Angular also render your templates without a DOM, like render.
- We can use renderer to do this.
- Create a directive by CLI :**ng g d \<directive name>**
    ``` TypeScript
    constuctor(private eleRef: ElementRef, private renderer:Renderer2){}
    ngOnInit(){
        this.renderer.setStyle(eleRef.nativeElement,'background-color','blue',<flag>);
    }
    ```
- Advantage: under some circumstances, accessing directly to the DOM is not allowed.
### Using HostListener to Listen to Host Events
- HostListener is used to listen to the certain event.
- Using **@HostListener('\<event name> supported by the DOM element') \<method name>(event: Event)** to do so.
- mouseenter for mouse hover event.
### Using HostBinding to Bind to Host Properties
- HostBinding bind to some property whose value will become important.
- The argument of the HostBinding is the property of the element which we want to bind. like('style.backgroundColor')
- Using **@HostBinding('\<property of the element>') property**
- Set value to this property can change the property we bind.
- Using HostListener & HostBinding is a better way.
### Binding to Directive Properties
- Using a custom property binding can let the user to set the value outside the directive.
- Using **\<directive name> [\<property name of the directive>] = "\<the value>"**
- Angular will check the whether the directive has the property first.
- If the directive only has one property or a main property, we can make alias of that property to the directive name. Then we can do like below:**[\<directive name>] = "\<value>"**
- For **property binding**, we can **remove** the **square brackets** and the **single quotation mark**.
### What Happens behind the Scenes to Structural Directives
- \* star mark in before the directive indicates this is a struactural directive.
- Angular need to transform the structural directives into something where we endup with tools like property binding and so on.
- <ng-template> will not be rendered but allow us to define a template in the end. For **\<ng-template>** is the form that it will get transformed. so we can only use the the property binding for the **ngIf**
### Building a Structural Directive
- Using **@Input() set unless(\<the value the property would normally get as an input>)**, this is still a property, but also a settor of the property. It will be executed at the property changes.
- TemplatRef is the reference of the template like the ElementRef.
- ViewContainerRef means where.
- **So it means where to render what template**.
    ``` TypeScript
    @Directive({
        selector:'[appUnless]'
    })
    export class UnlessDirective{
        @Input('appUnless') set unless(condition: boolean){
            if(!condition){
                this.vcRef.createEmbeddedView(this.templateRef);
                // Create a view in this container
            } else {
                this.vcRef.clear();
            }
        }
        constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef){

        }
    }
    ```
- Using just like ngIf
### Understanding ngSwitch
- Usage:
    ```HTML
    <div [ngswitch] = "<switch variable>">
        <p *ngSwitchCase = "\<value>"> something </p>
        <p *ngSwitchDefault> default </p>
    </div>
    ```
## Services & Dependency injection
- Service is just act as a "High level" object.
### Creating a Logging Service
- Service just act as a center of the code.
- Creating a new Services
    + Create a \<service name>.service.ts
    + Add code:
    ``` TypeScript
    export class loggingService{
        logStatusChange(status:string){
            console.log('A server status changed, new status:'+ status);
        }
    }
    ```
### Injecting the Logging Service into components
- Angular **Dependency injector** is used to **acess the service**.
- **Dependency** is a class which will depend on.
- **Dependency injector** will simply inject the dependency, **injects an instance of this class into our component** automatically.
- So all we need to do is to tell the Angular that we need the instance.
- How can we use service?
    + Create a constructor.
    + Add a variable which type is the Service.
    + import the Services
    + Provide service(tell Angular how to create)
        + Add providers[\<the type of the service>] property in the component
        + Add into provider just like **instantiate a object**.
    + Using the service by this.\<variable name>.\<method name>().
### Creating a Data Service
- Data service is used to store and manage our data.
- Using a service to act as a Global Array and method.
### Understand the Hierarchical Injector
- Hierarchical Injector:
    - Instance of Service in **AppModule**: **All the things** will get it (including **the service**).
    - Instance of Service in **AppComponent**: **All the components** will get it.
    - Instance of Service in **other components**: **Only it and its child Components** can get it.
### Inject service into service
- If we want to inject service into a service, we should use a **decorator @Injectable()**.
- It tells the Angular that this service is injectable or **something can be injected in**.
### Using Services to do the cross-component communication
- We want to trigger some events in a component and listened in another.
- Adding an EventEmitter in Service.
- In the Component(From) just using the service.EventEmitter.emit(parameter).
- In the Component(To) just using the service.EventEmitter.subscribe(\<Function here>);
## Routing
### Introduction of Routing
- Angular ships with its own router which allows us to change url in the url bar but still only use one page but then exchange major parts or a lot of parts of the page. ---> Angular only change the DOM in the single page.
### Setting up and Loading routers
- Create a **const appRoutes** in the **AppModule** and **import Routers from '@angular/router'**
- appRoutes is an array , each router is a JavaScript object.
- path is the url after your domain.
- After path is the action when we get the path.
    - component: The component should be loaded
- Example:
    ``` TypeSript
    const appRoutes: Routes = [
        { path: '', component: HomeComponent }, //localhost:4200/users
        { path: 'users', component: UsersComponent },
        { path: 'servers' component: ServersComponent },
    ];
    ```
- register the routes
    - add a new **RouterModule** import into the **imports** in appModule
    - **RouterModule.forRoot(appRoutes)**
    - Using \<router-outlet> to inform where the component to be shown.
### Navigate with the route links
- If we change the href of the tab, it really work, but it will reload the app.This will lost the state of the app.
- Using Angular directive **routerLink = "\<route>"** to do so.
- routerLink knows which component the elements sit on, which the router it sits on.
- Using property binding can let us construct complicated path very easily,like **[routerLink] = "['\<path>']"**
- In this way, it won't send request to the server, it only change the DOM in the page.
### Understand the navigation path
- If we don't write **'/'** before the path, it will be the **relative path**.
- We can user **'../'** to go up one level. It will romove current loading segment
    - for example it will go to localhost:4200 from localhost:4200/server/something
### Styling active router links
- **Directive RouterLinkeActive = "class of CSS "** usde to change the CSS when the router is active. For example the tab.
- RouterLinkeActive will be active when it checked that the path is part of the url.
- So we can do some configuration for it using **[routerLinkActiveOptions] ="{exact:true}"**.It means **only this path** is exact same as the route it will work.
### Navigating Programmatically
- Trigger the navigation from the TypeScript code.
- router.navigate method does not know the router it sits on.
- Using Absolute path
    ``` TypeScript
    constructor(private router:Router){}
    onLoadServers(){
        this.router.navigate(['<absolute path>']);
    }
    ```
- Using Relative path
    - ActivatedRoute means the route which loaded this component and the route simply is kind of a JavaScript object which keeps a lot of meta information about the currently active route.
    ``` TypeScript
    constructor(private router:Router, private route : ActivatedRoute){}
    onReload(){
        this.router.navigate(['<relative path>',{relativeTo: this.route}]);
    }
    ```
### Passing parameter to Routers and fetch it
- Using path: **'\<route>/(:\<parameter name>)+'** to pass the parameter to the route.
- Fetch the parameter:
    ``` TypeScript
    constructor(private route: ActivatedRoute){}
    ngOnInit(){
        this.user = {
            id: this.route.snapshot.params['<parameter name>']
        };
    }
    ```
- Using RouteLinke of property binding: **[routerLink] = ['<path>',('<parameter>')+]**
    - this will have problem when using it in the same component(only the url will change), because Angular cleverly not initialize the component again.
- So if we use the **route.snapshot**, we should do some changes.We will use the** route.params.subscribe()**, which is a observable for the **asynchronous tasks**.
    - **Observable is an easy way to subscribe to some event which might happen in the future then execute**
    - The first argument is function to be executed whenever the parameters change in this use case.
        ``` TypeSript
        this.route.params.subscribe(
            (params:Params) => {
                this.id = params['id'];
            }
        );
        ```
