import { useForm } from "react-hook-form";


const Login = () => {
    const {register,handleSubmit}=useForm();
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <div className="text-center">
                <p className="text-2xl font-bold">Welcome Back</p>
            <p>Login with Profast</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="card-body">
                    
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" {...register("email")} />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password"{...register("password")} />

                        <div>
                            <a className="link link-hover">Forgot password?</a>
                            </div>

                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default Login;