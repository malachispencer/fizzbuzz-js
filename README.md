# FizzBuzz JS

Introduction to unit testing in JavaScript with Jasmine, using the classic FizzBuzz problem.

### Setting Up Jasmine For Node.js

1. Run ```npm init``` to create ```package.json``` file.

2. Run ```npm install --save-dev jasmine``` to install Jasmine locally and save as a dev dependency.

3. Add ```"test-init": "./node_modules/jasmine/bin/jasmine.js init"``` to scripts in ```package.json```.

4. Add ```"test": "./node_modules/jasmine/bin/jasmine.js"``` to scripts in ```package.json```.

5. Run ```npm test-init``` to initialize Jasmine.

### Running Tests

* Run ```npm test``` from the project root.
