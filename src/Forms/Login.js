// import './Signup.css'
import loginImg from './form1.jpg'
import { useForm } from 'react-hook-form'

const Login = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' alt='ddd' src={loginImg} />
            </div>

            <div className='bg-gray-800 flex flex-col justify-center roun'>

                <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded=lg' onSubmit={handleSubmit(onSubmit)} noValidate>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>User Name</label>
                        <input
                            {...register("username", { required: true })}
                            className='inputPrimary'
                            type='text' />
                        {errors.username?.type === 'required' && 'Username is required'}
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input
                            {...register('password', { required: true })}
                            className='inputPrimary'
                            type='text'
                        />
                        {errors.password?.type === 'required' && 'Password is required'}
                    </div>
                    <div className='divRemember'>
                        <p className='flex items-center'><input className='mr-2' type='checkbox' /> Remember me </p>
                        <p>Forgot Password</p>
                    </div>
                    <button className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40'>Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default Login;