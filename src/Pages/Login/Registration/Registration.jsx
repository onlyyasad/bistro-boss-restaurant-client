import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import signUpImg from "../../../assets/others/authentication2.png"
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';


const Registration = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const { createUser, updateUserData, googleLogin, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = (user) => {
        const email = user.email;
        const password = user.password;
        const name = user.name;
        const photo = user.photo;
        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                updateUserData(newUser, name, photo)
                    .then(() => {
                        const saveUser = { name: name, email: newUser.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset()
                                    alert("Sign Up Successfull! Now please Login.")
                                    logOutUser()
                                    navigate("/login")
                                }
                            })

                    })
                    .catch(error => console.log(error.message))
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user)
                const saveUser = { name: user.displayName, email: user.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate("/")

                    })


            })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <div className="hero min-h-screen py-8 bg-base-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className='w-full' src={signUpImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border bg-base-100">
                        <div className='card-body pb-0'>
                            <h3 className='text-center font-bold text-xl pb-4'>Sign Up</h3>
                        </div>
                        <form className="card-body pt-0" onSubmit={handleSubmit((data) => handleSignUp(data))}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" {...register('name', { required: true })} className="input input-bordered" />
                                {errors.name && <p className='text-xs mt-2 text-red-500'>Name is required.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Your Name" {...register('photo', { required: true })} className="input input-bordered" />
                                {errors.photo && <p className='text-xs mt-2 text-red-500'>Photo URL is required.</p>}
                            </div>
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
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-yellow-600 hover:bg-yellow-700 normal-case border-0 hover:border-0">Sign Up</button>
                            </div>
                        </form>

                        <div className='card-body pt-0 text-center'>
                            <h3>Already have an account? <Link to="/login" className='font-bold'>Go to Sign In</Link></h3>
                            <h3>Or Sign up with</h3>
                            <div className='flex justify-center gap-4'>
                                <button className="btn btn-circle btn-sm btn-outline"><FaFacebookF /></button>
                                <button onClick={handleGoogleLogin} className="btn btn-circle btn-sm btn-outline"><FaGoogle /></button>
                                <button className="btn btn-circle btn-sm btn-outline"><FaGithub /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;