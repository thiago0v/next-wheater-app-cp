import UserContext from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
    title: string
    userName: string
}

export const Header = ({ title, userName }: HeaderProps) => {
    const router = useRouter();
    const { setUserName } = useContext(UserContext)

    const handleLogin = () => {
        router.push('/login')
    }

    const handleLogout = () => {
        sessionStorage.removeItem("userToken")
        setUserName(null)
        router.push('/login')
    }

    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>{title}</h1>
            <div className={styles.div}>
                {userName
                    ? (<>
                        <span>{userName}</span>
                        <button className={styles.button} onClick={handleLogout}>Sair</button>
                    </>)
                    : (
                        <button className={styles.button} onClick={handleLogin}>Login</button>
                    )
                }
            </div>
        </header>
    )
}