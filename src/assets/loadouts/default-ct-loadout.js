const defaultCtLoadout = {
  name: "Default CT Loadout",
  faction: "counter-terrorists",
  loadout: [
    {
      id: "agent-ct-default",
      name: "Counter-Terrorist",
      team: "counter-terrorists",
      category: { name: "agent" },
      rarity: { color: false },
      image: "/default-weapons/CT_agent.webp"
    },
    {
      id: "weapon-m4a4",
      name: "M4A4",
      weapon: { name: "M4A4" },
      category: { name: "Rifles" },
      rarity: { color: false },
      image: "/default-weapons/M4A4.webp"
    },
    {
      id: "skin-m4a1s",
      name: "M4A1-S",
      weapon: { name: "M4A1-S" },
      category: { name: "Rifles" },
      rarity: { color: false },
      image: "/default-weapons/M4A1-S.webp"
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
      id: "weapon-usp-s",
      name: "USP-S",
      weapon: { name: "USP-S" },
      category: { name: "Pistols" },
      rarity: { color: false },
      image: "/default-weapons/USP-S.webp"
    },
    {
      id: "weapon-p2000",
      name: "P2000",
      weapon: { name: "P2000" },
      category: { name: "Pistols" },
      rarity: { color: false },
      image: "/default-weapons/P2000.webp"
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
      id: "weapon-five-seven",
      name: "Five-SeveN",
      weapon: { name: "Five-SeveN" },
      category: { name: "Pistols" },
      rarity: { color: false },
      image: "/default-weapons/Five_Seven.webp"
    },
    {
      id: "gloves-ct",
      name: "CT Gloves",
      weapon: { name: "CT Gloves" },
      category: { name: "Gloves" },
      rarity: { color: false },
      image: "/default-weapons/CT_gloves.webp"
    },
    {
      id: "knife-ct",
      name: "CT Knife",
      weapon: { name: "CT Knife" },
      category: { name: "Knives" },
      rarity: { color: false },
      image: "/default-weapons/CT_knife.webp"
    }
  ]
};


// const defaultCtLoadout = {
//   name: "Default CT Loadout",
//   faction: "ct", 
//   loadout: [
//     {
//       "id": "weapon-m4a4",
//       "name": "M4A4",
//       "description": "The M4A4 is a fully automatic rifle, used primarily by the Counter-Terrorist side. Known for its accuracy and power in mid-range combat.",
//       "weapon": {
//         "id": "m4a4",
//         "weapon_id": 4,
//         "name": "M4A4"
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
//       "image": "/default-weapons/M4A4.webp"
//     },
//     {
//       "id": "skin-m4a1s",
//       "name": "M4A1-S",
//       "description": "The M4A1-S is a variant of the M4A4 with a suppressor, reducing recoil and making it quieter.",
//       "weapon": {
//         "id": "m4a1s",
//         "weapon_id": 3,
//         "name": "M4A1-S"
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
//       "paint_index": "1001",
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
//       "image": "/default-weapons/M4A1-S.webp"
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
//       "id": "weapon-usp-s",
//       "name": "USP-S",
//       "description": "A fan favorite from Counter-Strike Source, the silenced USP Pistol has a detachable silencer that gives shots less recoil while suppressing attention-getting noise.",
//       "weapon": {
//         "id": "usp-s",
//         "weapon_id": 61,
//         "name": "USP-S"
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
//         "id": "counter-terrorist",
//         "name": "Counter-Terrorist"
//       },
//       "legacy_model": false,
//       "image": "/default-weapons/USP-S.webp"
//     },
//     {
//       "id": "weapon-p2000",
//       "name": "P2000",
//       "description": "Accurate and controllable, the German-made P2000 is a serviceable first-round pistol that works best against unarmored opponents.",
//       "weapon": {
//         "id": "p2000",
//         "weapon_id": 32,
//         "name": "P2000"
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
//         "id": "counter-terrorist",
//         "name": "Counter-Terrorist"
//       },
//       "legacy_model": false,
//       "image": "/default-weapons/P2000.webp"
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
//       "id": "gloves-ct",
//       "name": "CT Gloves",
//       "description": "Protective gloves used by the Counter-Terrorist team. They provide both functionality and style for tactical operations.",
//       "weapon": {
//         "id": "gloves-ct",
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
//         "id": "counter-terrorist",
//         "name": "Counter-Terrorist"
//       },
//       "legacy_model": false,
//       "image": "/default-weapons/CT_gloves.webp"
//     },
//     {
//       "id": "knife-ct",
//       "name": "CT Knife",
//       "description": "A knife used by the Counter-Terrorist side. It’s sleek, practical, and effective for close combat, while offering a stylish appearance.",
//       "weapon": {
//         "id": "knife-ct",
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
//       "image": "/default-weapons/CT_knife.webp"
//     }
//   ]
// }

// export default defaultCtLoadout


export default defaultCtLoadout;