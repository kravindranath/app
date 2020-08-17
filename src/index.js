function insertElem() {

    var elem = document.createElement('div');

    elem.innerHTML = 'Hello World!';

    return elem;


}

document.body.appendChild(insertElem());