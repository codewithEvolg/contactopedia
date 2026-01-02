import getRandomUser from "../Utility/api";

const AddRandomContact = (props) => {
  return (
    <button
      onClick={props.handleAddRandomContactClick}
      className="btn btn-success form-control"
    >
      Add Random Contact
    </button>
  );
};

export default AddRandomContact;
