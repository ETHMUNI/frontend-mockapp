import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export const Logout = ({setCurrentUser}) => {
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentUser({"token": null, "username": null});
        localStorage.clear();
        navigate("/home");
    }, [])

  return (
    <>
    </>
  )
}