import css from './LogoutModal.module.css';
import icons from 'images/icons.svg';

export const LogoutModal = () => {
  return (
    <div className={css.user}>
      <p className={css.email}>email adress</p>
      <div className={css.logout}>
        <svg className={css.iconLogout} viewBox="0 0 30 30">
          <use xlinkHref={icons + '#icon-logout'} width="30" height="30"></use>
        </svg>
        <p className={css.info}>Logout</p>
      </div>
    </div>
  );
};
