let isOpen = false

function openMenu() {
    const container = document.getElementById("mobile-navigation")
    const button = document.getElementById("mobile-button")

    if (isOpen) {
        container.style.display = "none"
        button.innerHTML = '<img src="images/menu_icon.png" id="menu-icon">'

        isOpen = false
    } else {
        container.style.display = "flex"
        button.innerHTML = '<img src="images/close_menu_icon.png" id="menu-icon">'

        isOpen = true
    }    
}