## HOW TO USE THESE EXERCISES
These are a series of javascript exercises; they start very simply, but get more involved as you progress through them.

Before you start you should have a few things installed on your machine:

1. NPM.  To check if you have it type `npm --version` in a terminal.  If you get back `Command 'npm' not found, but can be installed with:`, install NPM/Node with NVM. 
2. Jasmine.  Jasmine is a testing framework for Javascript.  Type `jasmine -v` to check for it.  If you need to install it type `npm install -g jasmine` to do so.

Each exercise includes 3 files, a markdown file with a description of the task, an empty (or mostly empty) javascript file, and a set of tests.  To complete the exercise go to the exercise directory in a terminal and run `jasmine filename.spec.js`.  This should find and run the test file and show you the output.  

Upon first running the tests you will find that the tests fail: this is by design!  Your task is to open up the javascript file and write the code needed to get all of the tests to pass. Some of the exercises have test conditions defined in the spec file that are defined as 'xit' compared to 'it'. This is purposeful, and as you test your solution against the first 'it', on success you will change the next 'xit' to an 'it' and test your code again, until all conditions are satisfied.

The first exercise, `helloWorld` will walk you through the process in more depth.
