import "./Menu.css";
import { NavLink } from 'react-router-dom'

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			<NavLink to="/home">דף הבית</NavLink>
			<NavLink to="/trek-list">טרקים</NavLink>
			<NavLink to="/add-trek">הוספת טרק</NavLink>
		
        </div>
    );
}

export default Menu;
