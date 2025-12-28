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

  const [selectedContact, SetSelectedContact] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdateClick = (contact) => {
    SetSelectedContact(contact);
    setIsUpdating(true);
  };

  const handleToggleFavourite = (id) => {
    setContactList((prev) => {
      return prev.map((a) =>
        a.id === id ? { ...a, isFavourite: !a.isFavourite } : a
      );
    });
  };

  const handleUpdateContact = (contact) => {
    setContactList((prev) => {
      return prev.map((a) =>
        a.id === contact.id
          ? {
              ...a,
              name: contact.name,
              phone: contact.phone,
              email: contact.email,
            }
          : a
      );
    });

    SetSelectedContact(null);
    setIsUpdating(false);

    return { status: "success", msg: "Contact was updated successfully!" };
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

  const handleRemoveAllContact = () => {
    setContactList([]);
  };

  const handleCancelButton = () => {
    SetSelectedContact(null);
    setIsUpdating(false);
  };

  return (
    <div className="container" style={{ minHeight: "85vh" }}>
      <div className="py-3">
        <div className="row py-2">
          <div className="col-6">Add Contact</div>
          <div className="col-6">
            <button
              className="btn btn-danger form-control"
              onClick={handleRemoveAllContact}
            >
              Remove all
            </button>
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <AddContact
              addContact={handleAddContact}
              isUpdating={isUpdating}
              selectedContact={selectedContact}
              cancelButton={handleCancelButton}
              updateContact={handleUpdateContact}
            />
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <FavouriteContacts
              contacts={contactList.filter((u) => u.isFavourite === true)}
              toggleFavourites={handleToggleFavourite}
              deleteContact={handleDeleteContact}
              updateClick={handleUpdateClick}
            />
          </div>
        </div>
        <div className="py-2">
          <div className="col-12">
            <GeneralContacts
              contacts={contactList.filter((u) => u.isFavourite === false)}
              toggleFavourites={handleToggleFavourite}
              deleteContact={handleDeleteContact}
              updateClick={handleUpdateClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactIndex;
