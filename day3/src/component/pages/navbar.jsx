import React from 'react'
import { Link } from 'react-router-dom'
 
const NavBar=()=>{
return(
<nav style={StyleBar.NavBar}>
    <ul style={StyleBar.NavBar}>
        <li><Link to='/Home' state={StyleBar.Link}>Home</Link>  </li>
        <li><Link to='/about' state={StyleBar.Link}>About </Link>  </li>
        <li><Link to='/contact' state={StyleBar.Link}> Contact</Link>  </li>

    </ul>
</nav>
)
};

const StyleBar={
    NavBar:{
       display:"flex",
       justifyContent:"center",
      background:"brown",
       padding:"5px",
       gap:"20px",
       margin:"0",
       

    },
    navLinks:{
        display:"flex",
        gap:"30px",
    },
    Link:{
        color:"black",
        textDecoration:"none",
    }


}
export default NavBar;