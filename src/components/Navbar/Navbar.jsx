import {FaLeaf} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="container">
      {/** Logo sec */}
      <div>
        <p className="text-primary">Fruit</p>
        <p>Store</p>
        <p> Buy </p>
        <FaLeaf/>
      </div>
    </nav>
  )
}

export default Navbar
