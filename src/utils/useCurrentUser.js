import { useEffect, useState } from "react";
import api from "./api";

const useCurrentUser = () => {
  // get user data on mount App in state variable
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    api.getUserInfo().then((user) => setCurrentUser(user));
  }, []);
  return currentUser;
};

export default useCurrentUser;
