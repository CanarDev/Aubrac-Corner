  // Animation Button ==================================

    let midi = document.querySelector('.midi')
    let soir = document.querySelector('.soir')
    let menus = document.querySelectorAll('.menu')

    midi.addEventListener('click', e=> {
        menus.forEach(menu =>{
            menu.style.display = "none"
        })
        if(document.querySelector('.translate').style.animationName == ""){
            document.querySelector('.menu-midi').style.display = "block"
        }else{
            document.querySelector('.menu-midi').style.display = "block"
            document.querySelector('.midi').style.color = "white"
            document.querySelector('.soir').style.color = "black"
            document.querySelector('.translate').style.animationName = "btn-soir"
        }
    })
    soir.addEventListener('click', e=> {
        menus.forEach(menu =>{
            menu.style.display = "none"
        })
        document.querySelector('.menu-soir').style.display = "block"
        document.querySelector('.soir').style.color = "white"
        document.querySelector('.midi').style.color = "black"
        document.querySelector('.translate').style.animationName = "btn-midi"

    })

    // Animation Button ==================================