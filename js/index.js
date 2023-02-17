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
        var station=this.getAttribute("data-location");
      var card= document.querySelector(`.card[data-location=${station}]`);
      hidecards()
      showcard(card)
      // toggle card //
      removeactive()
      addactive(this)
    })}

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