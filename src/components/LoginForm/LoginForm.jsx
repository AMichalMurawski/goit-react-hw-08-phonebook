import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authThunk';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Email
        <input className={css.input} type="text" name="email" required />
      </label>
      <label className={css.label}>
        Password
        <input className={css.input} type="password" name="password" required />
      </label>
      <button className={css.button} type="submit">
        Login
      </button>
    </form>
  );
};
