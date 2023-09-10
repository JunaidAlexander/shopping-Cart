document.addEventListener("DOMContentLoaded", function() {
  const cartButton = document.querySelector(".btn-primary");
  const sidebar = document.querySelector(".sidebar");
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const clearCartButton = document.getElementById("clear-cart");

  let cart = [];
  let total = 0;

  cartButton.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    updateCartUI();
  });

  addToCartButtons.forEach(button => {
    button.addEventListener("click", event => {
      const productId = event.target.dataset.productId;
      const selectedProduct = products.find(
        product => product.id === parseInt(productId)
      );
      if (selectedProduct) {
        cart.push(selectedProduct);
        total += selectedProduct.price;
        updateCartUI();
      }
    });
  });

  clearCartButton.addEventListener("click", () => {
    cart = [];
    total = 0;
    updateCartUI();
  });

  function updateCartUI() {
    cartItems.innerHTML = "";
    cart.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("cart-item");
      productDiv.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <div class="cart-item-details">
          <h6>${product.name}</h6>
          <p>Price: R ${product.price}</p>
        </div>
        <button class="remove-item btn btn-danger" data-product-id="${product.id}">Remove</button>
      `;
      cartItems.appendChild(productDiv);
    });
    cartTotal.textContent = `R ${total.toFixed(2)}`;

    // Attach event listeners to the "Remove" buttons
    const removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach(button => {
      button.addEventListener("click", event => {
        const productIdToRemove = event.target.dataset.productId;
        removeItemFromCart(productIdToRemove);
      });
    });
  }

  function removeItemFromCart(productIdToRemove) {
    const indexToRemove = cart.findIndex(
      product => product.id === parseInt(productIdToRemove)
    );
    if (indexToRemove !== -1) {
      total -= cart[indexToRemove].price;
      cart.splice(indexToRemove, 1);
      updateCartUI();
    }
  }

  const products = [
    {
      id: 1,
      name: "NEW Razer BlackShark V2 Pro Wireless Gaming Headset 2023 Edition",
      price: 400,
      imageUrl: "https://m.media-amazon.com/images/I/713FOOoJ-4L._AC_SX466_.jpg"
    },
    {
      id: 2,
      name:
        "AutoFull C3 Gaming Chair Office Chair PC Chair with Ergonomics Lumbar Support",
      price: 300,
      imageUrl:
        "https://m.media-amazon.com/images/I/71cnKUAixRL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      id: 3,
      name:
        "CORSAIR VIRTUOSO RGB WIRELESS XT Multiplatform Gaming Headset With Bluetooth - Dolby Atmos - Broadcast Quality Microphone - iCUE Compatible- PC, Mac, PS5, PS4, Nintendo Switch, Mobile - Black",
      price: 700,
      imageUrl:
        "https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo1Njg4NTY0MjUxMzM2NjE3OjE2OTQzNDQ1NTM6c3BfYXRmOjMwMDAwOTE4MDI3NzQwMjo6MDo6&url=%2FCORSAIR-VIRTUOSO-WIRELESS-High-Fidelity-Bluetooth%2Fdp%2FB09BXZKNDB%2Fref%3Dsr_1_2_sspa%3F_encoding%3DUTF8%26content-id%3Damzn1.sym.12129333-2117-4490-9c17-6d31baf0582a%26keywords%3Dgaming%2Bheadsets%26pd_rd_r%3Defa00a0f-2c2c-4293-b48a-38d61b6f74b0%26pd_rd_w%3DKOsFT%26pd_rd_wg%3D2LENM%26pf_rd_p%3D12129333-2117-4490-9c17-6d31baf0582a%26pf_rd_r%3DBRY9A3MB2TGJGHEAW6RJ%26qid%3D1694344553%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1"
    },
    {
      id: 4,
      name:
        "AutoFull C3 Gaming Chair Office Chair PC Chair with Ergonomics Lumbar Support",
      price: 300,
      imageUrl:
        "https://m.media-amazon.com/images/I/71cnKUAixRL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      id: 5,
      name:
        "AutoFull C3 Gaming Chair Office Chair PC Chair with Ergonomics Lumbar Support",
      price: 300,
      imageUrl:
        "https://m.media-amazon.com/images/I/71cnKUAixRL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
      id: 6,
      name:
        "AutoFull C3 Gaming Chair Office Chair PC Chair with Ergonomics Lumbar Support",
      price: 300,
      imageUrl:
        "https://m.media-amazon.com/images/I/71cnKUAixRL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
    }
  ];
});
