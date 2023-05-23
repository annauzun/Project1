let isOpen = false

function openMenu() {
    const container = document.getElementById("mobile-navigation")

    if (isOpen) {
        container.style.display = "none"
        isOpen = false
    } else {
        container.style.display = "flex"
        isOpen = true
    }
    
    
}