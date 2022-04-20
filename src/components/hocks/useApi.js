import { useEffect, useState } from "react";

function useApi (options = {}) {

    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users.json')
        .then((users) => users.json())
        .then((users) =>
            setUsers(users)
        )
    }, [])

    return {
        result,
        error,
        auth : (login, pass) => {
            let user = users.find(u => u.login === login)

            if(user && user.password === pass) {
                setResult (user)
                setError(null)
            } else {
                setError('ошибка')
            }
        }
    }
}

export default useApi;
