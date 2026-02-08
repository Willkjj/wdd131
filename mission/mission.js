
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body')
let para = document.querySelector('div')
let h2 = document.querySelector('h2')
let img = document.querySelector('img')

selectElem.addEventListener('change', changeTheme);


function changeTheme() {
    let current = selectElem.value;
    if (current === 'light') {
        para.style.color ='black'
        h2.style.color = '#5d98be'
        document.body.style.backgroundColor = 'white'
        img.src ="byui-logo-blue.webp"
    } else if (current === 'dark') {
        para.style.color ='white'
        h2.style.color = '#6fb3e0'
        document.body.style.backgroundColor = 'black'
        img.src = "byui-logo-white.png"
    }
}
          