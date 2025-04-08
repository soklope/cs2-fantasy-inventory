import "./header.scss"
import logo from "../../../assets/images/logo.png"
import { useEffect, useState, version } from "react";
import axios from "axios";

export default function Header() {
    const [version, setVersion] = useState(0.1)
    const [updateLaunched, setUpdateLaunched] = useState(false)

    useEffect(() => {
        const cs2SkinsLocalStorage = localStorage.getItem("cs2Skins");
        const localVersion = localStorage.getItem("version")

        if (!localVersion || localVersion !== version) {
            localStorage.setItem("version", version)
            
            setUpdateLaunched(true)
            console.log(updateLaunched);
        }

        if (!cs2SkinsLocalStorage || updateLaunched) {
            const fetchSkins = async () => {
                try {
                    const response = await axios.get("https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/skins.json");
                    const data = response.data;

                    const transformedData = data.map(skin => ({
                        id: `weapon-${skin.weapon.id}`,
                        name: skin.name, 
                        weapon: { name: skin.weapon.name },
                        category: { name: skin.category.name },
                        rarity: { color: skin.rarity.color ? skin.rarity.color : false },
                        image: skin.image || "/default-weapons/default-image.webp"
                    }));

                    localStorage.setItem("cs2Skins", JSON.stringify(transformedData));
                } catch (error) {
                    console.error("Error fetching skins:", error);
                } finally {
                    setUpdateLaunched(false)
                }
            };
            
            fetchSkins();
        }
    }, []);
    
    return (
        <header className="header">
            <div className="header__inner page-container">
                <img src={logo} alt="" />
                <p>v.{version}</p>
            </div>
        </header>
    )
}