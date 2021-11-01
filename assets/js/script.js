function selected_first(card) {
    //Encontrar seção que contém os pratos
    const selected = document.querySelector(".dishes");
    //console.log(selected);

    //O prato selecionado será algo dentro do menu de pratos que tenha sido selecionado
    const dish_selected = selected.querySelector(".selected");
    //console.log(dish_selected);

    //Prato selecionado (com seletor selected) deverá ter um seletor chamado "visible"
    const dish_check = selected.querySelector(".selected .visible");
    //console.log(dish_check);

    /* 
     * Se caso existir no seletor dishes (pratos) alguém com a classe selected ou visible,
     * devem ser removidas
     */
    if(dish_selected !== null && dish_check !== null){
        dish_selected.classList.remove("selected");
        dish_check.classList.remove("visible");
    }

    //O card é o this
    card.classList.add("selected");
    card.querySelector(".checkmark-circle").classList.add("visible");
    //console.log(card);
}

function selected_second(card) {
    //Encontrar seção que contém as bebidas
    const selected = document.querySelector(".drinks");
    //console.log(selected);

    //A bebida selecionada será algo dentro do menu de bebidas que tenha sido selecionada
    const drink_selected = selected.querySelector(".selected");
    //console.log(drink_selected);

    //A bebida selecionada (com seletor selected) deverá ter um seletor chamado "visible"
    const drink_check = selected.querySelector(".selected .visible");
    //console.log(drink_check);

    /* 
     * Se caso existir no seletor drinks (bebidas) alguém com a classe selected ou visible,
     * devem ser removidas
     */
    if(drink_selected !== null && drink_check !== null){
        drink_selected.classList.remove("selected");
        drink_check.classList.remove("visible");
    }
    
    //O card é o this
    card.classList.add("selected");
    card.querySelector(".checkmark-circle").classList.add("visible");
    //console.log(card);
}

function selected_third(card) {
    //Encontrar seção que contém as bebidas
    const selected = document.querySelector(".desserts");
    //console.log(selected);

    //A sobremesa selecionada será algo dentro do menu de sobremesas que tenha sido selecionada
    const dessert_selected = selected.querySelector(".selected");

    //A sobremesa selecionada (com seletor selected) deverá ter um seletor chamado "visible"
    const dessert_check = selected.querySelector(".selected .visible");

    /* 
     * Se caso existir no seletor desserts (sobremesas) alguém com a classe selected ou visible,
     * devem ser removidas
     */
    if(dessert_selected !== null && dessert_check !== null){
        dessert_selected.classList.remove("selected");
        dessert_check.classList.remove("visible");
    }
    
    //O card é o this
    card.classList.add("selected");
    card.querySelector(".checkmark-circle").classList.add("visible");
    //console.log(card); 
}

function enabled_button() {
    const selections = document.querySelectorAll(".selected");
    //selections[0].innerText[0];
    //console.log(selections);

    const selections_count = selections.length;
    
    if(selections_count === 3){
        //console.log(selections_count);
        const enabled_button = document.querySelector(".btn-bottom-bar");
        
        //console.log(enabled_button);

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

    //console.log(tile_first_product);
    //console.log(tile_second_product);
    //console.log(tile_third_product);

    const enabled_send_request = document.querySelector(".btn-bottom-bar-custom");
    //console.log(enabled_send_request);

    const name = prompt("Informe seu nome e sobrenome:");
    const address = prompt("Informe seu endereço:");

    if(enabled_send_request !== null && name !== null && address !== null){
        //alert("Enviar pedido!");

        let custom_message = "Olá, gostaria de fazer o pedido:" +"\n"+ "- Prato: " + tile_first_product +"\n"+ "- Bebida: " + tile_second_product +"\n"+ "- Sobremesa: " + tile_third_product +"\n"+ "Total: R$ " + total_price() +"\n\n"+ "Nome: " + name +"\n"+ "Endereço: " + address;
        //console.log(custom_message);

        open ("https://wa.me/" + phone_number + "?text=" + encodeURIComponent(custom_message));
        //window.location.href = "https://wa.me/5588997653298?text=Eu%20tenho%20interesse%20no%20seu%20carro%20à%20venda";
    }  
}

function send_request_auxiliary() {
    const confirm_order = document.querySelector(".confirm-order");
    const selections = document.querySelectorAll(".selected");
    //selections[0].innerText[0];
    //console.log(selections);

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

    let tile_first_product = title_product[0].innerText;
    let tile_second_product = title_product[1].innerText;
    let tile_third_product = title_product[2].innerText;

    // console.log(tile_first_product);
    // console.log(tile_second_product);
    // console.log(tile_third_product);

    first_product = confirm_order_items.querySelector(".first-product-item");
    first_product.innerHTML = tile_first_product;

    second_product = confirm_order_items.querySelector(".second-product-item");
    second_product.innerHTML = tile_second_product;

    third_product = confirm_order_items.querySelector(".third-product-item");
    third_product.innerHTML = tile_third_product;

    //console.log(first_product);
}

function replace_order_values() {
    const confirm_order = document.querySelector(".confirm-order");
    const confirm_order_items = confirm_order.querySelector(".confirm-order-items-value");

    const price_product = document.querySelectorAll(".selected .card-product-price");

    let price_first_product_custom = price_product[0].innerText.replace("R$ ","");
    let price_second_product_custom = price_product[1].innerText.replace("R$ ","");
    let price_third_product_custom = price_product[2].innerText.replace("R$ ","");

    let price_first_product = parseFloat(price_product[0].innerText.replace("R$ ","").replace(",","."));
    let price_second_product = parseFloat(price_product[1].innerText.replace("R$ ","").replace(",","."));
    let price_third_product = parseFloat(price_product[2].innerText.replace("R$ ","").replace(",","."));

    let total = (price_first_product + price_second_product + price_third_product).toFixed(2);

    let total_custom = "R$ " + total.replace(".", ",");

    // console.log(tile_first_product);
    // console.log(tile_second_product);
    // console.log(tile_third_product);

    first_product = confirm_order_items.querySelector(".first-product-item-value");
    first_product.innerHTML = price_first_product_custom;

    second_product = confirm_order_items.querySelector(".second-product-item-value");
    second_product.innerHTML = price_second_product_custom;

    third_product = confirm_order_items.querySelector(".third-product-item-value");
    third_product.innerHTML = price_third_product_custom;

    total_products = confirm_order_items.querySelector(".total-product-items-value");
    total_products.innerHTML = total_custom;

    //console.log(first_product);   
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

    //console.log(price_first_product);
    //console.log(price_second_product);
    //console.log(price_third_product);

    //console.log(total);

    return total;
}