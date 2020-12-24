import { NavLink } from 'react-router-dom';
import s from './Navigations.module.css';

export default function Navigations() {
  return (
    <nav>
      <NavLink className={s.link} activeClassName={s.activeLink} to="/" exact>
        Home
      </NavLink>
      <NavLink className={s.link} activeClassName={s.activeLink} to="/movies">
        SearchMovie
      </NavLink>
    </nav>
  );
}
