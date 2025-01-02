let categories = document.querySelectorAll("body nav .collapse-node .content button")
if (categories) {
    for (i=0; i < categories.length; i++) {
        let current = categories[i];
        
        current.addEventListener("click", () => {
            current.querySelector("p").classList.add("active");
    
            for (j=0; j < categories.length; j++) {
                if (categories[j] == current) continue; 
                categories[j].querySelector("p").classList.remove("active")
            }
        })
    }
}




let infoCategories = document.querySelectorAll(".page .information .navigation button")
if (infoCategories) {
    for (i=0; i < infoCategories.length; i++) {
        let current = infoCategories[i];
        
        current.addEventListener("click", () => {
            current.classList.add("active");
            document.querySelector(`.page .information .${current.querySelector("p").textContent.toLowerCase()}`).style = "display: flex";
    
            for (j=0; j < infoCategories.length; j++) {
                if (infoCategories[j] == current) continue; 
                infoCategories[j].classList.remove("active");
                document.querySelector(`.page .information .${infoCategories[j].querySelector("p").textContent.toLowerCase()}`).style = "display: none";
            }
        })
    }
}