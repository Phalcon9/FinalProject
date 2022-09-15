// import './Signup.css'

import { useState } from "react";
import { useForm } from 'react-hook-form'


const Signup = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)
    console.log(watch('Email'));

    // const [email, setEmail] = useState()
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [password, setPassword] = useState('')

    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto my-24 min-w-min brightness-100">

            <form className='' onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className='form-group mb-6'>
                    <h2 className=' text-custom3  text-4xl tracking-tight md:tracking-wide '>Signup</h2>
                    <div className=''>
                        <label className=' text-custom3'>Email</label>
                        <div className=''>
                            <input
                                className='inputPrimary'
                                {...register('Email', { required: true })}
                                type='Email'
                                required
                            />
                        </div>
                        {errors.Email?.type === 'required' && 'Email is required'}
                    </div>

                    <div className=''>
                        <label className=' text-custom3'>First Name</label>
                        <div className=''>
                            <input
                                className='inputPrimary'
                                {...register('FirstName', { required: true })}
                                type='Text'
                                required
                            />
                        </div>
                        {errors.FirstName?.type === 'required' && 'First Name is required'}
                    </div>
                    <div className=''>
                        <label className=' text-custom3'>Last Name</label>
                        <div className=''>
                            <input
                                className='  inputPrimary'
                                {...register('LastName', { required: true })}
                                type='Text'
                                aria-required
                            />
                        </div>
                        {errors.LastName?.type === 'required' && 'Last Name is required'}
                    </div>
                    <div className=''>
                        <label className=' text-custom3'>Password</label>
                        <div className=''>
                            <input
                                className='inputPrimary'
                                type='Password'
                                {...register('password', { required: true })}
                                required
                            />
                        </div>
                        {errors.password?.type === 'required' && 'Password is required'}
                    </div>
                    <div className=''>
                        <label className=' text-custom3'>Confirm Password</label>
                        <div className=''>
                            <input
                                className='inputPrimary'
                                type='Password'
                                {...register('confirmpassword', { required: true })}
                                required
                            />
                        </div>
                        {errors.confirmpassword?.type === 'required' && 'Confirm password please'}
                    </div>
                    <button className="btn-primary" >
                        Get Started
                    </button>
                </div>

            </form>
        </div>

    );
}

export default Signup;