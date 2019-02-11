const Renderer = function(){
    const renderFrog =function(frogs){
        $("#game").empty();
        for(let frog of frogs){
            let output=`<i data-id=${frog.id} class="fas fa-frog" style="position:absolute;left:${frog.postion.left}%;top:${frog.postion.top}%;color:${frog.color};font-size:${frog.size}px" ></i>`
            $("#game").append(output);
        }

        $("#frogLeft").text(`${game.frogLeft()} frogs left`)
        $("#levle").text(`${game.getlevel()} Level`)
 
    }
     return {
        renderFrog : renderFrog
     }
 }