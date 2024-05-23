import React from 'react';
import ProductCard from './ProductCard';
import './App.css';

const products = [
    {
        name: 'Nike Air Jorden 2',
        photo: 'https://images5.monotote.com/assets/images/static/aHR0cHM6Ly9zdGF0aWMubmlrZS5jb20vYS9pbWFnZXMvdF9QRFBfMTI4MF92MS91XzEyNmFiMzU2LTQ0ZDgtNGEwNi04OWI0LWZjZGNjOGRmMDI0NSxjX3NjYWxlLGZsX3JlbGF0aXZlLHdfMS4wLGhfMS4wLGZsX2xheWVyX2FwcGx5L2U4NjdhM2FhLWI2OWUtNDBmZC04MjQwLWZiNmYxMWJmYWYwYy9haXItam9yZGFuLTItcmV0cm8tbG93LWJsYWNrLXZhcnNpdHktcmVkLXdvbWVucy1zaG9lcy1QUmQxQkgucG5nIzY2ZWUwOGY3NjAyNDRhYjhmNjBiODcyOWNhYmIxMTVlMmRkM2NhNDkwNmQ0ZjA4OA==?q=70&w=450&h=450&v=2.2.0-45735858',
        price: '$100',
        mfg: 'Style: HF4983-252',
        remarks: 'Mens Shoes'
    },
    {
        name: 'Nike Air Jordan 5 Retro',
        photo: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f662a6e7-127b-4e11-a75f-937ca6e6fd05/air-jordan-5-retro-big-kids-shoes-Q7w8vv.png',
        price: '$200',
        mfg: 'Style: HF4983-252',
        remarks: 'Kids Shoes'
    },
    {
        name: 'Nike Air Jordan 1 Low SE "Wave"',
        photo: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/00b95d0e-94c6-4094-83e8-d14ec34252f7/air-jordan-1-low-se-wave-womens-shoes-7t9402.png',
        price: '$300',
        mfg: 'Style: HF4983-252',
        remarks: 'Womens Shoes'
    }
];

const App = () => {
    return (
        <div className="app">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default App;
