function selected_first(card) {
    const selected = document.querySelector(".dishes");
    const dish_selected = selected.querySelector(".selected");
    const dish_check = selected.querySelector(".selected .visible");

    if(dish_selected !== null && dish_check !== null){
        dish_selected.classList.remove("selected");
        dish_check.classList.remove("visible");
    }

    card.classList.add("selected");
    card.querySelector(".checkmark-circle").classList.add("visible");
}

function selected_second(card) {
    const selected = document.querySelector(".drinks");
    const drink_selected = selected.querySelector(".selected");
    const drink_check = selected.querySelector(".selected .visible");

    if(drink_selected !== null && drink_check !== null){
        drink_selected.classList.remove("selected");
        drink_check.classList.remove("visible");
    }
    
    card.classList.add("selected");
    card.querySelector(".checkmark-circle").classList.add("visible");
}

function selected_third(card) {
    const selected = document.querySelector(".desserts");
    const dessert_selected = selected.querySelector(".selected");
    const dessert_check = selected.querySelector(".selected .visible");

    if(dessert_selected !== null && dessert_check !== null){
        dessert_selected.classList.remove("selected");
        dessert_check.classList.remove("visible");
    }
    
    card.classList.add("selected");
    card.querySelector(".checkmark-circle").classList.add("visible");
}

function enabled_button() {
    const selections = document.querySelectorAll(".selected");
    const selections_count = selections.length;
    
    if(selections_count === 3){
        const enabled_button = document.querySelector(".btn-bottom-bar");

        enabled_button.classList.add("btn-bottom-bar-custom");
        enabled_button.innerHTML = "Fechar pedido";
    }
}

function send_cancel() {
    const cancel_order = document.querySelector(".confirm-order");
    cancel_order.classList.remove("visibility");   
}

function send_request() {
    const title_product = document.querySelectorAll(".selected .card-product-title");
    const phone_number = "";

    let tile_first_product = title_product[0].innerText;
    let tile_second_product = title_product[1].innerText;
    let tile_third_product = title_product[2].innerText;

    const enabled_send_request = document.querySelector(".btn-bottom-bar-custom");
    const name = prompt("Informe seu nome e sobrenome:");
    const address = prompt("Informe seu endereço:");

    if(enabled_send_request !== null && name !== null && address !== null){
        let custom_message = "Olá, gostaria de fazer o pedido:" +"\n"+ "- Prato: " + tile_first_product +"\n"+ "- Bebida: " + tile_second_product +"\n"+ "- Sobremesa: " + tile_third_product +"\n"+ "Total: R$ " + total_price() +"\n\n"+ "Nome: " + name +"\n"+ "Endereço: " + address;

        open ("https://wa.me/" + phone_number + "?text=" + encodeURIComponent(custom_message));
    }  
}

function send_request_auxiliary() {
    const confirm_order = document.querySelector(".confirm-order");
    const selections = document.querySelectorAll(".selected");

    const selections_count = selections.length;
    
    if(selections_count === 3){
        confirm_order.classList.add("visibility");
    }

    replace_order_items();
    replace_order_values();
}

function replace_order_items() {
    const confirm_order = document.querySelector(".confirm-order");
    const confirm_order_items = confirm_order.querySelector(".confirm-order-items-name");

    const title_product = document.querySelectorAll(".selected .card-product-title");
    
    let tile_first_product = null;
    let tile_second_product = null;
    let tile_third_product = null;

    if(title_product[0] !== undefined){
        tile_first_product = title_product[0].innerText;
    }

    if(title_product[1] !== undefined){
        tile_second_product = title_product[1].innerText;
    }
   
    if(title_product[2] !== undefined){
        tile_third_product = title_product[2].innerText;
    }

    first_product = confirm_order_items.querySelector(".first-product-item");
    first_product.innerHTML = tile_first_product;

    second_product = confirm_order_items.querySelector(".second-product-item");
    second_product.innerHTML = tile_second_product;

    third_product = confirm_order_items.querySelector(".third-product-item");
    third_product.innerHTML = tile_third_product;
}

function replace_order_values() {
    const confirm_order = document.querySelector(".confirm-order");
    const confirm_order_items = confirm_order.querySelector(".confirm-order-items-value");

    const price_product = document.querySelectorAll(".selected .card-product-price");

    let price_first_product_custom = null;
    let price_second_product_custom = null;
    let price_third_product_custom = null;

    if(price_product[0] !== undefined){
        price_first_product_custom = price_product[0].innerText.replace("R$ ","");
    }

    if(price_product[1] !== undefined){
        price_second_product_custom = price_product[1].innerText.replace("R$ ","");
    }
   
    if(price_product[2] !== undefined){
        price_third_product_custom = price_product[2].innerText.replace("R$ ","");
    }

    let price_first_product = null;
    let price_second_product = null;
    let price_third_product = null;

    if(price_product[0] !== undefined){
        price_first_product = parseFloat(price_product[0].innerText.replace("R$ ","").replace(",","."));
    }

    if(price_product[1] !== undefined){
        price_second_product = parseFloat(price_product[1].innerText.replace("R$ ","").replace(",","."));
    }
   
    if(price_product[2] !== undefined){
        price_third_product = parseFloat(price_product[2].innerText.replace("R$ ","").replace(",","."));
    }

    let total = (price_first_product + price_second_product + price_third_product).toFixed(2);

    let total_custom = "R$ " + total.replace(".", ",");

    first_product = confirm_order_items.querySelector(".first-product-item-value");
    first_product.innerHTML = price_first_product_custom;

    second_product = confirm_order_items.querySelector(".second-product-item-value");
    second_product.innerHTML = price_second_product_custom;

    third_product = confirm_order_items.querySelector(".third-product-item-value");
    third_product.innerHTML = price_third_product_custom;

    total_products = confirm_order_items.querySelector(".total-product-items-value");
    total_products.innerHTML = total_custom;
}

function total_price() {
    const price_product = document.querySelectorAll(".selected .card-product-price");

    let price_first_product = null;
    let price_second_product = null;
    let price_third_product = null;

    if(price_product[0] !== undefined){
        price_first_product = parseFloat(price_product[0].innerText.replace("R$ ","").replace(",","."));
    }

    if(price_product[1] !== undefined){
        price_second_product = parseFloat(price_product[1].innerText.replace("R$ ","").replace(",","."));
    }
   
    if(price_product[2] !== undefined){
        price_third_product = parseFloat(price_product[2].innerText.replace("R$ ","").replace(",","."));
    }
  
    let total = (price_first_product + price_second_product + price_third_product).toFixed(2);

    return total;
}