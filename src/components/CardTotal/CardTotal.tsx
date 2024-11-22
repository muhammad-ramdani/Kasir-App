import React from 'react';
import './CardTotal.css'

interface CardTotalProps {
    title: string;
    value: string;
}
const CardTotal: React.FC<CardTotalProps> = ({ title, value }) => {
    return (
        <div className="card card-total-card">
            <div className="card-body pb-0">
                <h2 className='card-total-title'>{title}</h2>
                <p className='desc-total'>{value}</p>
            </div>
        </div>
    )
}

export default CardTotal;