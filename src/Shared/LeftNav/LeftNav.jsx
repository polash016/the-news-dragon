import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h4>All Caterogy:{categories.length}</h4>
            <div>
            {
                categories.map((category) => <p
                    key={category.id}>
                    <Link className='text-decoration-none text-dark mt-2' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
            }
            </div>
        </div>
    );
};

export default LeftNav;