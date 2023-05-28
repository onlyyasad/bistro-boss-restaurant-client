import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import signinImg from "../../../assets/others/authentication2.png"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const {loginUser} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handlevalidateCaptcha = () =>{
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false);
        }
   
        else {
            setDisabled(true);
            alert("Captcha didn't match! Please try again.")
        }
    }
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const navigate = useNavigate();

    const handleLogin = (user) =>{
        const email = user.email;
        const password = user.password;
        loginUser(email, password)
        .then(result =>{
            const loggedInUser = result.user;
            console.log(loggedInUser)
            navigate(from, {replace: true})
        })
        .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div>

            </div>
            <div className="hero min-h-screen py-8 bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={signinImg} alt="" />
                    </div>
                    <div className="card border flex-shrink-0 w-full max-w-sm  bg-base-100">
                        <div className='card-body pb-0'>
                            <h3 className='text-center font-bold text-xl pb-4'>Sign In</h3>
                        </div>
                        <form className="card-body pt-0" onSubmit={handleSubmit((data) => handleLogin(data))}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register('email', { required: true })} className="input input-bordered" />
                                {errors.email && <p className='text-xs mt-2 text-red-500'>Email is required.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register('password', { required: true })} className="input input-bordered" />
                                {errors.password && <p className='text-xs mt-2 text-red-500'>Password is required.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={captchaRef} placeholder="Type here" className="input input-bordered" />
                                <p onClick={handlevalidateCaptcha} className={`btn btn-xs mt-4 normal-case ${!disabled? "btn-disabled" : ""}`}>Validate Captcha</p>
                                
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className={`btn bg-yellow-600 hover:bg-yellow-700 normal-case border-0 hover:border-0 ${disabled? "btn-disabled" : ""}`}>Sign In</button>
                            </div>
                        </form>

                        <div className='card-body pt-0 text-center'>
                            <h3>New here? <Link to="/registration" className='font-bold'>Create an Account!</Link></h3>
                            <h3>Or Sign up with</h3>
                            <div className='flex justify-center gap-4'>
                                <button className="btn btn-circle btn-sm btn-outline"><FaFacebookF /></button>
                                <button className="btn btn-circle btn-sm btn-outline"><FaGoogle /></button>
                                <button className="btn btn-circle btn-sm btn-outline"><FaGithub /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;