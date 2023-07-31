var test = document.querySelectorAll(".buttom_cart");
// console.log(test);

test.forEach(function(button, index) {
    button.addEventListener("click", function(event) {
        {
            var btnItem = event.target
            var product = btnItem.parentElement
                // var productImg = product.querySelector("img").src
            var productName = product.querySelector("span").innerText;
            // var productPrice = product.querySelector(".home-product-item__price-current").innerText
            console.log(productName);
        }
    })
});