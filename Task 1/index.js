document.querySelector(".image__container").addEventListener("mouseenter" , handle_enter);
document.querySelector(".image__container").addEventListener("mouseleave" , handle_leave);
document.querySelector(".submit").addEventListener("mouseenter" , button_color);

function handle_enter()
{
    let img = document.querySelector(".image__container");
    img.style.opacity = "0.5";
}

function handle_leave()
{
    let img = document.querySelector(".image__container");
    img.style.opacity = "1";
}


function button_color()
{
    let btn = document.querySelector(".submit");
    // btn.style.color = "red !important";
    btn.style.setProperty("background-Color", "green", "important");
    btn.style.setProperty("font-weight", "bold");   
}

