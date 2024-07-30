import { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../hooks/useLogin';

export default function LoginComponent() {
    const {login} = useLogin()
    const [data,setData] = useState({
        Username:"",
        Password:""
    });
    const SignIn = async(e) => {
        e.preventDefault()
        await login(data)
    }
  return (
    <>
        <form>
            <div className=' bg-[#6366f1] opacity-50 rounded-lg border-custom shadow-sm'>
            <h2 className='text-2xl mt-14 mb-8 font-bold mx-36'>Sign in</h2>
                <input type="text" name='UserName' className='h-10 p-5 rounded-lg w-64 mx-5 my-4 bg-[#1e1b4b] ' value={data.Username} placeholder='Username' onChange={(event)=>{setData({...data,Username:event.target.value})}}/> <br />
                <input type="password" name='Password' className='h-10 p-5 rounded-lg w-64 mx-5 my-4 bg-[#1e1b4b]' value={data.Password} placeholder='Password' onChange={(event)=>{setData({...data,Password:event.target.value})}}/><br />
                <button type='submit' className='py-3 px-10 rounded-lg mx-5 mb-10 mt-4 backgroundColor border-gray-800 border-2' onClick={SignIn}>Sign in</button>
                <p className='mb-16 bg-[#1e1b4b]'>Not a User? <Link to='/SignUp'>SignUp</Link></p>

            </div>
        </form>
    </>
  )
}
