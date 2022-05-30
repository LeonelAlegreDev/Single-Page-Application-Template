const homePage = document.getElementById('p1');
const projectPage = document.getElementById('p2');
const aboutPage = document.getElementById('p3');
const pageWrapper =document.getElementById('page-wrapper');
let currentPage = homePage;

aboutPage.style.transform = "translateX(-100%)";

ScrollDisplay();

function navController(id){
    switch(id){
        case "home":
            if(currentPage != homePage)
            {
                homePage.style.transform = "translateX(0%)";
                if(currentPage == projectPage){
                    currentPage.style.transform = "translateX(0%)";
                }
                if(currentPage == aboutPage){
                    currentPage.style.transform = "translateX(-100%)";
                }
                currentPage = homePage;
                currentPage.scroll({top: 0});
            }
            break;

        case "projects":
            if(currentPage != projectPage)
            {
                projectPage.style.transform = "translateX(-100%)";
                if(currentPage == homePage){
                    currentPage.style.transform = "translateX(100%)";
                }
                if(currentPage == aboutPage){
                    currentPage.style.transform = "translateX(-100%)";
                }
                currentPage = projectPage;
                currentPage.scroll({top: 0});
            }
            break;

        case "about":
            if(currentPage != aboutPage)
            {
                aboutPage.style.transform = "translateX(-200%)";
                if(currentPage == homePage){
                    currentPage.style.transform = "translateX(100%)";
                }
                if(currentPage == projectPage){
                    currentPage.style.transform = "translateX(0%)";
                }
                currentPage = aboutPage;
                currentPage.scroll({top: 0});
            }
            break;
    }
}

function ScrollDisplay(){
    let pages = document.querySelectorAll('.page');

    for(let i = 0; i < pages.length; i++)
    {
        if(pages[i].scrollHeight > pageWrapper.offsetHeight)
        {
            pages[i].style.overflowY = "scroll";
        }
    }    
}

