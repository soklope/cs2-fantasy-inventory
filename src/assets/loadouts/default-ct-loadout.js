const defaultCtLoadout = {
  name: "Default CT Loadout",
  faction: "counter-terrorists",
  loadout: [
    {
      id: "agent-ct-default",
      name: "Counter-Terrorist",
      team: "counter-terrorists",
      category: "agent",
      rarity: "#FFFFFF",
      image: "/CT_agent.webp",
      isDefault: true
    },
    {
      id: "gloves-ct",
      name: "CT Gloves",
      weapon: "CT Gloves",
      category: "Gloves",
      rarity: "#FFFFFF",
      image: "/CT_gloves.webp",
      isDefault: true
    },
    {
      id: "knife-ct",
      name: "CT Knife",
      weapon: "Bayonet",
      category: "Knives",
      rarity: "#FFFFFF",
      image: "/CT_knife.webp",
      isDefault: true
    },

    // SMGs
    {
      id: "weapon-mp5sd",
      name: "MP5-SD",
      weapon: "MP5-SD",
      category: "SMGs",
      rarity: "#FFFFFF",
      image: "/MP5-SD.webp",
      isDefault: true
    },
    {
      id: "weapon-mp7",
      name: "MP7",
      weapon: "MP7",
      category: "SMGs",
      rarity: "#FFFFFF",
      image: "/MP7.webp",
      isDefault: true
    },
    {
      id: "weapon-mp9",
      name: "MP9",
      weapon: "MP9",
      category: "SMGs",
      rarity: "#FFFFFF",
      image: "/MP9.webp",
      isDefault: true
    },
    {
      id: "weapon-ump45",
      name: "UMP-45",
      weapon: "UMP-45",
      category: "SMGs",
      rarity: "#FFFFFF",
      image: "/UMP-45.webp",
      isDefault: false
    },
    {
      id: "weapon-pp-bizon",
      name: "PP-Bizon",
      weapon: "PP-Bizon",
      category: "SMGs",
      rarity: "#FFFFFF",
      image: "/PP-Bizon.webp",
      isDefault: false
    },
    {
      id: "weapon-p90",
      name: "P90",
      weapon: "P90",
      category: "SMGs",
      rarity: "#FFFFFF",
      image: "/P90.webp",
      isDefault: false
    },

    // Heavy
    {
      id: "weapon-nova",
      name: "Nova",
      weapon: "Nova",
      category: "Heavy",
      rarity: "#FFFFFF",
      image: "/Nova.webp",
      isDefault: true
    },
    {
      id: "weapon-xm1014",
      name: "XM1014",
      weapon: "XM1014",
      category: "Heavy",
      rarity: "#FFFFFF",
      image: "/XM1014.webp",
      isDefault: true
    },
    {
      id: "weapon-mag7",
      name: "MAG-7",
      weapon: "MAG-7",
      category: "Heavy",
      rarity: "#FFFFFF",
      image: "/MAG-7.webp",
      isDefault: false
    },
    {
      id: "weapon-m249",
      name: "M249",
      weapon: "M249",
      category: "Heavy",
      rarity: "#FFFFFF",
      image: "/M249.webp",
      isDefault: false
    },
    {
      id: "weapon-negev",
      name: "Negev",
      weapon: "Negev",
      category: "Heavy",
      rarity: "#FFFFFF",
      image: "/Negev.webp",
      isDefault: false
    },

    // Rifles
    {
      id: "weapon-m4a4",
      name: "M4A4",
      weapon: "M4A4",
      category: "Rifles",
      rarity: "#FFFFFF",
      image: "/M4A4.webp",
      isDefault: true
    },
    {
      id: "skin-m4a1s",
      name: "M4A1-S",
      weapon: "M4A1-S",
      category: "Rifles",
      rarity: "#FFFFFF",
      image: "/M4A1-S.webp",
      isDefault: true
    },
    {
      id: "skin-awp",
      name: "AWP",
      weapon: "AWP",
      category: "Rifles",
      rarity: "#FFFFFF",
      image: "/AWP.webp",
      isDefault: true
    },
    {
      id: "skin-ssg-08",
      name: "SSG 08",
      weapon: "SSG 08",
      category: "Rifles",
      rarity: "#FFFFFF",
      image: "/SSG.webp",
      isDefault: true
    },
    {
      id: "skin-famas",
      name: "FAMAS",
      weapon: "FAMAS",
      category: "Rifles",
      rarity: "#FFFFFF",
      image: "/FAMAS.webp",
      isDefault: true
    },
    {
      id: "weapon-aug",
      name: "AUG",
      weapon: "AUG",
      category: "Rifles",
      rarity: "#FFFFFF",
      image: "/AUG.webp",
      isDefault: false
    },
    {
      id: "weapon-scar20",
      name: "SCAR-20",
      weapon: "SCAR-20",
      category: "Rifles",
      rarity: "#FFFFFF",
      image: "/SCAR-20.webp",
      isDefault: false
    },
    

    // Pistols
    {
      id: "skin-deagle",
      name: "Desert Eagle",
      weapon: "Desert Eagle",
      category: "Pistols",
      rarity: "#FFFFFF",
      image: "/Desert_Eagle.webp",
      isDefault: true
    },
    {
      id: "weapon-usp-s",
      name: "USP-S",
      weapon: "USP-S",
      category: "Pistols",
      rarity: "#FFFFFF",
      image: "/USP-S.webp",
      isDefault: true
    },
    {
      id: "weapon-p2000",
      name: "P2000",
      weapon: "P2000",
      category: "Pistols",
      rarity: "#FFFFFF",
      image: "/P2000.webp",
      isDefault: false
    },
    {
      id: "weapon-p250",
      name: "P250",
      weapon: "P250",
      category: "Pistols",
      rarity: "#FFFFFF",
      image: "/P250.webp",
      isDefault: true
    },
    {
      id: "weapon-five-seven",
      name: "Five-SeveN",
      weapon: "Five-SeveN",
      category: "Pistols",
      rarity: "#FFFFFF",
      image: "/Five_Seven.webp",
      isDefault: true
    },
    {
      id: "weapon-cz75-auto",
      name: "CZ75-Auto",
      weapon: "CZ75-Auto",
      category: "Pistols",
      rarity: "#FFFFFF",
      image: "/CZ_Auto.webp",
      isDefault: false
    },
    {
      id: "weapon-dual-berettas",
      name: "Dual Berettas",
      weapon: "Dual Berettas",
      category: "Pistols",
      rarity: "#FFFFFF",
      image: "/Dual_Berettas.webp",
      isDefault: true
    },
    {
      id: "weapon-r8-revolver",
      name: "R8 Revolver",
      weapon: "R8 Revolver",
      category: "Pistols",
      rarity: "#FFFFFF",
      image: "/R8_Revolver.webp",
      isDefault: false
    }
  ]
};

export default defaultCtLoadout;
