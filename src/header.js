import logo from "./logoP.png";

export default function Header() {
  return (
    <header className="head">
      <img src={logo} alt="logo" width={100} />
      <h2>The Recipie Book</h2>
      <img id="image" src={logo} alt="logo" width={100} />
    </header>
  );
}
