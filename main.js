const slider = document.getElementById('myRange');
const price = document.getElementById('price');


slider.addEventListener('input', () => {
        var x = slider.value;
        var color = `linear-gradient(90deg, rgba(164, 243, 235, 1)${x*3.125}%, rgba(236, 240, 251, 1)${x*3.125}%)`;
        slider.style.background = color;
        price.innerHTML = "$" + slider.value + ".00";
    })



toggleAll.addEventListener('click', () => {
    const monthYear = document.getElementById('month');
    const toggleAll = document.getElementById('toggleAll');
    if(toggleAll.checked){
        monthYear.innerHTML = '/year';
        slider.value = slider.value*12*0.75;
        price.innerHTML = "$" + slider.value + ".00"
    }else{
        monthYear.innerHTML = '/month'
        slider.value = slider.value/12/0.75;
        price.innerHTML = "$" + slider.value + ".00";
    }
})





