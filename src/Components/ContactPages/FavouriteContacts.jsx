import Contact from "./Contact";

const FavouriteContacts = (props) => {
  return (
    <div
      className="col-12 p-2"
      style={{ borderRadius: "10px", backgroundColor: "#323637" }}
    >
      <div className="text-center text-white-50">Favourites</div>
      <div className="p-2">
        {props.contacts.map((contact, index) => (
          <Contact key={index} info={contact} />
        ))}
      </div>
    </div>
  );
};

export { FavouriteContacts };
