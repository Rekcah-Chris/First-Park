var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");

var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");

var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");

var form_2_vehicle_details = document.querySelector(".form_2_vehicle_details");
var form_3_vehicle_details = document.querySelector(".form_3_vehicle_details");
var form_4_vehicle_details = document.querySelector(".form_4_vehicle_details");

const btn_done = document.getElementById("btn_done");
const modal_wrapper = document.getElementById(".modal_wrapper");
const shadow = document.getElementById(".shadow");


form_1_next_btn.addEventListener("click", function(){
    form_1.style.display = "none";
    form_2.style.display = "block";
    
    form_1_btns.style.display = "none";
    form_2_btns.style.display = "flex";

    form_2_vehicle_details.classList.add("active");
});

//debug error remove
form_2_back_btn.addEventListener("click", function(){
    form_1.style.display = "block";
    form_2.style.display = "none";
    
    form_1_btns.style.display = "flex";
    form_2_btns.style.display = "none";

    form_2_vehicle_details.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function(){
    form_2.style.display = "none";
    form_3.style.display = "block";

    form_2_btns.style.display = "none";
    form_3_btns.style.display = "flex";

    form_3_vehicle_details.classList.add("active");

});

//debug error remove
form_3_back_btn.addEventListener("click", function(){
    form_2.style.display = "block";
    form_3.style.display = "none";

    form_2_btns.style.display = "flex";
    form_3_btns.style.display = "none";

    form_3_vehicle_details.classList.remove("active");
});

form_3_next_btn.addEventListener("click", function(){
    form_3.style.display = "none";
    form_4.style.display = "block";

    form_3_btns.style.display = "none";
    form_4_btns.style.display = "flex";

    form_4_vehicle_details.classList.add("active");
});

//debug error remove
form_4_back_btn.addEventListener("click", function(){
    form_3.style.display = "block";
    form_4.style.display = "none";

    form_3_btns.style.display = "flex";
    form_4_btns.style.display = "none";

    form_4_vehicle_details.classList.remove("active");
});

btn_done.addEventListener("click", function(){
    modal_wrapper.classList.add("active");
});

shadow.addEventListener("click", function(){
    modal_wrapper.classList.remove("active");
});
