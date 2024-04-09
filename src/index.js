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
        soldOut: false,
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


function Header(){
    return(
        <div className='header'>
            <h1>Fast React Hot Pizza Co.</h1>
        </div>
    )
}
function Footer(){
    
    const hour = new Date().getHours();
    const openHour = 12;
    const CloseHour = 22;
    const isOpen= hour >= openHour && hour <=  CloseHour;
    // console.log(isOpen)
    return(
        <div className='footer'>
            <footer>{new Date().toLocaleTimeString()} We're Currently Open</footer>
        </div>
    )
}

function Menu(porps){
    return(
        <div className='menu'>
            <h2>Our Menu</h2>
            <Pizza
             name="Pizza Spinaci"
             ingredients="Tomato, mozarella, spinach, and ricotta cheese"     
             photoName="pizzas/spinaci.jpg"
             price={10}
            />
            <Pizza
             name="Pizza Funghi"
             ingredients="Tomato, mozarella, mushrooms, and onion"     
             photoName="pizzas/funghi.jpg"
             price={12}
            />
            
        </div>
    )
}

function Pizza(props) {
    console.log(props)
    return (
        <div className='pizza'>
            <img src={props.photoName} alt={props.name} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.ingredients}</p>
                <span>{props.price}$</span>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)