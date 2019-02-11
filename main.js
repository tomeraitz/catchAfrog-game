let isGameOn = false;

$("body").on("click", ".fa-frog", function () {
    let id = $(this).data().id;
    game.removeFrog(id);
    renderer.renderFrog(game.getFrog())
})

const start = function () {
    renderer.renderFrog(game.getFrog());
    let timeout = game.getTimeout();
    let seconds = timeout;
    $("#title").text(`${seconds} Seconds left`)

    const timeDown = () => {
        if (isGameOn == false) {
            clearInterval(Countdown);
            changeIsGameOn(isGameOn);
            return start();
        }
        seconds--
        $("#title").text(`${seconds} Seconds left`)
        if (game.frogLeft() == 0) {
            game.newLevel();
            clearInterval(Countdown);
            return start();
        }
        if (seconds <= 0) {
            clearInterval(Countdown);
            return gameOver();
        }

    }

    let Countdown = setInterval(timeDown, 1000);
    const gameOver = () => {
        alert("Game Over");
        isGameOn = false;
    }


}

$("#start").on("click", function () {
    console.log(isGameOn);
    if (isGameOn == false) {
        game.restGame();
        isGameOn = true;
        renderer.renderFrog(game.getFrog());
        start();
    }
})

const game = Game()
const renderer = Renderer()
