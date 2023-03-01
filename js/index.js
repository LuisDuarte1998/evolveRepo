const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})



// const showCardButton = document.querySelectorAll('.show-card');
// const card = document.querySelector('.card');

// showCardButton.addEventListener('click', function() {
//     var station=this.getAttribute("data-location");
//   var card= document.querySelector(`.card[data-location=${station}]`);
//   hidecards()
//   showcard(card)

// });

var previousStation = null;

function hidecards() {
  document.querySelectorAll('.card').forEach(function (e){
    console.log(e)
    e.style.display = 'none';
  });
}

function showcard(card) {
  card.style.display = 'block';
}

var buttons = document.getElementsByClassName("show-card");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var station = this.getAttribute("data-location");
    var card = document.querySelector(`.card[data-location=${station}]`);
    hidecards();
    showcard(card);
    // toggle card //
    removeactive();
    addactive(this);
    // toggle stationcard //
    if (previousStation !== null) {
      document.querySelectorAll(`.stationScroll-wrapper [data-location=${previousStation}]`).forEach(function (e){
        e.classList.remove('stationcardActive');
        e.classList.add('stationCard');
      });
    }
    document.querySelectorAll(`.stationScroll-wrapper [data-location=${station}]`).forEach(function (e){
      e.classList.remove('stationCard');
      e.classList.add('stationcardActive');
    });
    previousStation = station;
  });
}

function removeactive() {
  document.querySelectorAll('.show-card').forEach(function (e){
    console.log(e)
    e.querySelector('img').src=e.querySelector('img').src.replace('_active', '')
    // removes _active //
  });
}

function addactive(e) {
  e.querySelector('img').src=e.querySelector('img').src.replace('.png', '_active.png')
  // toggles _active on image //
}

// edit pop up //
const editBtn = document.querySelector('.edit-btn');
const alertOverlay = document.querySelector('.alert-overlay');

editBtn.addEventListener('click', () => {
  alertOverlay.style.display = 'block';
});






// maps actionsheet //
const btnMap = document.querySelector('.btn-map');
const mapOverlay = document.querySelector('.map-overlay');

btnMap.addEventListener('click', () => {
    mapOverlay.style.display = 'block';
  });

// trying overlay //
const btnMaps = document.querySelectorAll('.btn-map');
const actionsheet = document.querySelector('.actionsheet');
const cancelBtn = document.querySelector('.actionsheet-cancel');

btnMaps.forEach(btnMap => {
  btnMap.addEventListener('click', () => {
    actionsheet.classList.toggle('hidden'); // show or hide the actionsheet
    actionsheet.style.bottom = actionsheet.classList.contains('hidden') ? '-100%' : '0'; // toggle the bottom position to move the actionsheet in and out
  });
});

cancelBtn.addEventListener('click', () => {
  actionsheet.classList.add('hidden'); // hide the actionsheet
  actionsheet.style.bottom = '-100%'; // move the actionsheet offscreen
});





