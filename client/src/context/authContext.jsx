import { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('authUser')) || null);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
