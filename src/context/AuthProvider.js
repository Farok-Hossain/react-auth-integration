import React from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
    // const {children} = props;
    const allContext = useFirebase();
    return (
        <div>
            <AuthContext.Provider value={allContext}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;