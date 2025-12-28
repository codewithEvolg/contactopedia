import { useState } from "react";
import { FavouriteContacts } from "./FavouriteContacts";
import GeneralContacts from "./GeneralContacts";
import AddContact from "./AddContact";
import Contact from "./Contact";

const ContactIndex = () => {
  const [contactList, setContactList] = useState([
    {
      id: 1,
      name: "Ben Parker",
      phone: "123-456-7890",
      email: "ben@gmail.com",
      isFavourite: true,
    },
    {
      id: 2,
      name: "Kathy Patrick",
      phone: "111-222-3333",
      email: "kathy@gmail.com",
      isFavourite: true,
    },
    {
      id: 3,
      name: "Paul Show",
      phone: "000-222-4444",
      email: "paul@gmail.com",
      isFavourite: false,
    },
  ]);

  const handleToggleFavourite = (id) => {
    setContactList((prev) => {
      return prev.map((a) =>
        a.id === id ? { ...a, isFavourite: !a.isFavourite } : a
      );
    });
  };

  const handleAddContact = (newContact) => {
    //validation
    const duplicateRecord = contactList.filter((x) => {
      if (x.name == newContact.name && x.phone == newContact.phone) {
        return true;
      }
    });

    if (duplicateRecord.length > 0) {
      return { status: "error", msg: "Duplicate record!" };
    }

    const newFinalContact = {
      ...newContact,
      id: contactList.length + 1,
      isFavourite: false,
    };
    setContactList((prev) => {
      return [...prev, newFinalContact];
    });

    return { status: "success", msg: "Contact was added successfully!" };
  };

  const handleDeleteContact = (id) => {
    setContactList((prev) => {
      return prev.filter((a) => a.id !== id);
    });
  };

  return (
    <div className="container" style={{ minHeight: "85vh" }}>
      <div className="py-3">
        <div className="row py-2">
          <div className="col-6">Add Contact</div>
          <div className="col-6">Remove Contact</div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <AddContact addContact={handleAddContact} />
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <FavouriteContacts
              contacts={contactList.filter((u) => u.isFavourite === true)}
              toggleFavourites={handleToggleFavourite}
              deleteContact={handleDeleteContact}
            />
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <GeneralContacts
              contacts={contactList.filter((u) => u.isFavourite === false)}
              toggleFavourites={handleToggleFavourite}
              deleteContact={handleDeleteContact}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactIndex;
