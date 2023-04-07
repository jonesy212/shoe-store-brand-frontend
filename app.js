const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 199,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 219,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 189,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 107,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let chosenProduct = products[0];

let currentProductImg = document.querySelector(".productImg");
let currentProductTitle = document.querySelector(".productTitle");
let currentProductPrice = document.querySelector(".productPrice");
let currentProductColors = document.querySelectorAll(".color");
let currentProductSizes = document.querySelectorAll(".size");
let checkoutOrder = document.querySelector(".payButton");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the chose product
    chosenProduct = products[index];

    //change text of currentProductSizes
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;

    //assign new colors
    currentProductColors.forEach((shoeColor, index) => {
      shoeColor.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

//assign shoe img to shoe color
currentProductColors.forEach((shoeStyle, index) => {
  shoeStyle.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
  if ("click" == true) {
    productButton.style.backgroundColor = "black";
    productButton.style.color = "white";
  }
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
