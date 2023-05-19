import { getUser } from "../../api/user/user";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserViewModel(props) {

    const { userId } = useParams();

    const [user, setUser] = useState(null);

    useEffect(() => {
        getUser(userId)
        .then((user) => setUser(user))
        .catch((err) => console.log(err));
    }, []);

    return {
        user
    }
}