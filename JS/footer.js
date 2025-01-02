function runFooter() {

}

document.addEventListener("DOMContentLoaded", function() { 
    fetch('../Resources/Config/footer.html') .then(response => response.text()) .then(data => { 
        let tempDiv = document.createElement('div'); tempDiv.innerHTML = data; 
        let elementToImport = tempDiv.querySelector('footer'); 
        document.querySelector('body').appendChild(elementToImport); 
        runFooter();
    }) .catch(error => console.error('Error fetching the HTML file:', error)); 
});

