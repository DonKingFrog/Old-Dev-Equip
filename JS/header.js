function runHeader() {
    
    // Dropdown
    let dropdowns = document.querySelectorAll(".dropdown")
    for (i=0; i < dropdowns.length; i++) {
        let current = dropdowns[i]
        

        current.addEventListener("mouseover", () => {
            console.log("Yipee");
            current.classList.add("hovered")
        })

        current.addEventListener("mouseout", () => {
            current.classList.remove("hovered")
        })
    }

    

    // Mobile Toggle
    let navbarToggle = document.querySelector(".navbar-toggle")
    console.log(navbarToggle);
    navbarToggle.addEventListener("click", () => {
        switch(document.querySelector("header .left .nav").classList.contains("active")) {
            case true:
                document.querySelector("header .left .nav").classList.remove("active")
                break;
            default: 
                document.querySelector("header .left .nav").classList.add("active")
                break;        
        }
    })
}

document.addEventListener("DOMContentLoaded", function() { 
    fetch('../Resources/Config/header.html') .then(response => response.text()) .then(data => { 
        let tempDiv = document.createElement('div'); tempDiv.innerHTML = data; 
        let elementToImport = tempDiv.querySelector('header'); 
        document.querySelector('body').appendChild(elementToImport); 
        runHeader();
    }) .catch(error => console.error('Error fetching the HTML file:', error)); 
});

