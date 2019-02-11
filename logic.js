const Game = function(){
    let levelTimout;
    let frogCount;
    let levelCount;
    const getSize = () => Math.floor((Math.random() * 60) + 20);
    const getColor = () => `rgb(${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)})`
    const getlevel = () => levelCount;
    const frogLeft = () => _frogs.length;
    const getTimeout = () => levelTimout;
    const getpostion = () =>{
        let top = Math.floor((Math.random() * 60) + 15);
        let left =  Math.floor((Math.random() * 80) + 5);
        return {
            top : top,
            left : left
        }
    }
    const _frogs = [];

    const createNewFrogs = (frogs , index) =>{
            frogs.push({
                id : "f" + index,
                size : getSize(),
                color : getColor(),
                postion : getpostion()
            })
    }

    const getFrog = () => _frogs;

    const newLevel = () =>{
        levelTimout++;
        levelCount++;
        frogCount = frogCount + 2;
        _frogs.splice(0,_frogs.length)
         for(let i = 0; i < frogCount; i++){
                createNewFrogs(_frogs , i +1);
        }
    }

    const removeFrog = (idFrog) => {
        for(let i in _frogs){
            if(_frogs[i].id == idFrog){
               return _frogs.splice(i , 1);
            }
        }
            return console.log('The id is not exist')
    }

    const restGame = () =>{
        _frogs.splice(0 , _frogs.length);
        levelTimout = 3;
        frogCount = 1;
        levelCount = 1;
        createNewFrogs(_frogs ,1);
    }
    return {
        getFrog : getFrog,
        newLevel : newLevel,
        removeFrog : removeFrog,
        getlevel : getlevel,
        getTimeout : getTimeout,
        frogLeft : frogLeft,
        restGame : restGame
        
    }



}
