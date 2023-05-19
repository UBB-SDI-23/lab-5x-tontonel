import { useAuth } from "../../context/Context";
import { MyContext } from "../../context/Context";
import { useContext } from "react";

export default function NavbarViewModel(props) {
    
    const token = useAuth();

    const { setUser } = useContext(MyContext);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setUser(null);
    }

    return {
        token,
        handleLogout
    }
}