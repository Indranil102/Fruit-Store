import {FaLeaf} from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="container">
      {/** Logo sec */}
      <div>
        <p className="text-primary">Fruit</p>
        <p className="text-secondary">Store</p>
        <FaLeaf className="text-green-500"/>
      </div>
    </nav>
  )
}

export default Navbar
