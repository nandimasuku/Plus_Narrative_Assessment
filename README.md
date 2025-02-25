
Cucumber is a popular behavior-driven development (BDD) tool that allows developers and stakeholders to collaborate on defining and testing application requirements in a human-readable format. TypeScript is a powerful superset of JavaScript that adds optional static typing, making it easier to catch errors before runtime. By combining these two tools, we can create more reliable and maintainable tests.


## Open project "Plus Narrative Assessment"
1. clone the project/ Open download zip file using IDE vscode/intellij 

## steps 
1. Install playwright
2. Install cucumber plugin
3. Set playwright framework 'ctrl+shift+ P' 
4. Select all browsers and click on to install 
5. Install dependencies 'npm i @cucumber/cucumber -D'
6. run 'npm i ts-node -D'
7. Create Project structure 'src/test/features'
8. Modify 'package.json' file, edit script to '"test": "cucumber-js test"'
9. Create a 'cucumber.json' file
10. Run 'npm test' cmd to get step definition snippets

## on cucumber.json , this command 'publish quet' means  /*for default public report */
## 

## mapping feature file with step definition 
1. Command + , 
2. search for 'cucumber' 
3. Click edit in json
4. Modify cucumber.json file to run with tags for each test "line 7" or use "feature file name" instead of tags
5. To run the script using the ff command "npm test"

## To get html report
1. After running the test
2. Navigate to root "cucumber-report.html" , open with terminal/reveal finder
3. Each step has an attached screenshot to show that it passed 
4. Navigate to "test-results" for screenshot of failed steps


