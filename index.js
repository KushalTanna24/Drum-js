
// Looping through the buttons to add eventLister to each button.
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener('click', function () {

        var currentButton = this.innerHTML;
        // calling the function and pass the currentButton value which will have the innerHTML value.
        makeSound(currentButton);
        buttonAnimation(currentButton);
    });

}
//detecting keyboard press
document.addEventListener('keydown', function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

// function to check the key and play the sound.
function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(currentButton)
    }

}

function buttonAnimation(animateButton){
    document.querySelector("."+ animateButton).classList.add("pressed")

    setTimeout(function(){
        document.querySelector("."+animateButton).classList.remove("pressed")
    }, 100);
}






/*

*/