const btns = document.querySelectorAll('.btn');
const dropmenus = document.querySelectorAll('.drop-menu');
const avaiFilter = document.querySelectorAll('.Availability');

function myFunction(){
    document.getElementById("dropup").classList.toggle("show");
}

function avaiFunction(){
    document.getElementById("availability_buttons").classList.toggle("show");
}

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');
        document.querySelector(btn.dataset.target).classList.add('active');
    })
})

window.onclick = (e) => {
    if(!e.target.matches('.btn')){
        btns.forEach(btn => btn.classList.remove('active'));
        dropmenus.forEach(dropmenu => dropmenu.classList.remove('active'));
    }
}

//keeps drop up menu open
window.onclick = function(event){
    if(!event.target.matches('.btn')){
        var dropUps = document.getElementsByClassName(".drop-menu");
        var i;
        for(i = 0; i < drop-wrapper.length; i++){
            var openDropUp = drop-wrapper[i];
            if(openDropUp.classList.contains('show')){
                openDropUp.classList.remove('show');
            }
        }
    }
}

//toggle for the dropmenu
function toggleAvaiPanel(x){
    var panel = document.getElementById(x), maxH = "44px";
    if(panel.style.height == maxH){
        panel.style.height = "0px";
    }
    else{
        panel.style.height = maxH;
    }
}
/*avaiFilter.forEach(Availability => {
    Availability.addEventListener('click', () => {
        avaiFilter.forEach(Availability => Availability.classList.remove('active'));
        Availability.classList.add('active');
        document.querySelector(Availability.dataset.target).classList.add('active');
        if()
    })
})*/