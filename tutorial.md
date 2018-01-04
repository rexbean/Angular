# MEAN stack tutorial
## 1. setup
### 1.1 nodejs
- delete the old version nodejs & npm using:
    + installed by homebrew
        ```
        brew uninstall node
        ```
    + installed by pkg
        ```
        sudo rm -rf /usr/local/{bin/{node,npm},lib/node_modules/npm,lib/node,share/man/*/node.*}
        ```
- download pkg from the address: https://nodejs.org/en/
### 1.2 angular-cli
- The website is https://cli.angular.io/
- Setup by the command:
    ```
    npm install -g @angular/cli
    ```
- Create new application
    ```
    ng new <applicationName>
    ```
- Easily test your app locally while developing
    ```
    ng serve
    ```
    open localhost:4200 can see the result
### 1.3 nodejs & express
- Setup by the command:
    ```
    npm install -g express-generator
    ```
- create the folder structure, install all libraries that are necessary, and run the application
    ```
    express <applicationName>
    cd <applicationName>
    npm install
    npm start
    ```
- By default, our backend server will run on localhost:3000.
### 1.4 mongodb --mongoose and cors
- Setup by the command:
    ```
    npm install mongoose cors --save
    ```
- Mongoose is used for communication with MongoDB
- CORS is used for Cross-Origin Resource Sharing (CORS) mechanism, that gives web servers cross-domain access controls.
- We need this because we will be accessing our backend application from our frontend application.

## 2 authentication
### 2.1 passport.js
- passport.js with express:  http://blog.fens.me/nodejs-express-passport/
#### 2.1.1 OAuth2.0
- principle : http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html
- SSO 单点登录:
https://segmentfault.com/a/1190000005357718
#### 2.1.2 nodejs connect middleware
- http://blog.fens.me/nodejs-connect/
