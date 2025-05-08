import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import useInventoryStore from "../../store/inventoryStore"
import { useEffect, useState } from "react"

export default function TotalLoadoutPrice() {
    const { currentFaction, userCtLoadoutStore, userTLoadoutStore } = useInventoryStore()
    const [loadoutPrice, setLoadoutPrice] = useState(0)
    const queryClient = useQueryClient()
    const isTerrorist = currentFaction === "terrorists"

    const refetchPrices = async () => {
        const res = await fetch("https://raw.githubusercontent.com/ByMykel/counter-strike-price-tracker/main/static/prices/latest.json")
        return res.json()
    }

    const { data: skinPrices, isLoading } = useQuery({
        queryFn: refetchPrices,
        queryKey: ["skinPrices"],
        staleTime: 1000 * 60 * 5, 
    })

    const { mutateAsync: refetchPricesMutation } = useMutation({
        mutationFn: refetchPrices,
        onSuccess: () => {
            queryClient.invalidateQueries(["skinPrices"])
        },
    })

    const activateMutation = async () => {
        try {
            await refetchPricesMutation()
        } catch (e) {
            console.error(e)
        }    
    }

    useEffect(() => {
        if (!skinPrices) return;
    
        const skinsToBeCalculated = isTerrorist ? userTLoadoutStore.loadout : userCtLoadoutStore.loadout;
    
        let total = 0;
    
        skinsToBeCalculated.forEach((skin) => {
            const weaponName = skin.name;
            const matchedEntry = Object.entries(skinPrices).find(([name]) => name === weaponName);
    
            if (matchedEntry) {
                const [matchedName, priceData] = matchedEntry;
            
                const price =
                    priceData?.steam?.last_24h ??
                    priceData?.steam?.last_7d ??
                    priceData?.steam?.last_30d ??
                    priceData?.steam?.last_90d ??
                    priceData?.steam?.last_ever ??
                    0;
            
                // console.log(`Matched: "${weaponName}" with "${matchedName}" — Price: $${price}`);
                total += price;
            } else {
                // console.log(`No price found for: "${weaponName}"`);
            }
            
        });
    
        console.log(`Total loadout price: $${total.toFixed(2)}`);
        setLoadoutPrice(total.toFixed(2));
    }, [userCtLoadoutStore, userTLoadoutStore, skinPrices, currentFaction]);
    
    
    
    
    return (
        <div className="page-container">
            {/* <button onClick={() => activateMutation()}>Reload Prices</button> */}
            <h5>Total Loadout Prices</h5>

            { isLoading ? (
                <div>Calculating price</div>
            ) : (
                <div>{loadoutPrice}</div>
                // Object.entries(skinPrices).map(([itemName, itemData]) => (
                //     console.log(itemName, itemData)
                // ))
            )}
        </div>
    )
}
