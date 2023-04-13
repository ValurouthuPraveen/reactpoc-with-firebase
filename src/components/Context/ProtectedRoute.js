import { UserAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth();
    console.log('user', user);
    const user1 = sessionStorage.getItem('loginDetails');

    if(!user1) {
        return <Navigate to='/' />
    }

    return children;
}

export default ProtectedRoute;