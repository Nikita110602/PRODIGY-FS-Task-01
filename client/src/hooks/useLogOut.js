import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const useLogOut = () => {
  const navigate = useNavigate();
  const { setIsAuth } = useAuthContext();

  const logOut = async () => {
    const response = await fetch("https://prodigy-fs-task-01.onrender.com/api/auth/logOut", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    });
    const message = await response.json();
    if (response.ok) {
      localStorage.removeItem('authUser');
      setIsAuth(false);
      toast.success(message.message);
      navigate('/login');
    } else {
      toast.error(message.message);
    }
  };

  return { logOut };
};

export default useLogOut;
