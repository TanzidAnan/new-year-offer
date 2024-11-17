import { NavLink } from 'react-router-dom';
import './Navber.css'
const Navber = () => {
    return (
        <div className='min-h-16 bg-red-300'>
            <div>
                <button>TEETH_MAN</button>
            </div>
            <div>
                <NavLink to='/' className={({isActive}) =>isActive?'text-green-600':''}>Home</NavLink>
                <NavLink to='/AllTreatment' className={({isActive}) =>isActive?'text-green-600':''}>All Treatment</NavLink>
                <NavLink to='/profile' className={({isActive}) =>isActive?'text-green-600':''}>My Apperments</NavLink>
                <NavLink>Profile</NavLink>
            </div>
            <div></div>
        </div>
    );
};

export default Navber;