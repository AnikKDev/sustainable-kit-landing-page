import logo from "../assets/images/logo.png";
const Header = () => {
  return (
    <div className="navbar justify-center bg-base-100">
      <img className="w-36" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
