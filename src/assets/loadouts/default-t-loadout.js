const defaultTLoadout = {
  name: "Default T Loadout",
  faction: "terrorists", 
  loadout: [
    {
      id: "agent-t-default",
      name: "Terrorist",
      team: "terrorists",
      category: { name: "agent" },
      rarity: { color: false },
      image: "/default-weapons/T_agent.webp"
    },
    {
      id: "weapon-ak47",
      name: "AK-47",
      weapon: { name: "AK-47" },
      category: { name: "Rifles" },
      rarity: { color: false },
      image: "/default-weapons/AK-47.webp"
    },
    {
      id: "skin-awp",
      name: "AWP",
      weapon: { name: "AWP" },
      category: { name: "Rifles" },
      rarity: { color: false },
      image: "/default-weapons/AWP.webp"
    },
    {
      id: "skin-ssg-08",
      name: "SSG 08",
      weapon: { name: "SSG 08" },
      category: { name: "Rifles" },
      rarity: { color: false },
      image: "/default-weapons/SSG.webp"
    },
    {
      id: "skin-deagle",
      name: "Desert Eagle",
      weapon: { name: "Desert Eagle" },
      category: { name: "Pistols" },
      rarity: { color: false },
      image: "/default-weapons/Desert_Eagle.webp"
    },
    {
      id: "weapon-glock18",
      name: "Glock-18",
      weapon: { name: "Glock-18" },
      category: { name: "Pistols" },
      rarity: { color: false },
      image: "/default-weapons/Glock-18.webp"
    },
    {
      id: "weapon-galil-ar",
      name: "Galil AR",
      weapon: { name: "Galil AR" },
      category: { name: "Rifles" },
      rarity: { color: false },
      image: "/default-weapons/Galil_AR.webp"
    },
    {
      id: "weapon-p250",
      name: "P250",
      weapon: { name: "P250" },
      category: { name: "Pistols" },
      rarity: { color: false },
      image: "/default-weapons/P250.webp"
    },
    {
      id: "weapon-tec-9",
      name: "Tec-9",
      weapon: { name: "Tec-9" },
      category: { name: "Pistols" },
      rarity: { color: false },
      image: "/default-weapons/Tec_9.webp"
    },
    {
      id: "weapon-cz75-<uto",
      name: "CZ75-Auto",
      weapon: { name: "CZ75-Auto" },
      category: { name: "Pistols" },
      rarity: { color: false },
      image: "/default-weapons/CZ_Auto.webp"
    },
    {
      id: "gloves-t",
      name: "T Gloves",
      weapon: { name: "CT Gloves" },
      category: { name: "Gloves" },
      rarity: { color: false },
      image: "/default-weapons/T_gloves.webp"
    },
    {
      id: "knife-t",
      name: "T Knife",
      weapon: { name: "CT Knife" },
      category: { name: "Knives" },
      rarity: { color: false },
      image: "/default-weapons/T_knife.webp"
    }
  ]
};


// const defaultTLoadout = {
//   name: "Default T Loadout",
//   faction: "t", 
//   loadout: [
//     {
//       "id": "weapon-ak47",
//       "name": "AK-47",
//       "description": "A powerful assault rifle known for its high recoil and damage output. It is one of the most popular weapons in the game.",
//       "weapon": {
//         "id": "ak47",
//         "weapon_id": 7,
//         "name": "AK-47"
//       },
//       "category": {
//         "id": "sfui_invpanel_filter_rifles",
//         "name": "Rifles"
//       },
//       "pattern": {
//         "id": "default",
//         "name": "Default"
//       },
//       "min_float": 0.00,
//       "max_float": 1.00,
//       "rarity": {
//         "id": "rarity_common",
//         "name": "Common",
//         "color": false
//       },
//       "stattrak": false,
//       "souvenir": false,
//       "paint_index": "0",
//       "wears": [
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_0",
//           "name": "Factory New"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_1",
//           "name": "Minimal Wear"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_2",
//           "name": "Field-Tested"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_3",
//           "name": "Well-Worn"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_4",
//           "name": "Battle-Scarred"
//         }
//       ],
//       "collections": [],
//       "crates": [],
//       "team": {
//         "id": "both",
//         "name": "Both Teams"
//       },
//       "legacy_model": false,
//       "image": "/default-weapons/AK-47.webp"
//     },
//     {
//       "id": "skin-awp",
//       "name": "AWP",
//       "description": "The AWP is a high-powered sniper rifle capable of killing enemies with a single shot. It is highly accurate but slow to fire.",
//       "weapon": {
//         "id": "awp",
//         "weapon_id": 11,
//         "name": "AWP"
//       },
//       "category": {
//         "id": "sfui_invpanel_filter_sniper_rifles",
//         "name": "Rifles"
//       },
//       "pattern": {
//         "id": "default",
//         "name": "Default"
//       },
//       "min_float": 0.00,
//       "max_float": 0.99,
//       "rarity": {
//         "id": "rarity_rare",
//         "name": "Rare",
//         "color": false
//       },
//       "stattrak": false,
//       "souvenir": false,
//       "paint_index": "1002",
//       "wears": [
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_0",
//           "name": "Factory New"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_1",
//           "name": "Minimal Wear"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_2",
//           "name": "Field-Tested"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_3",
//           "name": "Well-Worn"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_4",
//           "name": "Battle-Scarred"
//         }
//       ],
//       "collections": [],
//       "crates": [],
//       "team": {
//         "id": "both",
//         "name": "Both Teams"
//       },
//       "legacy_model": false,
//       "image": "/default-weapons/AWP.webp"
//     },
//     {
//       "id": "skin-deagle",
//       "name": "Desert Eagle",
//       "description": "The Desert Eagle is a powerful semi-automatic handgun, capable of delivering high damage with every shot.",
//       "weapon": {
//         "id": "deagle",
//         "weapon_id": 1,
//         "name": "Desert Eagle"
//       },
//       "category": {
//         "id": "sfui_invpanel_filter_pistols",
//         "name": "Pistols"
//       },
//       "pattern": {
//         "id": "default",
//         "name": "Default"
//       },
//       "min_float": 0.00,
//       "max_float": 0.99,
//       "rarity": {
//         "id": "rarity_rare",
//         "name": "Rare",
//         "color": false
//       },
//       "stattrak": false,
//       "souvenir": false,
//       "paint_index": "1003",
//       "wears": [
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_0",
//           "name": "Factory New"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_1",
//           "name": "Minimal Wear"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_2",
//           "name": "Field-Tested"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_3",
//           "name": "Well-Worn"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_4",
//           "name": "Battle-Scarred"
//         }
//       ],
//       "collections": [],
//       "crates": [],
//       "team": {
//         "id": "both",
//         "name": "Both Teams"
//       },
//       "legacy_model": false,
//       "image": "/default-weapons/Desert_Eagle.webp"
//     },
//     {
//       "id": "weapon-glock18",
//       "name": "Glock-18",
//       "description": "The Glock-18 is a serviceable first-round pistol that works best against unarmored opponents and is capable of firing three-round bursts.",
//       "weapon": {
//         "id": "glock18",
//         "weapon_id": 2,
//         "name": "Glock-18"
//       },
//       "category": {
//         "id": "sfui_invpanel_filter_pistols",
//         "name": "Pistols"
//       },
//       "pattern": {
//         "id": "default",
//         "name": "Default"
//       },
//       "min_float": 0.00,
//       "max_float": 1.00,
//       "rarity": {
//         "id": "rarity_common",
//         "name": "Common",
//         "color": false
//       },
//       "stattrak": false,
//       "souvenir": false,
//       "paint_index": "0",
//       "wears": [
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_0",
//           "name": "Factory New"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_1",
//           "name": "Minimal Wear"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_2",
//           "name": "Field-Tested"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_3",
//           "name": "Well-Worn"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_4",
//           "name": "Battle-Scarred"
//         }
//       ],
//       "collections": [],
//       "crates": [],
//       "team": {
//         "id": "terrorist",
//         "name": "Terrorist"
//       },
//       "legacy_model": false,
//       "image": "/default-weapons/Glock-18.webp"
//     },
//     {
//       "id": "weapon-galil-ar",
//       "name": "Galil AR",
//       "description": "The Galil AR is a fully automatic assault rifle used by the Terrorist side. Known for its solid performance in mid-range combat and its affordability.",
//       "weapon": {
//         "id": "galil-ar",
//         "weapon_id": 13,
//         "name": "Galil AR"
//       },
//       "category": {
//         "id": "sfui_invpanel_filter_rifles",
//         "name": "Rifles"
//       },
//       "pattern": {
//         "id": "default",
//         "name": "Default"
//       },
//       "min_float": 0.00,
//       "max_float": 0.99,
//       "rarity": {
//         "id": "rarity_common",
//         "name": "Common",
//         "color": false
//       },
//       "stattrak": false,
//       "souvenir": false,
//       "paint_index": "0",
//       "wears": [
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_0",
//           "name": "Factory New"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_1",
//           "name": "Minimal Wear"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_2",
//           "name": "Field-Tested"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_3",
//           "name": "Well-Worn"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_4",
//           "name": "Battle-Scarred"
//         }
//       ],
//       "collections": [],
//       "crates": [],
//       "team": {
//         "id": "terrorist",
//         "name": "Terrorist"
//       },
//       "legacy_model": false,
//       "image": "/default-weapons/Galil_AR.webp"
//     },
//     {
//       "id": "weapon-p250",
//       "name": "P250",
//       "description": "The P250 is a compact semi-automatic pistol, with decent damage and a high rate of fire. It is often used as a secondary weapon due to its affordability.",
//       "weapon": {
//         "id": "p250",
//         "weapon_id": 14,
//         "name": "P250"
//       },
//       "category": {
//         "id": "sfui_invpanel_filter_pistols",
//         "name": "Pistols"
//       },
//       "pattern": {
//         "id": "default",
//         "name": "Default"
//       },
//       "min_float": 0.00,
//       "max_float": 1.00,
//       "rarity": {
//         "id": "rarity_common",
//         "name": "Common",
//         "color": false
//       },
//       "stattrak": false,
//       "souvenir": false,
//       "paint_index": "0",
//       "wears": [
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_0",
//           "name": "Factory New"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_1",
//           "name": "Minimal Wear"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_2",
//           "name": "Field-Tested"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_3",
//           "name": "Well-Worn"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_4",
//           "name": "Battle-Scarred"
//         }
//       ],
//       "collections": [],
//       "crates": [],
//       "team": {
//         "id": "both",
//         "name": "Both Teams"
//       },
//       "legacy_model": false,
//       "image": "/default-weapons/P250.webp"
//     },
//     {
//       "id": "gloves-t",
//       "name": "T Gloves",
//       "description": "Protective gloves used by the Terrorist team. They provide both functionality and style for tactical operations.",
//       "weapon": {
//         "id": "gloves-t",
//         "weapon_id": 101,
//         "name": "CT Gloves"
//       },
//       "category": {
//         "id": "sfui_invpanel_filter_gloves",
//         "name": "Gloves"
//       },
//       "pattern": {
//         "id": "default",
//         "name": "Default"
//       },
//       "min_float": 0.00,
//       "max_float": 1.00,
//       "rarity": {
//         "id": "rarity_rare",
//         "name": "Rare",
//         "color": false
//       },
//       "stattrak": false,
//       "souvenir": false,
//       "paint_index": "0",
//       "wears": [
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_0",
//           "name": "Factory New"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_1",
//           "name": "Minimal Wear"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_2",
//           "name": "Field-Tested"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_3",
//           "name": "Well-Worn"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_4",
//           "name": "Battle-Scarred"
//         }
//       ],
//       "collections": [],
//       "crates": [],
//       "team": {
//         "id": "terrorist",
//         "name": "Terrorist"
//       },
//       "legacy_model": false,
//       "image": "/default-weapons/T_gloves.webp"
//     },
//     {
//       "id": "knife-t",
//       "name": "T Knife",
//       "description": "A knife used by the Counter-Terrorist side. It’s sleek, practical, and effective for close combat, while offering a stylish appearance.",
//       "weapon": {
//         "id": "knife-t",
//         "weapon_id": 200,
//         "name": "CT Knife"
//       },
//       "category": {
//         "id": "sfui_invpanel_filter_knives",
//         "name": "Knives"
//       },
//       "pattern": {
//         "id": "default",
//         "name": "Default"
//       },
//       "min_float": 0.00,
//       "max_float": 1.00,
//       "rarity": {
//         "id": "rarity_legendary",
//         "name": "Legendary",
//         "color": true
//       },
//       "stattrak": false,
//       "souvenir": false,
//       "paint_index": "0",
//       "wears": [
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_0",
//           "name": "Factory New"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_1",
//           "name": "Minimal Wear"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_2",
//           "name": "Field-Tested"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_3",
//           "name": "Well-Worn"
//         },
//         {
//           "id": "SFUI_InvTooltip_Wear_Amount_4",
//           "name": "Battle-Scarred"
//         }
//       ],
//       "collections": [],
//       "crates": [],
//       "team": {
//         "id": "counter-terrorist",
//         "name": "Counter-Terrorist"
//       },
//       "legacy_model": false,
//       "image": "/default-weapons/T_knife.webp"
//     }
//   ]
// }

// export default defaultTLoadout



export default defaultTLoadout;
