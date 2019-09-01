function idToIndex(s) {
    let i = s.length - 1;
    let index = 0, multiplier = 1;
    while (!isNaN(s[i]) && i >= 0) {
        index += (multiplier * Number(s[i]));
        multiplier *= 10;
        i--;
    }
    return index;
}

function removeFromCart(index) {
    add_btn[index].style.display = "block";
    same_product[index].style.display = "none";
    increment_btn[index].style.display = "none";
    decrement_btn[index].style.display = "none";
    document.getElementById("cart_count_" + index).innerHTML = same_product_counter[index];
    document.getElementById("cart_" + index).style.display = "none";
    same_product[index].innerHTML = 0;
    same_product_counter[index] = 0;
    same_product_json = JSON.stringify(same_product_counter);
    localStorage.same_product_json = same_product_json;
    counter--;
    localStorage.counter = counter;
    cart_counter.innerHTML = counter;
}

function addButtonClick() {
    let index = Number(this.id);
    add_btn[index].style.display = "none";
    document.getElementById("cart_" + index).style.display = "block";
    same_product[index].style.display = "block";
    increment_btn[index].style.display = "block";
    decrement_btn[index].style.display = "block";
    same_product[index].innerHTML = 1;
    same_product_counter[index] = 1;
    same_product_json = JSON.stringify(same_product_counter);
    localStorage.same_product_json = same_product_json;
    document.getElementById("cart_count_" + index).innerHTML = same_product_counter[index];
    counter++;
    localStorage.counter = counter;
    cart_counter.innerHTML = counter;
}
function detailsButtonClick() {
    //alert(document.getElementById("details_modal").id);
    document.getElementById("details_modal").style.display = "block";
}
function incrementButtonClick() {
    let index = idToIndex(this.id);
    same_product_counter[index]++;
    same_product[index].innerHTML = same_product_counter[index];
    same_product_json = JSON.stringify(same_product_counter);
    localStorage.same_product_json = same_product_json;
    document.getElementById("cart_count_" + index).innerHTML = same_product_counter[index];
    counter++;
    localStorage.counter = counter;
    cart_counter.innerHTML = counter;
}
function decrementButtonClick() {
    let index = idToIndex(this.id);
    if (same_product_counter[index] > 1) {
        same_product_counter[index]--;
        same_product_json = JSON.stringify(same_product_counter);
        localStorage.same_product_json = same_product_json;
        document.getElementById("cart_count_" + index).innerHTML = same_product_counter[index];
        same_product[index].innerHTML = same_product_counter[index];
        counter--;
        localStorage.counter = counter;
        cart_counter.innerHTML = counter;
    }
    else if (same_product_counter[index] === 1) {
        removeFromCart(index);
    }
}
function removeButtonClick() {
    let index = idToIndex(this.id);
    counter -= (same_product_counter[index] - 1);
    localStorage.counter = counter;
    removeFromCart(index);
}

function closeButtonClick() {
    document.getElementById("details_modal").style.display = "none";
}