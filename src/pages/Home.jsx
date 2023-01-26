import css from './Home.module.css';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook app</title>
      </Helmet>
      <section className="section">
        <div className={css.welcome}>
          <h2 className={css.title}>Welcome in Phonebook app</h2>
          <p className={css.paragraph}>
            Please log in or register to use the phonebook.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
