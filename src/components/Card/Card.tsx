import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  link: string
}

const Card: React.FC<CardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="card card-style">
      <div className="card-body">
        <div className="row">
          <div className="col-10">
            <h5 className="card-title">{title}</h5>
            <p className="card-text mb-5">
              {description}
            </p>
          </div>
          <div className="col-2">
            {icon}
          </div>
        </div>
        <div className="d-grid gap-2">
          <Link
            to={link}
            className="btn btn-danger fw-semibold mt-2"
            role="button"
          >
            Atur sekarang
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card;