const Contact = (props) => {
  return (
    <div
      className="row p-md-2 mb-2"
      style={{ borderRadius: "20px", border: "1px solid #555" }}
    >
      <div className="col-2 pt-2">
        <img
          src={`https://ui-avatars.com/api/?name=${props.info.name}`}
          style={{ width: "80%", borderRadius: "20px" }}
        />
      </div>
      <div className="col-6 text-warning pt-0">
        <span className="h4">{props.info.name}</span>
        <br />
        <div className="text-white-50">
          {props.info.email}
          <br />
          {props.info.phone}
        </div>
      </div>
      <div className="col-1 pt-2">
        <button className="btn btn-primary btn-sm m-1">
          <i className="bi bi-star-fill"></i>
        </button>
      </div>
      <div className="col-3 pt-2">
        <button className="btn btn-info btn-sm m-1">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-danger btn-sm m-1">
          <i className="bi bi-trash-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Contact;
