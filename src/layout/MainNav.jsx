import { NavLink } from "react-router-dom";

const MainNav = ({currentUser}) => {
  useEffect(() => {
    console.log(currentUser);
  }, []) 

    return (
      <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/auth-entities">Authenticated Entities</NavLink></li>
        {currentUser && <li>{currentUser.username}</li>}
        <li>
        {currentUser.username !== null ? <NavLink to="logout">Logout</NavLink> : <NavLink to="login">Login</NavLink>}
        </li>
      </ul>
    )
  }

export default MainNav;