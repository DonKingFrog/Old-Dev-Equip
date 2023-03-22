function ShowSideBar(){
    let sidebar = document.getElementById('sidebar')

    if (document.getElementById('check').checked){
        sidebar.style.left = '0px';
        sidebar.style.transition = '0.2s';
    } else {
        sidebar.style.left = 0 - sidebar.style.width;
        sidebar.style.transition = '0.2s';
    }
}

function SocialUp() {
    let social = document.getElementById('social-text')    
    social.style.top = "20%";
    social.style.transition = "0.25s";
}

function SocialDown() {
    let social = document.getElementById('social-text')    
    social.style.top = "30%";
    social.style.transition = "0.25s";
}