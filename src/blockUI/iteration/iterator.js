let eventIterationChange = new CustomEvent('iterationChange');// создаём событие
let parentConteiner;

function iteration() {
    var buttonsPlus = document.querySelectorAll('.iteration__button-plus');
    var buttonsMin = document.querySelectorAll('.iteration__button-min');
    // console.log(buttonsPlus);
    // console.log(buttonsMin);
    parentConteiner = buttonsMin[0].parentNode.parentNode;
    // console.log(parentConteiner.firstChild);
    // parentConteiner.addEventListener('iterationChange', () => alert('gena'));// обрабатываем событе
    buttonsPlus.forEach(element => {
        element.addEventListener("click", plus);
    });

    buttonsMin.forEach(element => {
        element.addEventListener("click", min);
    });
}

function plus() {
    let content = this.previousSibling.previousSibling;
    // console.log(content.innerText);
    let text = String(parseInt(content.innerText) + 1);
    content.innerText = text;
    // console.log(parentConteiner);
    parentConteiner.dispatchEvent(eventIterationChange); // вызываем событие
    if (text !== '0') {
        content.previousSibling.previousSibling.disabled = false;
    }
}


function min() {
    let content = this.nextSibling.nextSibling;
    // console.log(content.innerText);
    let text = String(parseInt(content.innerText) - 1);
    content.innerText = text;
    parentConteiner.dispatchEvent(eventIterationChange);// вызываем событие
    if (text === '0') {
        this.disabled = true;
    }
}





iteration();