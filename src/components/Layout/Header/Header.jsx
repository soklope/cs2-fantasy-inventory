import "./header.scss"
import logo from "../../../assets/images/logo.png"
import useInventoryStore from "../../../store/inventoryStore"
import { useEffect } from "react";
import axios from "axios";

export default function Header() {
    const { userCtLoadoutStore, userTLoadoutStore } = useInventoryStore();

    useEffect(() => {
        const cs2SkinsLocalStorage = localStorage.getItem("cs2Skins");

        if (!cs2SkinsLocalStorage) {
            const fetchSkins = async () => {
            try {
                const response = await axios.get("https://bymykel.github.io/CSGO-API/api/en/skins.json");
                const data = response.data;
                localStorage.setItem("cs2Skins", JSON.stringify(data));
            } catch (error) {
                console.error("Error fetching skins:", error);
            }
            };
            
            fetchSkins();
        }

        // if (!localStorage.getItem("userCtLoadout")) {
        //     localStorage.setItem("userCtLoadout", JSON.stringify(userCtLoadoutStore));
        // }

        // if (!localStorage.getItem("userTLoadout")) {
        //   localStorage.setItem("userTLoadout", JSON.stringify(userTLoadoutStore));
        // }
    }, []);
    
    return (
        <header className="header">
            <div className="header__inner page-container">
                <img src={logo} alt="" />
            </div>
        </header>
    )
}