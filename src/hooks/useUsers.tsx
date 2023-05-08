import { useEffect, useState } from "react";
import { collection, db, getDocs } from "../firebase";
import { User } from "../models/users.model";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await getDocs(collection(db, "users"));
    const data = response.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(data as User[]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
  };
};

export default useUsers;
