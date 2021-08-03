const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

let koreanMenu = menu.filter(items => items.category == "Korea");
let japanMenu = menu.filter(items => items.category == "Japan");
let chinaMenu = menu.filter(items => items.category == "China");
const btncontainer = document.querySelector(".btn-container");
const section = document.querySelector(".section-center");
const koreanFoods = document.getElementsByClassName("Korea");
const japanFoods = document.getElementsByClassName("Japan");
const chinaFoods = document.getElementsByClassName("China");
/************************************************************************************************/

let categorieNames = [];
categorieNames.push("ALL");

/************************************************************************************************/

for (let i = 0; i < menu.length; i++) {
  if (!categorieNames.includes(menu[i].category)) {
    categorieNames.push(menu[i].category);
  }
}

/************************************************************************************************/

for (let j = 0; j < categorieNames.length; j++) {
  let buttonDom = document.createElement("button");
  buttonDom.classList.add("btn", "btn-outline-dark", "btn-item");
  buttonDom.id = `${categorieNames[j]}btn`;
  buttonDom.innerHTML = `${categorieNames[j]}`;
  btncontainer.appendChild(buttonDom);
}
/************************************************************************************************/

for (let k=0; k<menu.length; k++) {
  let colonDivDom = document.createElement("div");
  colonDivDom.classList.add("menu-items", "col-lg-6", "col-sm-12" , `${menu[k].category}`);
  
  let photoDom = document.createElement("img");
  photoDom.src=`${menu[k].img}`;
  photoDom.alt=`${menu[k].title}`
  photoDom.classList.add("photo");

  let menuInfodom = document.createElement("div");
  menuInfodom.classList.add("menu-info");

  let menuTitledom = document.createElement("div");
  menuTitledom.classList.add("menu-title");

  let itemTitleDom = document.createElement("h4");
  itemTitleDom.innerHTML=`${menu[k].title}`;

  let priceDom = document.createElement("h4");
  priceDom.innerHTML=`${menu[k].price}`
  priceDom.classList.add("price");

  let menuTextDom = document.createElement("div");
  menuTextDom.classList.add("menu-text");

  let descTextDom = document.createElement("p");
  descTextDom.innerHTML=`${menu[k].desc}`;

  section.appendChild(colonDivDom);
  colonDivDom.appendChild(photoDom);
  colonDivDom.appendChild(menuInfodom);
  menuInfodom.appendChild(menuTitledom);
  menuTitledom.appendChild(itemTitleDom);
  menuTitledom.appendChild(priceDom);
  menuInfodom.appendChild(menuTextDom);
  menuTextDom.appendChild(descTextDom);
}
/************************************************************************************************/

const koreaBtn = document.querySelector("#Koreabtn");
const japanBtn= document.querySelector("#Japanbtn");
const chinaBtn = document.querySelector("#Chinabtn");
const allBtn = document.querySelector("#ALLbtn");
const allFoods = document.getElementsByClassName("menu-items");
/************************************************************************************************/

function removednone(classes) {
  if (classes.contains("dnone")) {
    classes.remove("dnone");
  }

}

/************************************************************************************************/

koreaBtn.addEventListener("click" , function(){
  for(let i=0; i<allFoods.length; i++) {
    let classes = allFoods[i].classList;
    if (!classes.contains("Korea")) {
      allFoods[i].classList.add("dnone");
    }
    else {
      removednone(classes);
    }
    // else {
    //   if(classes.contains("dnone")) {
    //     allFoods[i].classList.remove("dnone");
    //   }
    // }
  }
})



japanBtn.addEventListener("click" , function(){
  for(let i=0; i<allFoods.length; i++) {
    let classes = allFoods[i].classList;
    if (!classes.contains("Japan")) {
      allFoods[i].classList.add("dnone");
    }
    else {
      removednone(classes);
    }
  }
})



chinaBtn.addEventListener("click" , function(){
  for(let i=0; i<allFoods.length; i++) {
    let classes = allFoods[i].classList;
    if (!classes.contains("China")) {
      allFoods[i].classList.add("dnone");
    }
    else {
      removednone(classes);
    }
  }
})


allBtn.addEventListener("click" , function(){
  for(let i=0; i<allFoods.length; i++) {
    let classes = allFoods[i].classList;
    removednone(classes);
    }
  }
)
/************************************************************************************************/








