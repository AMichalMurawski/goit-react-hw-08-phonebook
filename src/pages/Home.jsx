const { Helmet } = require('react-helmet');

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Phonebook app</title>
      </Helmet>
      <h2>Welcome in Phonebook app</h2>
      <p>Please log in or register to use the phonebook.</p>
    </>
  );
};

export default Home;
