const orders = [
    {
        id: 1,
        pizza: "Hawaii",
        extra: "-",
        ital: "Pepsi Zero",
        ar: 2000,
        kep: "https://www.allrecipes.com/thmb/v1Xi2wtebK1sZwSJitdV4MGKl1c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hawaiian-pizza-ddmfs-3x2-132-450eff04ad924d9a9eae98ca44e3f988.jpg"

    },

    {
        id: 2,
        pizza: "Songoku",
        extra: "-",
        ital: "Coca-Cola Zero",
        ar: 1750,
        kep: "https://royaletteremvac.hu/wp-content/uploads/2021/07/Songoku_r.jpg"

    },

    {
        id: 3,
        pizza: "Meat Lover's",
        extra: "Spicy Pepper",
        ital: "Fiji Water",
        ar: 2500,
        kep: "https://halo-pg.com/wp-content/uploads/2021/10/Ultimate-Stuffed-Meatlovers-Pizza-1.jpg"

    },

    {
        id: 4,
        pizza: "Spicy",
        extra: "",
        ital: "Sprite",
        ar: 1950,
        kep: "https://images.pexels.com/photos/9957551/pexels-photo-9957551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

    },

    {
        id: 5,
        pizza: "Korfu",
        extra: "Olive",
        ital: "Pepsi",
        ar: 2340,
        kep: "https://lacorte.hu/wp53/wp-content/uploads/2020/04/pizza-scaled.jpg"

    },

    {
        id: 6,
        pizza: "Bolognese",
        extra: "Smoked Cheese",
        ital: "-",
        ar: 2200,
        kep: "https://static.streetkitchen.hu/test/uploads/2022/05/bolognais-pizza-3-1618x855.jpg"

    },
];

const result = document.getElementById("result");

window.addEventListener("load", () => {

    let output = "";

    orders.map((pizza) => {

        output += `
        
            <div class='order'>
                <div>
                    <img src='${pizza.kep}' alt='${pizza.pizza}' >
                </div>
                <h3>${pizza.pizza} pizza</h3>
                <hr>
                <h4>Ár: ${pizza.ar} Ft</h4>
                <p>Extra: ${pizza.extra}</p>
                <p>Ital: ${pizza.ital}</p>
            </div>
        
        `;
    })

    result.innerHTML = output;

})