import "./agent.scss";
import useInventoryStore from "../../store/inventoryStore";
import { useEffect, useState } from "react";

export default function Agent({ agentImage }) {
    const { userCtLoadoutStore, userTLoadoutStore, currentFaction} = useInventoryStore()
    const selectedLoadout = currentFaction === "counter-terrorists" ? userCtLoadoutStore : userTLoadoutStore;
    const [currentAgent, setCurrentAgent] = useState({})
    const isTerrorist = currentFaction === "terrorists";

    useEffect(() => {
        if (selectedLoadout) {
            const agent = selectedLoadout.loadout.find(item => item.category?.name === "agent");
            if (agent) {
                setCurrentAgent(agent);
            }
        }
        
    }, [selectedLoadout]);
    
    return (
        <div className="agent">
            <div className={`agent__image ${isTerrorist && "agent__image--terrorist"}`} style={{ backgroundImage: `url(${currentAgent.image})`}}></div>
        </div>
    );
}