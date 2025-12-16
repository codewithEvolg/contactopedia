const AddContact = () => {
  const handleAddContactForm = (e) => {
    e.preventDefault(); //prevents the page from reloading
    const formData = new FormData(e.target); //an easier way to retrieve the form data
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      newsletter: formData.get("newsletter") === "on",
      contactMethod: formData.get("contactMethod"),
      interests: formData.getAll("interests[]"),
    };
    console.log(contactData);
  };
  return (
    <div className="border col-12 text-white p-2">
      <form action="" onSubmit={handleAddContactForm}>
        <div className="row p-2">
          <div className="col-12 text-white-50 text-center h5">Add Contact</div>
          <div className="col-12 col-md-4 p-1">
            <input
              name="name"
              placeholder="Name..."
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              name="email"
              placeholder="Email..."
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              name="phone"
              placeholder="Phone..."
              className="form-control form-control-sm"
            />
          </div>
          <div className="col-12 p-1">
            <label>
              <input type="checkbox" name="newsletter" /> Subscribe to
              newsletter
            </label>
          </div>
          <div className="col-12 p-1">
            Contact Method:
            <div>
              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  defaultChecked
                />{" "}
                Email
                <input type="radio" name="contactMethod" value="phone" /> Phone
                <input type="radio" name="contactMethod" value="none" /> None
              </label>
            </div>
          </div>
          <div className="col-12 p-1">
            Interests (Select any):
            <div>
              <label>
                <input type="checkbox" name="interests[]" value="sports" />{" "}
                Sports
              </label>{" "}
              <label>
                <input type="checkbox" name="interests[]" value="music" /> Music
              </label>{" "}
              <label>
                <input type="checkbox" name="interests[]" value="movies" />{" "}
                Movies
              </label>{" "}
              <label>
                <input type="checkbox" name="interests[]" value="travel" />{" "}
                Travel
              </label>
            </div>
          </div>
          <div className="col-12 text-center text-success">Success Message</div>
          <div className="col-12 text-center text-danger">Error Message</div>
          <div className="col-6">
            <button
              className="btn btn-primary btn-sm form-control"
              type="submit"
            >
              Create
            </button>
          </div>
          <div className="col-6">
            <button className="btn btn-danger btn-sm form-control">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
