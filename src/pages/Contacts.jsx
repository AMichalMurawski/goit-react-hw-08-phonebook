const { ContactForm } = require('components/ContactForm/ContactForm');
const { ContactList } = require('components/ContactList/ContactList');
const { Filter } = require('components/Filter/Filter');

const Contacts = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        width: '60%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ContactForm />
      <h2
        style={{
          fontWeight: 700,
          paddingTop: 40,
          paddingBottom: 40,
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
