function drpdwn() {
    var x = document.getElementById("dd");

    if(x.style.display=="none"){
    (x.style.display="block");
    }

    else{
        (x.style.display="none")
    }
}

function addition() {
    let add1 = parseInt(document.getElementById("num1").value);
    let add2 = parseInt(document.getElementById("num2").value);

   add = add1 + add2;

   document.getElementById("result").innerHTML = "Result is." + add ;
}

function subtraction() {
    let sub1 = parseInt(document.getElementById("num1").value);
    let sub2 = parseInt(document.getElementById("num2").value);

    sub = sub1 - sub2;

    document.getElementById("result").innerHTML= "Result is ." + sub ;
}

function multiplication() {
    let mult1 = document.getElementById("num1").value;
    let mult2 = document.getElementById("num2").value;

    mult = mult1 * mult2 ;

    document.getElementById("result").innerHTML = "Result is ." + mult;
}

function division() {
    let div1 = document.getElementById("num1").value;
    let div2 = document.getElementById("num2").value;

    div = div1 % div2 ;
    document.getElementById("result").innerHTML = "Result is ." + div ;
}
 

function allClear() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("result").innerHTML = "";
}


$(document).ready(function() {
    $("#Add").click(function(){
        add();
    });
    $("#Substract").click(function() {
        subtract();
    });
    $("#Divide").click(function() {
        div();
    });
    $("#Multiply").click(function() {
        mult();
    });
    $("#AllClear").click(function() {
        ac();
    });

});

function add() {
    var no1 = parseInt($("#txtNo1").val());
    var no2 = parseInt($("#txtNo2").val());

    var result = no1 + no2;
    $("#results").html(result);
    console.log(result);
}

function subtract() {
    var no1 = Number($("#txtNo1").val());
    var no2 = Number($("#txtNo2").val());

    var result = no1 - no2;
    $("#results").html(result);
    console.log(result);
}

function div() {
    var no1 = Number($("#txtNo1").val());
    var no2 = Number($("#txtNo2").val());

    var result = no1 % no2;
    $("#results").html(result);
}

function mult() {
    var no1 = Number($("#txtNo1").val());
    var no2 = Number($("#txtNo2").val());

    var result = no1 * no2;
    $("#results").html(result);
}

function ac() {
    ($("#txtNo1").val(""));
    ($("#txtNo2").val(""));

    $("#results").html("");
}


$(document).ready(function() {
    $("#btn-1").click(function() {
        $("#sub-btn").toggle();
        $("#btn-2").toggle();
        $("#btn-3").toggle();
    });

    $("#sub-btn").click(function() {
        $("#sub-para").toggle();
    });

    $("#btn-2").click(function() {
        $("#para-2").toggle();
    });

    $("#btn-3").click(function() {
        $("#para-3").toggle();
    });

    $("#btn-1").click(function() {
        $("#sub-para").hide();
        $("#para-2").hide();
        $("#para-3").hide();
    });
});




    


