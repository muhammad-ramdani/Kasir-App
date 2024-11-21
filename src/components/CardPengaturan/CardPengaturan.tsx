import React from "react";
import { Link } from "react-router-dom";
import './CardPengaturan.css'

interface CardPengaturanProps {
    link: string;
    iconPengaturan: string;
    description: string;
}

const CardPengaturan: React.FC<CardPengaturanProps> = ({ link, iconPengaturan, description }) => {
    return (
        <Link to={link} className="text-decoration-none">
            <div className="card card-pengaturan">
                <div className="card-body">
                    <img src={iconPengaturan} alt="" className="icon-card-pengaturan"/>
                    <p className="desc-card-pengaturan">{description}</p>
                </div>
            </div>
        </Link>

    )
}

export default CardPengaturan;