// Write your Pizza Builder JavaScript in this file.


//function to add or remove topings

$(document).ready(function() {
    $(".crust").removeClass("crust-gluten-free");
    $(".sauce").removeClass("sauce-white");
    });
    
    //function to add or remove topings
    
    $(".btn-pepperonni").click(function(){ 
        $(".btn-pepperonni").toggleClass("active");
        $(".pep").toggle();
    });
    
    $(".btn-green-peppers").click(function(){ 
        $(".btn-green-peppers").toggleClass("active");
        $(".green-pepper").toggle();
    });
    
    $(".btn-mushrooms").click(function(){ 
        $(".btn-mushrooms").toggleClass("active");
        $(".mushroom").toggle();
    });
    
    $(".btn-sauce").click(function(){ 
        $(".btn-sauce").toggleClass("active");
        $(".sauce").toggleClass("sauce-white");
    });
    
    $(".btn-crust").click(function(){ 
        $(".btn-crust").toggleClass("active");
        $(".crust").toggleClass("crust-gluten-free");
    });
    
    
    
    