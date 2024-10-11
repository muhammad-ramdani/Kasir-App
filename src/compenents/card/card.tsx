<<<<<<< HEAD


function Card() {
  return (
    <div>card</div>
=======
import React from 'react';
import './Card.css'

interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const Card: React.FC<CardProps> = ({ title, description, icon }) => {
  return (
    <div className="card">
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
          <a
            className="btn btn-danger fw-semibold mt-2"
            href="#"
            role="button"
          >
            Atur sekarang
          </a>
        </div>
      </div>
    </div>
>>>>>>> 14c19952b928ef39a760334216472b04fe3a331d
  )
}

export default Card