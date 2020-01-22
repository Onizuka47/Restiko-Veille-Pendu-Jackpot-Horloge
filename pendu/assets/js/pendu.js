$(".lettres").click(function ()
{       
var a = $(this).attr("value");

$("#user").html(a);//here the clicked value is showing in the div name user
console.log(a);//here the clicked value is showing in the console
});

