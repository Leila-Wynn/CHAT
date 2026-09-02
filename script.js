const categoryButtons = document.querySelectorAll(".category-button");
const categoryTitle = document.getElementById("categoryTitle");
const categoryItems = document.getElementById("categoryItems");


const menuData = {

    breakfast: {
        title: "Breakfast",

        items: [
            {
                name: "Breakfast Item",
                price: "$0.00"
            },

            {
                name: "Breakfast Item",
                price: "$0.00"
            },

            {
                name: "Breakfast Item",
                price: "$0.00"
            }
        ]
    },


    coffee: {
        title: "Coffee",

        items: [
            {
                name: "Iced Coffee",
                price: "$0.00"
            },

            {
                name: "Latte",
                price: "$0.00"
            },

            {
                name: "Coffee Special",
                price: "$0.00"
            }
        ]
    },


    tea: {
        title: "Tea & More",

        items: [
            {
                name: "Hot Chocolate",
                price: "$0.00"
            },

            {
                name: "Tea",
                price: "$0.00"
            },

            {
                name: "Apple Cider",
                price: "$0.00"
            }
        ]
    },


    fruit: {
        title: "Fruit & Light",

        items: [
            {
                name: "Fruit Item",
                price: "$0.00"
            },

            {
                name: "Light Snack",
                price: "$0.00"
            },

            {
                name: "Fresh Favorite",
                price: "$0.00"
            }
        ]
    }

};


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory = button.dataset.category;

        const data = menuData[selectedCategory];


        /* Remove current selected state */

        categoryButtons.forEach(categoryButton => {

            categoryButton.classList.remove("active");

            categoryButton.setAttribute(
                "aria-selected",
                "false"
            );

        });


        /* Add selected state */

        button.classList.add("active");

        button.setAttribute(
            "aria-selected",
            "true"
        );


        /* Change title */

        categoryTitle.textContent = data.title;


        /* Build items */

        categoryItems.innerHTML = "";


        data.items.forEach(item => {

            const card = document.createElement("article");

            card.className = "mini-item";


            card.innerHTML = `

                <div
                    class="mini-image"
                    aria-hidden="true"
                ></div>

                <h4>${item.name}</h4>

                <p>${item.price}</p>

            `;


            categoryItems.appendChild(card);

        });

    });

});