console.log ('bruh');

var header = document.querySelector('#header');
var changeheadbut = document.querySelector('#header-change-button');
var changethemebut = document.querySelector('#theme-change-button');
var taba = document.querySelector('#taba');
var sumi = document.querySelector('#sumi');
var rain = document.querySelector('#rain');


//change header w button 
changeheadbut.addEventListener('click', () => {
    header.innerHTML = "uh...."
})


//toggle color theme
function changeButtext() {
    if (document.body.classList.contains('dark')) {
        changethemebut.textContent = "switch to light theme";
    } else {
        changethemebut.textContent = "switch to dark theme";
    }
}

//change theme
changethemebut.addEventListener('click', () => {
    // add OR remove dark class to body
    document.body.classList.toggle('dark');
    changeButtext();
})


//toggle image visibility
taba.addEventListener('click', () => {
    sumi.classList.remove('hidden');
})

sumi.addEventListener('click', () => {
    rain.classList.remove('hidden');
})

