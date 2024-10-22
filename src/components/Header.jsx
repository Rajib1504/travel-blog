import profile from "../assets/imges/profile.png";
const Header = () => {
  return (
    <div>
      <h1 className="text-6xl bg-blue-300">tailwind:</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
