// function tabmenu(id) {
//     var img = document.getElementById("img");
//     img.src = "img/" + id + ".png";
//     document.querySelectorAll(".active").forEach(function(button) {
//         button.classList.remove("active");
//     });

//     var button = document.getElementById(id);
//     button.classList.add("active");
//     button.addEventListener("mouseenter", function() {
//         document.querySelectorAll("p").forEach(function(p) {
//             p.classList.remove("active");
//         });
//         button.classList.add("active");
//         img.src = "img/" + id + ".png";
//     });
// }
//     var firstP = document.querySelector(".buttons p");
//     if (firstP) {
//         firstP.classList.add("active");
//     }

$(function() {
    $(".img img").hide();
        $(".img img[data-src='1']").show(); 

    $(".button button").on("click", function() {
        var data_src = $(this).data("src"); 
        $(".img img").hide(); 
        $(".img img[data-src='" + data_src + "']").show();
        $(".button button[data-src='1']").addClass("active"); 
        $(".button button").removeClass("active");
        $(this).addClass("active");
        var $activeImg = $(".img img[data-src='" + data_src + "']");
        
        
    });
    
});