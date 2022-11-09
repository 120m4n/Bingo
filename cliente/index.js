// given a element, clone template and append to element
function appendTemplate(element) {
    var template = document.querySelector('#template');
    var clone = document.importNode(template.content, true);
    element.appendChild(clone);
    
}

// given a element , add a listener event click
function addListener(element) {
    element.addEventListener('click', flipCard);
}

function flipCard() {
    this.classList.toggle('flipCard');
}




