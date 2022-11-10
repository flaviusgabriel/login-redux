import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";

import { logout } from "../actions/auth";

const ToDoPAge = () => {
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <div>
      <h1>TODO Page</h1>
      <a href="/login" className="nav-link" onClick={logOut}>
        LogOut
      </a>
    </div>
  );
};

export default ToDoPAge;
