
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
const ProFastLogo = () => {
    return (
       <Link to='/'> 
        <div className='flex'>
            <img src={logo} alt="" />
            <p className='text-3xl font-bold mt-6'>ProFast</p>
        </div></Link>
    );
};

export default ProFastLogo;