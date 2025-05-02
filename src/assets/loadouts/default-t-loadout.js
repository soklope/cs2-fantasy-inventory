const defaultTLoadout = {
  name: "Default T Loadout",
  faction: "terrorists", 
  loadout: [
    {
      id: "agent-t-default",
      name: "Terrorist",
      team: "terrorists",
      category: "agent",
      rarityColor: "#FFFFFF50",
      image: "/T_agent.webp",
      isDefault: true
    },
    {
      id: "gloves-t",
      name: "T Gloves",
      weapon: "Gloves",
      category: "Gloves",
      rarityColor: "#FFFFFF50",
      image: "/T_gloves.webp",
      isDefault: true
    },
    {
      id: "knife-t",
      name: "T Knife",
      weapon: "Karambit",
      category: "Knives",
      rarityColor: "#FFFFFF50",
      image: "/T_knife.webp",
      isDefault: true
    },

    // Rifles
    {
      id: "weapon-ak47",
      name: "AK-47",
      weapon: "AK-47",
      category: "Rifles",
      rarityColor: "#FFFFFF50",
      image: "/AK-47.webp",
      isDefault: true
    },
    {
      id: "skin-awp",
      name: "AWP",
      weapon: "AWP",
      category: "Rifles",
      rarityColor: "#FFFFFF50",
      image: "/AWP.webp",
      isDefault: true
    },
    {
      id: "skin-ssg-08",
      name: "SSG 08",
      weapon: "SSG 08",
      category: "Rifles",
      rarityColor: "#FFFFFF50",
      image: "/SSG.webp",
      isDefault: true
    },
    {
      id: "skin-sg-553",
      name: "SG 553",
      weapon: "SG 553",
      category: "Rifles",
      rarityColor: "#FFFFFF50",
      image: "/SG.webp",
      isDefault: true
    },
    {
      id: "weapon-galil-ar",
      name: "Galil AR",
      weapon: "Galil AR",
      category: "Rifles",
      rarityColor: "#FFFFFF50",
      image: "/Galil_AR.webp",
      isDefault: true
    },
    {
      id: "weapon-g3sg1",
      name: "G3SG1",
      weapon: "G3SG1",
      category: "Rifles",
      rarityColor: "#FFFFFF50",
      image: "/G3SG1.webp",
      isDefault: false
    },

    // SMGs
    {
      id: "weapon-mac10",
      name: "MAC-10",
      weapon: "MAC-10",
      category: "SMGs",
      rarityColor: "#FFFFFF50",
      image: "/MAC-10.webp",
      isDefault: true
    },
    {
      id: "weapon-mp5sd",
      name: "MP5-SD",
      weapon: "MP5-SD",
      category: "SMGs",
      rarityColor: "#FFFFFF50",
      image: "/MP5-SD.webp",
      isDefault: true
    },
    {
      id: "weapon-mp7",
      name: "MP7",
      weapon: "MP7",
      category: "SMGs",
      rarityColor: "#FFFFFF50",
      image: "/MP7.webp",
      isDefault: true
    },
    {
      id: "weapon-ump45",
      name: "UMP-45",
      weapon: "UMP-45",
      category: "SMGs",
      rarityColor: "#FFFFFF50",
      image: "/UMP-45.webp",
      isDefault: false
    },
    {
      id: "weapon-pp-bizon",
      name: "PP-Bizon",
      weapon: "PP-Bizon",
      category: "SMGs",
      rarityColor: "#FFFFFF50",
      image: "/PP-Bizon.webp",
      isDefault: false
    },
    {
      id: "weapon-p90",
      name: "P90",
      weapon: "P90",
      category: "SMGs",
      rarityColor: "#FFFFFF50",
      image: "/P90.webp",
      isDefault: false
    },

    // Heavies
    {
      id: "weapon-nova",
      name: "Nova",
      weapon: "Nova",
      category: "Heavy",
      rarityColor: "#FFFFFF50",
      image: "/Nova.webp",
      isDefault: true
    },
    {
      id: "weapon-xm1014",
      name: "XM1014",
      weapon: "XM1014",
      category: "Heavy",
      rarityColor: "#FFFFFF50",
      image: "/XM1014.webp",
      isDefault: true
    },
    {
      id: "weapon-sawed-off",
      name: "Sawed-Off",
      weapon: "Sawed-Off",
      category: "Heavy",
      rarityColor: "#FFFFFF50",
      image: "/Sawed_Off.webp",
      isDefault: false
    },
    {
      id: "weapon-m249",
      name: "M249",
      weapon: "M249",
      category: "Heavy",
      rarityColor: "#FFFFFF50",
      image: "/M249.webp",
      isDefault: false
    },
    {
      id: "weapon-negev",
      name: "Negev",
      weapon: "Negev",
      category: "Heavy",
      rarityColor: "#FFFFFF50",
      image: "/Negev.webp",
      isDefault: false
    },

    // Pistols
    {
      id: "skin-deagle",
      name: "Desert Eagle",
      weapon: "Desert Eagle",
      category: "Pistols",
      rarityColor: "#FFFFFF50",
      image: "/Desert_Eagle.webp",
      isDefault: true
    },
    {
      id: "weapon-glock18",
      name: "Glock-18",
      weapon: "Glock-18",
      category: "Pistols",
      rarityColor: "#FFFFFF50",
      image: "/Glock-18.webp",
      isDefault: true
    },
    {
      id: "weapon-p250",
      name: "P250",
      weapon: "P250",
      category: "Pistols",
      rarityColor: "#FFFFFF50",
      image: "/P250.webp",
      isDefault: true
    },
    {
      id: "weapon-tec-9",
      name: "Tec-9",
      weapon: "Tec-9",
      category: "Pistols",
      rarityColor: "#FFFFFF50",
      image: "/Tec_9.webp",
      isDefault: true
    },
    {
      id: "weapon-cz75-uto",
      name: "CZ75-Auto",
      weapon: "CZ75-Auto",
      category: "Pistols",
      rarityColor: "#FFFFFF50",
      image: "/CZ_Auto.webp",
      isDefault: false
    },
    {
      id: "weapon-dual-berettas",
      name: "Dual Berettas",
      weapon: "Dual Berettas",
      category: "Pistols",
      rarityColor: "#FFFFFF50",
      image: "/Dual_Berettas.webp",
      isDefault: true
    },
    {
      id: "weapon-r8-revolver",
      name: "R8 Revolver",
      weapon: "R8 Revolver",
      category: "Pistols",
      rarityColor: "#FFFFFF50",
      image: "/R8_Revolver.webp",
      isDefault: false
    }
  ]
};

export default defaultTLoadout;
