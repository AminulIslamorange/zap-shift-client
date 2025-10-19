import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";


const Login = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();


    const onSubmit = (data) => console.log(data)
    return (
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
            <div className="text-center">
                <p className="text-2xl font-bold">Welcome Back</p>
                <p>Login with Profast</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">

                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" {...register("email", { required: true })} />
                         {errors.email?.type === "required" && (
                            <p role="alert" className="text-red-900">Email is required</p>
                        )}

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password"{...register("password", { required: true })} />
                        {errors.password?.type === "required" && (
                            <p role="alert"className="text-red-900">Password is required</p>
                        )}

                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>

                          <button className="btn btn-neutral mt-4 bg-[#03373D]">Login</button>
                    </fieldset>
                     <p>New Hare?Create an Account <Link  to='/register'><span className="text-green-500 underline">Register</span></Link></p>
                  
                </div>
            </form>
           <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;