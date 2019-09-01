function createCartDom(product) {
    return `
    <div class="cart-item" id="cart_${product}">
        ${document.getElementById("product_name_" + product).innerHTML}:  
        <span>  <button id="cart_item_remove_${product}" style="position: relative; float: right !important; border:none; background-color: white; color: rgb(70,70,70);">X</button></span>
        <b><span style="float: right;" id= "cart_count_${product}"></span></b>
    </div>
    `;
}

function createProduct(product) {
    return `
    <section style="background-color: white;width: 400px; height: 335px; margin: 10px; text-align: center; font-size: 30px;position: relative;">
        <div><img class="product-img" src=${products[product].img} alt="product-${product}"></div>
            <div>
                <h4 class="product-name" id="product_name_${product}">${products[product].title}</h4>
                <h4 class="product-price">${products[product].price}&#36</h4>
            </div>
            <br />
            <div class="product-details">${products[product].des}</div>
            <div class="button-box">
                <button type="button" id="${product}" class="add-btn">Add to Cart</button>
                <button type="button" id="details_btn_${product}" class="details-btn">Details</button>
                <button type="button" id="increment_${product}" class="increment-btn">+</button>
                <div id="same_product_${product}" class="no-of-same-product">0</div>
                <button type="button" id="decrement_${product}" class="decrement-btn">-</button>
            </div>
    </section>
    `;
}