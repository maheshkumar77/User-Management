import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='nav h-9 w-full bg-blue-500 flex'>
    <p className='p1  text-2xl text-white font-thin'>
        Employee Data
    </p>
    <div className="pdiv flex float-end">
    <p className='p2'><Link to='/'>Home</Link></p>
    <p className='p2'>About</p>
    <p className='p2'>Contact</p>

    </div>
    
      
    </div>
  )
}

export default Navbar
