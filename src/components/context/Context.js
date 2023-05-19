import React, { useState, createContext, useContext } from 'react';
import { useJwt } from 'react-jwt';

export const MyContext = createContext();

export function MyProvider (props) {

    const token = localStorage.getItem("token");

    const role = localStorage.getItem("role");

    const { isExpired } = useJwt(token);

    const [user, setUser] = useState({
        isAuthenticated: !isExpired,
        token: token,
        role: role
    });

    const [numberOfPages, setNumberOfPages] = useState(20);
    
    const contextValue = {
        user,
        numberOfPages,
        setNumberOfPages,
        setUser,
    }

    return (
        <MyContext.Provider value={contextValue} >
            {props.children}
        </MyContext.Provider>
    );
};


export const useAuth = () => {

    const { user } = useContext(MyContext);

    if(user?.token != null) {
        return user.token
    }
    return null;
}

export const useRole = () => {
    
    const { user } = useContext(MyContext);

    if(user?.role != null) {
        return user.role
    }
    return null;
}


