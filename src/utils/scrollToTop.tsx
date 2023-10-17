// ContactList.js

function ContactListHeader() {
  return <div>Contact List Header</div>;
}

function ContactListBody() {
  return <div>Contact List Body</div>;
}

function ContactListFooter() {
  return <div>Contact List Footer</div>;
}

function ContactList() {
  return (
    <div>
      <ContactListHeader />
      <ContactListBody />
      <ContactListFooter />
    </div>
  );
}

ContactList.ContactListHeader = ContactListHeader;
ContactList.ContactListBody = ContactListBody;
ContactList.ContactListFooter = ContactListFooter;

export default ContactList;
