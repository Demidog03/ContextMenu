const contextMenu = document.querySelector(".wrapper")
const shareMenu = document.querySelector(".share-menu")

//contextmenu = clicking right button of mouse
document.addEventListener('contextmenu', e => {
    e.preventDefault() //prevents default context menu of browser
    let winWidth = window.innerWidth
    let smWidth = shareMenu.offsetWidth
    let cmWidth = contextMenu.offsetWidth
    let winHeight = window.innerHeight
    let smHeight = shareMenu.offsetHeight
    let cmHeight = contextMenu.offsetHeight



    //if x is greater than window width - contextMenu width then set the x value
    //to window width - contextMenu width else set x to the offsetX
    let x = e.offsetX
    let y = e.offsetY
    if(x > (winWidth-cmWidth-smWidth) ){
        shareMenu.style.left = "-200px"
    }else{
        shareMenu.style.left = ""
        shareMenu.style.right = "-200px"
    }
    x = x > winWidth - cmWidth ? winWidth - cmWidth : x
    y = y > winHeight - cmHeight ? winHeight - cmHeight : y



    contextMenu.style.left = `${x}px`
    contextMenu.style.top = `${y}px`

    contextMenu.style.visibility = 'visible'
})