import React from "react";

const ServiceCard = ({ service }) => {
  const { img, title, description } = service;
  return (
    <div className="col-span-12 w-full md:col-span-6 lg:col-span-4 mb-7 lg:mb-0">
      <div className="card w-auto bg-transparent border border-primary rounded-md">
        <img src={img} alt="car!" className="rounded-md rounded-b-none" />

        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0, 100)}...</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-primary bg-transparent rounded-md text-white hover:bg-primary hover:text-base-100">
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
