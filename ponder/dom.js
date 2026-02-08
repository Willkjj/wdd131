let title = document.querySelector('h1');
console.log(title);

title.textContent = 'Web Page Components';

let topic_title = document.getElementById('topics');

topic_title.style.color = 'purple';

let list = document.querySelector('.list');

list.style.border = '5px solid red';

let para = document.querySelector('p');

// para.classList.add('background');
let imgage = document.querySelector('img');

imgage.setAttribute('src', 'dom.png');

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.querySelector('#html').style.color = 'white';
})

const newPara = document.createElement('p');
newPara.innerText = 'Added with Javascript!';
document.body.appendChild(newPara);
                