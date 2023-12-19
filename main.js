function shopINHovar1(){
    var hover = document.querySelector(".title-shope-now1").style.marginRight="40%";
    var hover = document.querySelector(".items-arrow1").style.left = "70px";
}
function shopOUTHovar1(){
    var hover = document.querySelector(".title-shope-now1").style.marginRight ="0";
    var hover = document.querySelector(".items-arrow1").style.left="7px";
}
function shopINHovar2(){
    var hover = document.querySelector(".title-shope-now2").style.marginRight="40%";
    var hover = document.querySelector(".items-arrow2").style.left = "70px";
}
function shopOUTHovar2(){
    var hover = document.querySelector(".title-shope-now2").style.marginRight ="0";
    var hover = document.querySelector(".items-arrow2").style.left="7px";
}
function shopINHovar3(){
    var hover = document.querySelector(".title-shope-now3").style.marginRight="40%";
    var hover = document.querySelector(".items-arrow3").style.left = "70px";
}
function shopOUTHovar3(){
    var hover = document.querySelector(".title-shope-now3").style.marginRight ="0";
    var hover = document.querySelector(".items-arrow3").style.left="7px";
}
function shopINHovar4(){
    var hover = document.querySelector(".title-shope-now4").style.marginRight="40%";
    var hover = document.querySelector(".items-arrow4").style.left = "70px";
}
function shopOUTHovar4(){
    var hover = document.querySelector(".title-shope-now4").style.marginRight ="0";
    var hover = document.querySelector(".items-arrow4").style.left="7px";
}
function shopINHovar5(){
    var hover = document.querySelector(".title-shope-now5").style.marginRight="40%";
    var hover = document.querySelector(".items-arrow5").style.left = "70px";
}
function shopOUTHovar5(){
    var hover = document.querySelector(".title-shope-now5").style.marginRight ="0";
    var hover = document.querySelector(".items-arrow5").style.left="7px";
}
function shopINHovar6(){
    var hover = document.querySelector(".title-shope-now6").style.marginRight="40%";
    var hover = document.querySelector(".items-arrow6").style.left = "70px";
}
function shopOUTHovar6(){
    var hover = document.querySelector(".title-shope-now6").style.marginRight ="0";
    var hover = document.querySelector(".items-arrow6").style.left="7px";
}


// When add Button Click then remove add button
var FirstAddClick=document.getElementById('Scroll-first-Add');
    FirstAddClickRemove=document.getElementById('Scroll-first-Add');
    FirstAddClick.addEventListener("click", ()=>{
    FirstAddClickRemove.classList.toggle('First-Add-Remove');
    })
    var SecondAddClick=document.getElementById('Scroll-Second-Add');
    SecondAddClickRemove=document.getElementById('Scroll-Second-Add');
    SecondAddClick.addEventListener("click", ()=>{
    SecondAddClickRemove.classList.toggle('First-Add-Remove');
    })
    var ThirdAddClick=document.getElementById('Scroll-Third-Add');
    ThirdAddClickRemove=document.getElementById('Scroll-Third-Add');
    ThirdAddClick.addEventListener("click", ()=>{
    ThirdAddClickRemove.classList.toggle('First-Add-Remove');
    })


// When remove add button then add remove button
    var FirstAddClick=document.getElementById('Scroll-first-Add');
    FirstRemoveAdd=document.getElementById('Scroll-First-remove');
    FirstAddClick.addEventListener("click", ()=>{
    FirstRemoveAdd.classList.toggle('First-Remove-Add');
    })
    var SecondAddClick=document.getElementById('Scroll-Second-Add');
    SecondRemoveAdd=document.getElementById('Scroll-Second-remove');
    SecondAddClick.addEventListener("click", ()=>{
    SecondRemoveAdd.classList.toggle('First-Remove-Add');
    })
    var ThirdAddClick=document.getElementById('Scroll-Third-Add');
    ThirdRemoveAdd=document.getElementById('Scroll-Third-remove');
    ThirdAddClick.addEventListener("click", ()=>{
    ThirdRemoveAdd.classList.toggle('First-Remove-Add');
    })

// when click remove button then remove this button 
    var FirstRemoveClickClick=document.getElementById('Scroll-First-remove');
    FirstAdd=document.getElementById('Scroll-first-Add');
    FirstRemoveClickClick.addEventListener("click", ()=>{
    FirstAdd.classList.toggle('First-Add-Remove');
    })
    var SecondRemoveClickClick=document.getElementById('Scroll-Second-remove');
    SecondAdd=document.getElementById('Scroll-Second-Add');
    SecondRemoveClickClick.addEventListener("click", ()=>{
    SecondAdd.classList.toggle('First-Add-Remove');
    })
    var ThirdRemoveClickClick=document.getElementById('Scroll-Third-remove');
    ThirdAdd=document.getElementById('Scroll-Third-Add');
    ThirdRemoveClickClick.addEventListener("click", ()=>{
    ThirdAdd.classList.toggle('First-Add-Remove');
    })

// After remove button removed then repeat Add button added
    var FirstRemoveRepeatClick=document.getElementById('Scroll-First-remove');
    FirstRepeatRemove=document.getElementById('Scroll-First-remove');
    FirstRemoveRepeatClick.addEventListener("click", ()=>{
    FirstRepeatRemove.classList.toggle('First-Remove-Add');
    })
    var SecondRemoveRepeatClick=document.getElementById('Scroll-Second-remove');
    SecondRepeatRemove=document.getElementById('Scroll-Second-remove');
    SecondRemoveRepeatClick.addEventListener("click", ()=>{
    SecondRepeatRemove.classList.toggle('First-Remove-Add');
    })
    var ThirdRemoveRepeatClick=document.getElementById('Scroll-Third-remove');
    ThirdRepeatRemove=document.getElementById('Scroll-Third-remove');
    ThirdRemoveRepeatClick.addEventListener("click", ()=>{
    ThirdRepeatRemove.classList.toggle('First-Remove-Add');
    })
   


    // Display Linck Script
    var FirstAddClicked=document.getElementById('Scroll-first-Add');
    FirstLinksShow=document.getElementById('Clicked-One');
    FirstAddClicked.addEventListener("click", ()=>{
        FirstLinksShow.classList.toggle('Show-First-Box-Clicked');
    })
    var FirstRemoveClicked=document.getElementById('Scroll-First-remove');
    FirstLinksRemoved=document.getElementById('Clicked-One');
    FirstRemoveClicked.addEventListener("click", ()=>{
        FirstLinksRemoved.classList.toggle('Show-First-Box-Clicked');
    })

    var SecondAddClicked=document.getElementById('Scroll-Second-Add');
    SecondLinksShow=document.getElementById('Clicked-Two');
    SecondAddClicked.addEventListener("click", ()=>{
        SecondLinksShow.classList.toggle('Show-Second-Box-Clicked');
    })
    var SecondRemoveClicked=document.getElementById('Scroll-Second-remove');
    SecondLinksRemovedClick=document.getElementById('Clicked-Two');
    SecondRemoveClicked.addEventListener("click", ()=>{
        SecondLinksRemovedClick.classList.toggle('Show-Second-Box-Clicked');
    })

    var ThirdAddClicked=document.getElementById('Scroll-Third-Add');
    ThirdLinksShow=document.getElementById('Clicked-Three');
    ThirdAddClicked.addEventListener("click", ()=>{
        ThirdLinksShow.classList.toggle('Show-Third-Box-Clicked');
    })
    var ThirdRemoveClicked=document.getElementById('Scroll-Third-remove');
    ThirdLinksRemovedClick=document.getElementById('Clicked-Three');
    ThirdRemoveClicked.addEventListener("click", ()=>{
        ThirdLinksRemovedClick.classList.toggle('Show-Third-Box-Clicked');
    })
     

    
        var rotateClick = document.getElementById('switch-Items-rotate');
        var rotateMove = document.getElementById('switch-Items-rotate');
        rotateClick.addEventListener("click",()=>{
            rotateMove.classList.toggle('rotate-moved')
        })
        var rotateClicks = document.getElementById('switch-Items-rotate');
        var CategoryMoved = document.getElementById('Category-Move');
        rotateClicks.addEventListener("click",()=>{
            CategoryMoved.classList.toggle('Category-List-First-Move')
        })