import "./header.scss"
import HelpButton from "../../HelpButton/HelpButton";
import logo from "../../../assets/images/logo.png"
import { useEffect, useState } from "react";
import axios from "axios";
import useInventoryStore from "../../../store/inventoryStore";

export default function Header() {
    const [version, setVersion] = useState(0.1);
    const [localVersion, setLocalVersion] = useState(localStorage.getItem("version"));
    const noUserLoadouts = localStorage.getItem("userLoadouts") === null;

    const { initializeInventoryIfNeeded } = useInventoryStore();

    useEffect(() => {
        if (noUserLoadouts) {
            initializeInventoryIfNeeded();
        }
    }, []);
      
    
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
                phase: skin.phase || null,
                image: skin.image || "/default-weapons/default-image.webp",
                wears: skin.wears?.map(wear => wear.name)
            }));

            localStorage.setItem("cs2Skins", JSON.stringify(transformedData));
            localStorage.setItem("version", version); 
            setLocalVersion(String(version)); 
        } catch (error) {
            console.error("Error fetching skins:", error);
        }

        try {
            const response = await axios.get("https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en/agents.json");
            const data = response.data;

            const transformedData = data.map(skin => ({
                id: `${skin.id}`,
                name: skin.name,
                weapon: { name: skin.id.split("-")[0] },
                category: { name: skin.id.split("-")[0] },
                team: skin.team.id,
                rarity: { color: skin.rarity.color },
                image: skin.image || "/default-weapons/default-image.webp"
            }));

            localStorage.setItem("cs2Agents", JSON.stringify(transformedData));
            localStorage.setItem("version", version); 
            setLocalVersion(String(version)); 
        } catch (error) {
            console.error("Error fetching skins:", error);
        }
    };

    useEffect(() => {
        if (localVersion !== String(version) || !localStorage.getItem("cs2Skins") || !localStorage.getItem("cs2Agents")) {
            fetchSkins();
        }
    }, [version, localVersion]);
    

    return (
        <header className="header">
            <div className="header__inner page-container">
                <img className="header__logo" src={logo} alt="cs loadout logo" />
                <HelpButton />
                <p className="header__version-text">v.{version}</p>
            </div>
        </header>
    );
}