import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  receiveUserError,
  receiveUserResponse,
  sendUserRequest,
} from "../redux/user/userActions";

const UserComponent = () => {
  const { loading, data, error } = useSelector((state) => state);
  //   console.log([loading, data, error]);
  const dispatch = useDispatch();
  const handleGetUsers = () => {
    dispatch(getUsers());
  };
  return (
    <div>
      <div>
        <button className="" onClick={handleGetUsers}>
          دریافت کاربران
        </button>
      </div>
      {loading ? (
        <div>
          <div>
            <span>Loading...</span>
          </div>
        </div>
      ) : data.length > 0 ? (
        <ul>
          {data.map((u) => (
            <li key={u.id}>{u.username}</li>
          ))}
        </ul>
      ) : error ? (
        <h4>{error}</h4>
      ) : (
        <h4>کاربران را دریافت کنید</h4>
      )}
    </div>
  );
};

export default UserComponent;
