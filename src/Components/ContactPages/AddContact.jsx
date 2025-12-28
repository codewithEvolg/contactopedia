import { useState, useEffect, use } from "react";

const AddContact = (props) => {
  const [message, SetMessages] = useState({
    errorMessage: "",
    successMessage: "",
  });

  const [formData, SetFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (props.isUpdating && props.selectedContact) {
      SetFormData({
        name: props.selectedContact.name,
        email: props.selectedContact.email,
        phone: props.selectedContact.phone,
      });
    } else {
      SetFormData({
        name: "",
        email: "",
        phone: "",
      });
    }
  }, [props.isUpdating, props.selectedContact]);

  const handleFormInputChange = (e) => {
    const { name, value } = e.target;
    SetFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddContactForm = (formData) => {
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      // newsletter: formData.get("newsletter") === "on",
      // contactMethod: formData.get("contactMethod"),
      // interests: formData.getAll("interests[]"),
    };

    try {
      let response = undefined;

      if (props.isUpdating && props.selectedContact) {
        response = props.updateContact({
          id: props.selectedContact.id,
          isFavourite: props.selectedContact.isFavourite,
          ...contactData,
        });
      } else {
        response = props.addContact(contactData);
      }
      if (response.status === "success") {
        SetMessages({
          errorMessage: undefined,
          successMessage: response.msg,
        });
        SetFormData({ name: "", email: "", phone: "" });
      } else {
        SetMessages({
          errorMessage: response.msg,
          successMessage: undefined,
        });
      }
    } catch (error) {
      console.error("Error adding contact", error);
      SetMessages({
        errorMessage: "Error Encountered!",
        successMessage: undefined,
      });
    }
  };

  return (
    <div className="border col-12 text-white p-2">
      <form action={handleAddContactForm}>
        <div className="row p-2">
          <div className="col-12 text-white-50 text-center h5">
            {props.isUpdating ? "Edit Contact" : "Add Contact"}
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              name="name"
              placeholder="Name..."
              className="form-control form-control-sm"
              onChange={handleFormInputChange}
              value={formData.name}
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              name="email"
              placeholder="Email..."
              className="form-control form-control-sm"
              onChange={handleFormInputChange}
              value={formData.email}
            />
          </div>
          <div className="col-12 col-md-4 p-1">
            <input
              name="phone"
              placeholder="Phone..."
              className="form-control form-control-sm"
              onChange={handleFormInputChange}
              value={formData.phone}
            />
          </div>
          {/* <div className="col-12 p-1">
            <label>
              <input type="checkbox" name="newsletter" /> Subscribe to
              newsletter
            </label>
          </div> */}
          {/* <div className="col-12 p-1">
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
          </div> */}
          {/* <div className="col-12 p-1">
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
          </div> */}
          {message.successMessage && (
            <div className="col-12 text-center text-success">
              {message.successMessage}
            </div>
          )}
          {message.errorMessage && (
            <div className="col-12 text-center text-danger">
              {message.errorMessage}
            </div>
          )}
          <div className={`col-${props.isUpdating ? "6" : "12"}`}>
            <button
              className={`btn btn-${
                props.isUpdating ? "primary" : "success"
              } btn-sm form-control`}
            >
              {props.isUpdating ? "Update" : "Create Contact"}
            </button>
          </div>
          {props.isUpdating && (
            <div className="col-6">
              <button
                className="btn btn-danger btn-sm form-control"
                onClick={props.cancelButton}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddContact;
