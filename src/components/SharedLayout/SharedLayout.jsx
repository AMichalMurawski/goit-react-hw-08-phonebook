import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './SharedLayout.module.css';
import { UserMenu } from 'components/UseMenu/UserMenu';

export const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <div className={css.header__container}>
          <UserMenu />
          <h1 className={css.title}>Phonebook</h1>
          <nav className={css.nav}>
            <Link className={css.nav__link} to="/register">
              Register
            </Link>
            <Link className={css.nav__link} to="/login">
              Login
            </Link>
            <Link className={css.nav__link} to="/contacts">
              Contacts
            </Link>
          </nav>
        </div>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
