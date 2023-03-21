import React from "react";
import { Routes, Route} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthenticated, selectIsLoading, authenticate } from './features/authSlice';
import { fetchProfile } from './features/profileSlice';
import Header from './components/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(authenticate());
  }, [dispatch]);

  React.useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchProfile());
    }
  }, [dispatch, isAuthenticated]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      
        <Header />
        {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={isAuthenticated ? <Dashboard /> : <SignIn />} />
          <Route path="/signin" element={isAuthenticated ? <Dashboard /> : <SignIn />} />
          <Route path="/signup" element={isAuthenticated ? <Dashboard /> : <SignUp />} />
          <Route path="/users" element={isAuthenticated ? <Users /> : <SignIn />} />
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Dashboard />} />
          
        </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
