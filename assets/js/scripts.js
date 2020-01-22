$(document).ready(function(){
    //afficher boutton creer et retour restiko
    $("#showRestiko").click(function(){
      $("#bouttonRCR").show();
      $("#bouttonChoix").hide();
      $("#templateRestiko").show();
    });
});

    //afficher boutton creer et retour veille
$(document).ready(function(){
    $("#showVeille").click(function(){
        $("#bouttonRCV").show();
        $("#bouttonChoix").hide();
        $("#templateVeille").show();
    });
});

$(document).ready(function(){
    //retour retour restiko
    $("#retourRCR").click(function(){
        $("#bouttonRCR").hide();
        $("#bouttonChoix").show();
        $("#templateRestiko").hide();
    });
});

$(document).ready(function(){
    //boutton retour veilles
    $("#retourRCV").click(function(){
        $("#bouttonRCV").hide();
        $("#bouttonChoix").show();
        $("#templateVeille").hide();
    });
});

$(document).ready(function(){
    //afficher formReille
    $("#creerRCV").click(function(){
        $("#bouttonRCV").hide();
        $("#formVeille").show();
        $("#templateVeille").hide();
    });
});

$(document).ready(function(){
    //afficher formRestiko
    $("#creerRCR").click(function(){
        $("#bouttonRCR").hide();
        $("#formRestiko").show();
        $("#templateRestiko").hide();
    });

});

$(document).ready(function(){
    //retourformVeille
    $("#btnRetourFormVeille").click(function(){
        $("#formVeille").hide();
        $("#bouttonRCV").show();
        $("#templateVeille").show();
    })
});


$(document).ready(function(){
    //retourformRestiko
    $("#btnRetourFormRestiko").click(function(){
        $("#formRestiko").hide();
        $("#bouttonRCR").show();
        $("#templateRestiko").show();
    })
});

//clickEyeRestiko
function showRestiko(obj){
    $(".resumeRestiko").hide();
    

    var resumeR = $(obj).closest(".border").find(".resumeRestiko");
    

    
    if(resumeR.css("display")=="none"){
        var iconEye = $(obj).closest(".border").find(".iconEye");
        var iconEye22 = $(obj).closest(".border").find(".iconEye22");
        resumeR.show();
        $(iconEye).hide();
        $(iconEye22).show();
    
    }
    else{
        resumeR.hide();

    }
}

function hideRestiko(obj){
    var resumeR = $(obj).closest(".border").find(".resumeRestiko");
    resumeR.hide();

    if(resumeR.css("display")=="none"){
        var iconEye = $(obj).closest(".border").find(".iconEye");
        var iconEye22 = $(obj).closest(".border").find(".iconEye22");

        $(iconEye).show();
        $(iconEye22).hide();
    }

}

//clickEyeVeille
function showVeille(obj){
    $(".resumeVeille").hide();

    var resumeV = $(obj).closest(".border").find(".resumeVeille");


    if(resumeV.css("display")=="none"){
        var iconEye1 = $(obj).closest(".border").find(".iconEye1");
        var iconEye12 = $(obj).closest(".border").find(".iconEye12");
        resumeV.show();
        $(iconEye1).hide();
        $(iconEye12).show();
    
    }
    else{
        resumeV.hide();
    }
   
}

function hideVeille(obj){
    var resumeR = $(obj).closest(".border").find(".resumeVeille");
    resumeR.hide();

    if(resumeR.css("display")=="none"){
        var iconEye1 = $(obj).closest(".border").find(".iconEye1");
        var iconEye12 = $(obj).closest(".border").find(".iconEye12");
        $(iconEye1).show();
        $(iconEye12).hide();
    }

}

//pagination



