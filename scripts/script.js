// main spot to call functions
function jquery_functions(data){
    $( document ).ready(function() {
        first_dropdown();
        create_sec_array();
        radio_check();
        example_form(data);
    });
}

// these functions deal with the dropdown boxes
var first_select = document.getElementById("first_dropdown");
var second_select = document.getElementById("second_dropdown");
var options = ["Choose", "We are here!", "We are happy!", "We are hyped!", "We are healthy!", "We are hungry!", "We are human!", "We are holy!", "We are halu!", "We are humorous!", "We are happening!"];
var phrase_num = 0;
function first_dropdown (){
    // makes the first dropdown box
    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = phrase_num;
        el.id = opt;
        first_select.appendChild(el);
        phrase_num++;
    }
    

}

// this gets first array, makes a copy, and removes the user selected item
function create_sec_array(){
    $("#first_dropdown").change( function() {
        var copy_options = [] 
        for (i = 0; i < options.length; i++) {
            copy_options[i] = options[i];
        }
        copy_options.splice(($("#first_dropdown").val()),1);
        sec_dropdown(copy_options);
        $("#sec_dropdown").show();
    });
}

// this creates new dropdown with new array
function sec_dropdown(copy_array) {
    $("#second_dropdown").empty();
    for(var i = 0; i < copy_array.length; i++) {
        var opt = copy_array[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = phrase_num;
        el.name = opt;
        second_select.appendChild(el);
        phrase_num++;
    }
}

// this function deals with the radio buttons and checkboxes
function radio_check() {

    $('input[type="radio"]').click(function() {
        // this unchecks all the checkboxes
        var get= document.getElementsByName('day');
        for(var i= 0; i<get.length; i++){
        get[i].checked= false;}
        
        // this shows and hides the correct checkboxes
        var inputValue = $(this).attr("value"); 
        var targetBox = $("." + inputValue); 
        $(".ft").not(targetBox).hide(); 
        $(targetBox).show(); 
    });
}

// loads data into the form
function example_form(data) {
    $("#wah").on( "click", function() {
        $("#fname").val(data[0]);
        $("#lname").val(data[1]);
        $("#userEmail").val(data[2]);
        $("#userPsw").val(data[3]);
        $("#wahExplain").val(data[4]);
    });
}

// this function gives the user their certificate
// getting the dropdown input to display was a huge pain for some reason, but I got
function give_certificate() {
    $("#certificate").empty();
    var main_phrase = $("#first_dropdown").find(":selected").attr("id");
    var html = `<h4>This is your certificate!<h4>\
        <p>Welcome to the Cult, ${$("#fname").val()} ${$("#lname").val()}!</p>\
        <p>Your main group phrase: ${main_phrase}</p>\
        <p>Make sure not to forget it!</p>`;
  $("#certificate").append(html);
}