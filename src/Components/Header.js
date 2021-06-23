import React from 'react';

function Header (props) {
    const name ="Danielle"
    const name2 ="Rodewald";
    const date = new Date();
    const hours= date.getHours();
    const minutes = date.getMinutes();

return(
    <>
    <div className="card-header"> 
<h1 className="card-header-title header">You have {props.numTodos} Tasks to do</h1>
  
   <h2>Hello {name} {name2} It is currently {hours % 12} : {minutes}</h2>
    </div>
    </>
)

}

export default Header;