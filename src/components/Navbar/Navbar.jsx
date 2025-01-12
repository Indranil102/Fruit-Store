import {FaLeaf} from "react-icons/fa";

const NavbarMenu =[
  {
    id:1,
    title:"Home",
    link:"/",
  },
  {
    id:2,
    title:"Products",
    link:"#",
  },
  {
    id:3,
    title:"About",
    link:"#",
  },
  {
    id:4,
    title:"Shop",
    link:"#",
  },
  {
    id:5,
    title:"Contacts",
    link:"#",
  },
]
const Navbar = () => {
  return (
    <nav >

      <div className="container flex justify-between items-center py-4 md:pt-4">
      {/** Logo sec */}
      <div className="text-2xl flex items-center gap-2 font-bold uppercase">
        <p className="text-primary">Fruit</p>
        <p className="text-secondary">Store</p>
        <FaLeaf className="text-green-500"/>
      </div>
       <div className=" block ">
           <ul className="flex  md:flex-row  items-center gap-2 text-gray-600">
            {
              NavbarMenu.map((menu)=>(
                <li key={menu.id} >
                  <a href={menu.link}
                  className="inline-block py-1 px-3 hover:text-primary hover:underline hover:shadow-[0_3px_0_-1px]_#ef4444] font-semibold  transition-all duration-300
                  "
                    >{menu.title}</a>
                </li>
              ))
            }
            <button>
              
            </button>
           </ul>
       </div>
      </div>
    </nav>
  )
}

export default Navbar
