import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";


const Register = () => {
    const {createUser}=useAuth();
    const { register, handleSubmit, formState: { errors }, } = useForm();


    const onSubmit = (data) => {
        
        createUser(data.email,data.password)
        .then(result=>{
            const user=result.user;
        })
        .catch(error=>console.error(error))
    }
    return (
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'> 

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    <div className="text-center">
                        <p className="text-2xl font-bold">Create an Account</p>
                        <p>Register with Profast</p>
                    </div>

                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" {...register("email", { required: true })} />
                        {errors.email?.type === "required" && (
                            <p role="alert" className="text-red-900">Email is required</p>
                        )}

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password"{...register("password", { required: true })} />
                        {errors.password?.type === "required" && (
                            <p role="alert" className="text-red-900">Password is required</p>
                        )}

                          <button className="btn btn-primary mt-4  bg-[#03373D]">Register</button>

                    </fieldset>
                    <p>Already Have an Account? <Link  to='/login'><span className="text-green-500 underline">Login</span></Link></p>
                 
                </div>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;