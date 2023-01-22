import css from './LoginModal.module.css';
import icons from 'images/icons.svg';

export const LoginModal = () => {
  return (
    <div className={css.login}>
      <svg className={css.iconLogin} viewBox="0 0 30 30">
        <use xlinkHref={icons + '#icon-login'} width="30" height="30"></use>
      </svg>
      <div className={css.backdrop}>
        <div className={css.modal}>
          <button className={css.btn} type="button">
            Login
          </button>
          <button className={css.btn} type="button">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
