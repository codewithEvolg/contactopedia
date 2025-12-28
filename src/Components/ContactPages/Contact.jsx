const Contact = (props) => {
  return (
    <div
      className="row p-md-2 mb-2"
      style={{ borderRadius: "20px", border: "1px solid #555" }}
    >
      <div className="col-2 pt-2">
        <img
          src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
          style={{ width: "80%", borderRadius: "20px" }}
        />
      </div>
      <div className="col-6 text-warning pt-0">
        <span className="h4">{props.contact.name}</span>
        <br />
        <div className="text-white-50">
          {props.contact.email}
          <br />
          {props.contact.phone}
        </div>
      </div>
      <div className="col-1 pt-2">
        <button
          className="btn btn-primary btn-sm m-1"
          onClick={() => props.toggleFavourites(props.contact.id)}
        >
          <i
            className={`bi ${
              props.contact.isFavourite ? "bi-star-fill" : "bi-star"
            }`}
          ></i>
        </button>
      </div>
      <div className="col-3 pt-2">
        <button
          className="btn btn-info btn-sm m-1"
          onClick={() => props.updateContact(props.contact)}
        >
          <i className="bi bi-pencil-square"></i>
        </button>
        <button
          className="btn btn-danger btn-sm m-1"
          onClick={() => props.deleteContact(props.contact.id)}
        >
          <i className="bi bi-trash-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Contact;
