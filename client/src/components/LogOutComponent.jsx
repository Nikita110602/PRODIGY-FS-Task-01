import useLogOut from '../hooks/useLogOut'
import { useAuthContext } from '../context/authContext'

export default function LogOutComponent() {
  const { logOut } = useLogOut();
  const { setIsAuth } = useAuthContext();

  const handleLogout = async () => {
    try {
      await logOut();
      setIsAuth(false); 
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button className='backgroundColor border-gray-800' onClick={handleLogout}>LogOut</button>
  );
}
