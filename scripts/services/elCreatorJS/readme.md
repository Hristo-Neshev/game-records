# Create templates
1. In /templates/create-function/ create create{elementName}.js file with new function like this:
```
export default function title(data) {
    const titleEl = `<h1>${data.title}</h1>`;
    return titleEl;
}
```
Function name will be name of the template. This function just put data into the template and return populated html in string format.

2. In /templates/templates.js import new function and put it in the templates object
```
import title from "./create-functions/createTitle.js";
const templates = {
    title
}
export default templates;
```
TIP - You can use emmet in .js files with adding emmet language: javascript: javascriptreact. After template is ready just put `` around it.
# elCreator
This function accepts templateName and data. 
templateName must match function's name in templates.js file.
data is object with needed dynamic data;

# appendElement

This function accepts:
- container - (HTMLElement)  
- element - string template created by elCreator function
- replace - (boolean) - false by default. If true - delete all content in the container before append new element.