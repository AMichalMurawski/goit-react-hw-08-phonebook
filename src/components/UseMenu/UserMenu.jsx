import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import icons from 'images/icons.svg';
import css from './UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunk';
import { useReducer } from 'react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  return isLoggedIn ? (
    <div className={css.user}>
      <p className={css.email}>{user.email}</p>
      <div className={css.log}>
        <svg
          className={css.iconLog}
          viewBox="0 0 30 30"
          onClick={() => dispatch(logOut())}
        >
          <use xlinkHref={icons + '#icon-logout'} width="30" height="30"></use>
        </svg>
        <p className={css.info}>Logout</p>
      </div>
    </div>
  ) : (
    <div className={css.user}>
      <div className={css.log}>
        <svg className={css.iconLog} viewBox="0 0 30 30">
          <use xlinkHref={icons + '#icon-login'} width="30" height="30"></use>
        </svg>
      </div>
      <div className={css.backdrop}>
        <div className={css.modal}>
          <NavLink className={css.btn} to="/login">
            Login
          </NavLink>
          <NavLink className={css.btn} to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};
