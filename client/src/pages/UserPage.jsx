import { useEffect, useState } from 'react';
import UserComponent from '../components/UserComponent';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import useGetUser from '../hooks/useGetUser';
import LogOutComponent from '../components/LogOutComponent';

export default function UserPage() {
  const { setIsAuth } = useAuthContext();
  const { getUser } = useGetUser();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser();
      if (userData) {
        setData(userData);
      } else {
        localStorage.removeItem("authUser");
        setIsAuth(false);
        navigate("/login");
      }
    };
    fetchData();
  }, [getUser, setIsAuth, navigate]);

  return (
    <>
      <UserComponent Data={data} />
      <LogOutComponent />
    </>
  );
}
