React components 16.8 in angularJS 1.7 with babel es6 
To install project, follow these instructions:
- npm i gulp-cli -g
- npm install
Apply gulp build, to build project
Then gulp watch to launch project

Tuto, to integrate react component, you must:
- Create component;
- Add the component to reactjs directory in components by importing all dependencies;
- Create a module and inject component in angularJS with react2angular;
- import module in app.js
- Build and launch project

If you want add some css file, you have to change extension of your css file with scss, add import of your scss in base.sass.
Then once the project built and minified in app.min.js, the dom can access to your css properties