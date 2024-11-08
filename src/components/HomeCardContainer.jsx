import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

const HomeCardContainer = () => {
    const foodItems = [
        { name: 'Pizza', photo: 'https://plus.unsplash.com/premium_photo-1675103909152-4aa4efcb5598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '149' },
        { name: 'Burger', photo: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '89' },
        { name: 'Pasta', photo: 'https://plus.unsplash.com/premium_photo-1677000666761-ff476a65c8ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdGF8ZW58MHx8MHx8fDA%3D', price: '79' },
        { name: 'Salad', photo: 'https://images.unsplash.com/photo-1692973702024-b8102e1c2cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '49' },
        { name: 'Sushi', photo: 'https://plus.unsplash.com/premium_photo-1675453377179-22d446fe10ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '199' },
        { name: 'Dosa', photo: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '49' },
        { name: 'Idli', photo: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '39' },
        { name: 'Tacos', photo: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', price: '89' }
    ];

    const IndianFoodData = [
        {
            "name": "Paneer Butter Masala",
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GMD_WH9sl6HjJ4CObB9Lim-51zBji9n5KA&s",
            "price": 250
        },
        {
            "name": "Chicken Biryani",
            "photo": "https://images.unsplash.com/photo-1708184528306-f75a0a5118ee?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dg",
            "price": 300
        },
        {
            "name": "Masala Dosa",
            "photo": "https://static01.nyt.com/images/2015/01/28/dining/28KITCHEN1/28KITCHEN1-superJumbo.jpg",
            "price": 150
        },
        {
            "name": "Chole Bhature",
            "photo": "https://img-global.cpcdn.com/recipes/87c52cb9ca601252/680x482cq70/chole-bhature-recipe-main-photo.jpg",
            "price": 180
        }
    ];

    const SeeMoreBtn = [{ btn: "See More resipes" }];

    return (
        <>
            <div className="my-10">
                <div className="text-3xl font-semibold px-4">Our Famose</div>
                <div className="grid grid-cols-4 gap-4">
                    {foodItems.map((foodItem, idx) => (
                        <Card key={idx} {...foodItem} />
                    ))}
                </div>
            </div>

            <div className="my-10">
                <div className="text-3xl font-semibold px-4">Indian Dishes</div>
                <div className="grid grid-cols-4 gap-4">
                    {IndianFoodData.map((foodItem, idx) => (
                        <Card key={idx} {...foodItem} />
                    ))}
                </div>
            </div>

            <div className='w-full flex justify-center'>
                {SeeMoreBtn.map(btn => <button className="btn btn-primary mb-4"><Link to="/resipies">{btn.btn}</Link></button>)}
            </div>
        </>
    );
}

export default HomeCardContainer;
