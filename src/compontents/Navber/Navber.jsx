import { NavLink } from 'react-router-dom';
import './Navber.css'
const Navber = () => {
    return (
        <div className='min-h-16 bg-red-100 flex justify-between items-center '>
            <div>
                <button className='btn text-2xl font-bold ml-7'>TEETH_MAN</button>
            </div>
            <div className='flex gap-5 text-green-950 text-lg font-semibold'>
                <NavLink to='/' className={({isActive}) =>isActive?'text-green-600':''}>Home</NavLink>
                <NavLink to='/allTreatment' className={({isActive}) =>isActive?'text-green-600':''}>All Treatment</NavLink>
                <NavLink to='/profile' className={({isActive}) =>isActive?'text-green-600':''}>Profile</NavLink>
                <NavLink to='/myApperment' className={({isActive}) =>isActive?'text-green-600':''}>MyApperment</NavLink>
                
            </div>
            <div>
                <button className='btn btn-primary mr-6'>Login</button>
            </div>
        </div>
    );
};

export default Navber;