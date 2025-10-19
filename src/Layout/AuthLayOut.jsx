import { Outlet } from "react-router-dom";
import authImage from '../assets/authImage.png'
import ProFastLogo from "../Pages/Shared/ProFastLogo/ProFastLogo";


const AuthLayOut = () => {
    return (
        <div className="bg-base-200 p-4">
            <ProFastLogo></ProFastLogo>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                    <img
                        src={authImage}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayOut;