import React from "react";

function CardTemp({label, value}){
    return (
      <div>
          <label>{label}</label>
          <span>{value}</span>
      </div>
    )
}

export default CardTemp;