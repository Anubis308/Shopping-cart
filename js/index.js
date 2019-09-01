let counter = 0;
let cart_counter = document.getElementById("cart_counter");

let cancelBtn = document.getElementById("cancel_btn");


let add_btn = [], increment_btn = [], decrement_btn = [], same_product_counter = [], details_btn = [], same_product = [], cart_item_remove_btn = [];

let same_product_json;
let same_product_json_parse = [];

for (let i = 0; i < noOfProduct; i++) {
    document.getElementById("product_list").innerHTML += createProduct(i);
    document.getElementById("customer_cart").innerHTML += createCartDom(i);
}


for (let i = 0; i < noOfProduct; i++) {
    add_btn[i] = document.getElementById(i);
    same_product[i] = document.getElementById("same_product_" + i);
    increment_btn[i] = document.getElementById("increment_" + i);
    decrement_btn[i] = document.getElementById("decrement_" + i);
    details_btn[i] = document.getElementById("details_btn_" + i);
    cart_item_remove_btn[i] = document.getElementById("cart_item_remove_" + i);

    add_btn[i].addEventListener("click", addButtonClick);
    details_btn[i].addEventListener("click", detailsButtonClick);
    increment_btn[i].addEventListener("click", incrementButtonClick);
    decrement_btn[i].addEventListener("click", decrementButtonClick);
    cart_item_remove_btn[i].addEventListener("click", removeButtonClick);
}
cancelBtn.addEventListener("click", closeButtonClick);

//localStorage.same_product_json = same_product_json;
if (localStorage.counter > 0) {
    counter = localStorage.counter;
    cart_counter.innerHTML = counter;
    same_product_json = localStorage.same_product_json;
    same_product_json_parse = JSON.parse(same_product_json);
    for (let i = 0; i < noOfProduct; i++) {
        same_product_counter[i] = same_product_json_parse[i];
        if (same_product_counter[i] === 0) {
            document.getElementById("cart_" + i).style.display = "none";
        }
        else {
            document.getElementById("cart_" + i).style.display = "block";
            document.getElementById("cart_count_" + i).innerHTML = same_product_counter[i];
            add_btn[i].style.display = "none";;
            same_product[i].style.display = "block";
            increment_btn[i].style.display = "block";
            decrement_btn[i].style.display = "block";
            same_product[i].innerHTML = same_product_counter[i];
        }
    }
}
else {
    for (let i = 0; i < noOfProduct; i++) {
        same_product_counter[i] = 0;
        document.getElementById("cart_" + i).style.display = "none";
    }
    same_product_json = JSON.stringify(same_product_counter);
    localStorage.same_product_json = same_product_json;
}