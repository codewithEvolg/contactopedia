import logo from "../../images/react.png";

const Header = () => {
  return (
    <div>
      <br />
      <p className="py-2 pl-2" style={{ borderBottom: "1px solid #777" }}>
        <img src={logo} style={{ height: "35px", verticalAlign: "top" }} />
        <span className="h3 pt-4 m-2 text-white-50">Contactopedia</span>
      </p>
    </div>
  );
};

export default Header;
//export { Header };
