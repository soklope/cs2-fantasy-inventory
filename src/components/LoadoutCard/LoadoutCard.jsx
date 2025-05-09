import useInventoryStore from "../../store/inventoryStore";
import WearPicker from "../WearPicker/WearPicker";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function LoadoutCard({ skin }) {
    const { setFinderStatus, currentFaction, userCtLoadoutStore, userTLoadoutStore } = useInventoryStore();
    const isTerrorist = currentFaction === "terrorists";
    const [skinPrice, setSkinPrice] = useState(0)


    const { data: skinPrices, isLoading } = useQuery({
        queryKey: ["skinPrices"],
        queryFn: async () => {
          const res = await fetch("https://raw.githubusercontent.com/ByMykel/counter-strike-price-tracker/main/static/prices/latest.json");
          return res.json();
        },
        staleTime: 1000 * 60 * 5,
      });

    const handleCardClick = () => {
        setFinderStatus(skin.id, skin.name, skin.category, skin.weapon);
    };

    useEffect(() => {
        if (!skinPrices || !skin?.name) return;

        const matchedEntry = Object.entries(skinPrices).find(
            ([name]) => name === skin.name
        );

        if (matchedEntry) {
            const [, priceData] = matchedEntry;

            const price =
                priceData?.steam?.last_24h ??
                priceData?.steam?.last_7d ??
                priceData?.steam?.last_30d ??
                priceData?.steam?.last_90d ??
                priceData?.steam?.last_ever ??
                0;

            setSkinPrice(price.toFixed(2))
        } else {
            console.log(`No price found for: "${skin.name}"`);
        }
    }, [userCtLoadoutStore, userTLoadoutStore, skinPrices, skin, currentFaction]);

    return (
        <li className={`card card--loadout ${isTerrorist ? "card--t" : "card--ct"}`} 
            style={{ background: `linear-gradient(to top, ${skin.rarityColor} -130%, #1D1D1D 50%)`}}
        >
            <WearPicker
                possibleWears={skin.wears}
                activeWear={skin.wears?.find(wear => wear.active)?.name}
                skinId={skin.id} // Pass the skin ID here
            />
            <div className="card__inner" onClick={handleCardClick}>
                <h3 className="card__title">{skin.name} {skin.phase && skin.phase}</h3>
                <img className="card__image" src={`/skin-images/${skin.image}`} alt={`${skin.name} skin`}/>
                {isLoading ? (
                    <p className="card__price">Loading...</p>
                ) : (
                    <p className="card__price">{skinPrice}</p>
                )}
            </div>
        </li>
    );
}
