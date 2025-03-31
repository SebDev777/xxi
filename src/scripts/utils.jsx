import React from 'react';

export const CardUtils = ({list}) => {
    return list.map(item => (
        <div class="card hover-anim" key={item.name}>
            <h3 class="gradient-text">{item.name}</h3>
            <p>{item.description}</p>
        </div>
    ))
}

export const InventosUtils = ({list}) => {
    return (
        list.map(item => (
            <li key={item.title}><span class="gradient-text">{item.title}:</span> {item.description}</li>
        ))
    );
}