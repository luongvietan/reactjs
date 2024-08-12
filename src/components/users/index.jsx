import { useEffect, useState } from "react";

const Users = () => {
    const [usersList, setUsersList] = useState([]);

    async function fetchAllUser() {
        try {
            const apiRes = await fetch('https://dummyjson.com/users')
            const result = await apiRes.json()
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllUser()
    })
    return <div>
        <h1>Users List : </h1>
    </div>
}
export default Users;