const slider = document.getElementById('myRange');
const price = document.getElementById('price');
const monthYear = document.getElementById('month');
const toggleAll = document.getElementById('toggleAll');
const views = document.getElementById('views');
const color = document.getElementById('changeColor');
let perMonth = [8, 12, 16, 24, 36];
let view = ["10K", "50K", "100K", "500K", "1M"];
let isYearly = false;

slider.addEventListener('input', () => {
    updateValue(); 
    views.innerHTML = view[slider.value];
    
    let value = slider.value * 25;
    slider.style.background = `linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${value}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%)`;
})



toggleAll.addEventListener('change', () => {
    if(isYearly == false){
        isYearly = true;
    }else{
        isYearly = false;
    }
    updateValue();
})


function updateValue() {
    if(isYearly){
        price.innerHTML = '$' + perMonth[slider.value]* 12 * 0.75 + ".00";
    }else{
        price.innerHTML = '$' + perMonth[slider.value] + '.00';
    }
}


