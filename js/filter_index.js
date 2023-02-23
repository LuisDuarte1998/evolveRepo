const filter = document.querySelectorAll('.filter');
const av_status = document.querySelectorAll('.filter_toggle');
const charging_level = document.querySelectorAll('.filter_toggle');
const price = document.querySelectorAll('.filter_toggle');
const plug = document.querySelectorAll('.filter_toggle');
const network = document.querySelectorAll('.filter_toggle');

//toggles the filter dropdown menu
function filterFunction(){
    document.getElementById("filter_panel").classList.toggle("show");
}
//toggles the availability dropdown menu
function avFunction(){
    document.getElementById("av_container").classList.toggle("show");
}
//toggles the charging level dropdown menu
function clFunction(){
    document.getElementById("cl_container").classList.toggle("show");
}
//toggles the price dropdown menu
function priceFunction(){
    document.getElementById("price_container").classList.toggle("show");
}
//toggles the plug dropdown menu
function plugFunction(){
    document.getElementById("plug_container").classList.toggle("show");
}
function networkFunction(){
    document.getElementById("network_container").classList.toggle("show");
}
//closes the filter dropdown menu
function toggleFilterPanel(x){
    var panel = document.getElementById(x), maxH = "810px";
    if(panel.style.height == maxH){
        panel.style.height = "0px";
    }
    else{
        panel.style.height = maxH;
    }
}
//closes the availability dropdown menu
function toggleAvPanel(x){
    var panel = document.getElementById(x), maxH = "44px";
    if(panel.style.height == maxH){
        panel.style.height = "0px";
    }
    else{
        panel.style.height = maxH;
    }
}
//closes the charge dropdown menu
function toggleChargePanel(x){
    var panel = document.getElementById(x), maxH = "44px";
    if(panel.style.height == maxH){
        panel.style.height = "0px";
    }
    else{
        panel.style.height = maxH;
    }
}
//closes the price dropdown menu
function togglePricePanel(x){
    var panel = document.getElementById(x), maxH = "44px";
    if(panel.style.height == maxH){
        panel.style.height = "0px";
    }
    else{
        panel.style.height = maxH;
    }
}
//closes the plug type dropdown menu
function togglePlugPanel(x){
    var panel = document.getElementById(x), maxH = "210px";
    if(panel.style.height == maxH){
        panel.style.height = "0px";
    }
    else{
        panel.style.height = maxH;
    }
}
//closes the network dropdown menu
function toggleNetworkPanel(x){
    var panel = document.getElementById(x), maxH = "210px";
    if(panel.style.height == maxH){
        panel.style.height = "0px";
    }
    else{
        panel.style.height = maxH;
    }
}