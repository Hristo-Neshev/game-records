import templates from "./templates/templates.js";

export function elCreator(templateName, data) {
    const createElFunction = templates[templateName];
    const createdElement = createElFunction(data)
    return createdElement;
}

export function appendElement(element, container, replace = false) {
    if (replace) {
        container.innerHTML = "";
    }

    container.insertAdjacentHTML("beforeend", element);
}