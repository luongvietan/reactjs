import { useEffect, useState } from "react";

const Users = () => {
    const [usersList, setUsersList] = useState([]);

    async function fetchAllUser() {
        try {
            const apiRes = await fetch('https://dummyjson.com/users')
            const result = await apiRes.json()
            if (result?.users) {
                setUsersList(result?.users)
            } else {
                setUsersList([])
            }
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllUser()
    }, [])
    return (
        <div>
            <h1>Users List : </h1>
            <ul>
                {
                    usersList && usersList.length > 0
                        ? usersList.map(userItem => {
                            <li key={userItem?.id}>
                                <p>{userItem?.firstName}{userItem?.lastName}</p>
                            </li>
                        })
                        : <h1>No userfound</h1>
                }
            </ul>
        </div>)
}
export default Users;