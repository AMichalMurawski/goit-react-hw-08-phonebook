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
        </div>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};