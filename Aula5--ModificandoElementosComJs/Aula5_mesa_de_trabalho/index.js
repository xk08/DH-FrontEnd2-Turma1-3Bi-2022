let title = document.querySelector('h1')
title.outerHTML += '<button onClick="toggleTheme()">Toggle theme</tbutton>'

let toggleButton = document.querySelector('button')
toggleButton.classList.add('toggleButton')

function toggleTheme(){
    let body = document.querySelector('body')
    let title = document.querySelector('h1')
    let button = document.querySelector('button')
    let items = document.getElementsByClassName('item')
    body.classList.toggle("darkBody")
    title.classList.toggle('darkTitle')
    button.classList.toggle('darkToggleButton')
    for(item of items){
        item.classList.toggle('darkItem')
        item.classList.toggle('darkItemText')
    }
}
