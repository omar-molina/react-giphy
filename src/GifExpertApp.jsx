import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
//import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Daemon Slayer']);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        //setCategories([ ...categories, newCategory])
        setCategories(categories => [newCategory, ...categories])
    }



    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onCategory={onAddCategory}
            />

            {
                categories.map((category) => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
