import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'


const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />

        </div>

    )
}


function Header() {
    return (
        <div className='header'>
            <h1>Fast React Hot Pizza Co.</h1>
        </div>
    )
}


function Menu() {

    const pizzas = pizzaData;
    const numPizza = pizzas.length;

    return (
        <div className='menu'>
            <h2>Our Menu</h2>
            {numPizza > 0 ? (

                <>
                <p>
                    Authentic Italic cuisine. 6 creative dishes to choose from. All from our Stone oven, all organic, all delicious.
                </p>


                    <ul className='pizzas'>
                        {pizzaData.map(pizza => <Pizza pizzaObject={pizza} key={pizza.name} />)}
                    </ul>
                </>
            ) : (
                <p>We're still working on our menu. Please come back later :)</p>
            )}
        </div>
    )
}



function Pizza({ pizzaObject }) {

    // console.log(pizzaObject)
    // {
    //     if (pizzaObject.soldOut) return null
    // }

    return (
        <li className={pizzaObject.soldOut ? 'pizza sold-out' : 'pizza'}>
            <img src={pizzaObject.photoName} alt={pizzaObject.name} />
            <div>
                <h2>{pizzaObject.name}</h2>
                <p>{pizzaObject.ingredients}</p>
                <span >{pizzaObject.soldOut ? 'SOLD OUT' : pizzaObject.price}</span>
            </div>
        </li>
    )
}


function Footer() {

    const hour = new Date().getHours();
    const openHour = 12;
    const CloseHour = 22;
    const isOpen = hour >= openHour && hour <= CloseHour;

    return (
        <footer className='footer'>
            {isOpen ? <Order CloseHour={CloseHour} openHour={openHour} isOpen={isOpen} /> : (
                <p>We're happy to welcome you between {openHour}:00 and {CloseHour}:00 </p>
                )
            }
        </footer>
    )
}

function Order({CloseHour, openHour}) {

    return (
        <div className='order'>
            <p>
                We're open from {openHour}:00 to {CloseHour}:00. Come vist us or order online.
            </p>
            <button className='btn'>Order</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)