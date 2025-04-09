import "./header.scss"
import logo from "../../../assets/images/logo.png"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
    const [version, setVersion] = useState(0.2);
    const [localVersion, setLocalVersion] = useState(localStorage.getItem("version")); 

    const fetchSkins = async () => {
        console.log("api called");

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
            localStorage.setItem("version", version); // Update version after successful fetch
            setLocalVersion(String(version)); // Update local state
        } catch (error) {
            console.error("Error fetching skins:", error);
        }
    };

    useEffect(() => {
        if (localVersion !== String(version)) {
            fetchSkins();
        } else if (!localStorage.getItem("cs2Skins")) {
            fetchSkins(); 
        }
    }, [version, localVersion]); 

    return (
        <header className="header">
            <div className="header__inner page-container">
                <img src={logo} alt="" />
                <p>v.{version}</p>
            </div>
        </header>
    );
}