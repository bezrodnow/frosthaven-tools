import {Item, ItemType, ItemUsageType} from "./item";
import {ResourceType} from "../resource";

export const items: Item[] = [
  {
    id: 1,
    name: 'Spyglass',
    description: 'During your attack ability, gain advantage on one attack.',
    type: ItemType.Head,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 2,
    name: 'Crude Helmet',
    description: 'When you are attacked, treat any 2x attack modifier card the enemy draws as a +1 instead.',
    type: ItemType.Head,
    usageType: ItemUsageType.Passive,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 3,
    name: 'Traveling Cloak',
    description: 'At the start of the scenario increase your maximum hit point value by 1.',
    type: ItemType.Body,
    usageType: ItemUsageType.Passive,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 4,
    name: 'Crude Hide Armor',
    description: 'On the next two attacks targeting you, the attacker gains disadvantage.',
    type: ItemType.Body,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 2],
    ])
  },
  {
    id: 5,
    name: 'Crude Boots',
    description: 'During your move ability, add +1 Movement.',
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 2],
    ])
  },
  {
    id: 6,
    name: 'Flexible Slippers',
    description: 'During your end-of-turn looting, loot an adjacent hex instead of the hex you occupy.',
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 7,
    name: 'Crude Bow',
    description: 'During your turn, add +1 Range to one of your ranged attacks.',
    type: ItemType.TwoHands,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 1],
    ])
  },
  {
    id: 8,
    name: 'Crude Spear',
    description: 'During your turn, one of your single-target melee attack abilities may target an enemy two hexes away.',
    type: ItemType.TwoHands,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 1],
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 9,
    name: 'Protective Scepter',
    description: 'During your turn, grant one ally within Range 2: Shield 1',
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 1],
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 10,
    name: 'Crude Shield',
    description: 'When an enemy would apply a negative condition to you, prevent the condition.',
    type: ItemType.OneHand,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 11,
    name: 'Simple Charm',
    description: 'At the start of the scenario, remove one -1 attack modifier card from you attack modifier deck.',
    type: ItemType.Head,
    usageType: ItemUsageType.Passive,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 2],
    ])
  },
  {
    id: 12,
    name: 'Crude Chain Armor',
    description: 'When you suffer Damage from an attack, gain Shield 2 for the attack.',
    type: ItemType.Body,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 13,
    name: 'Dancing Slippers',
    description: 'After you suffer Damage from an attack, perform: Movement 2',
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 1],
      [ResourceType.Snowthistle, 1],
    ])
  },
  {
    id: 14,
    name: 'Heavy Sword',
    description: 'During your melee attack ability, add +1 Attack to one attack.',
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 15,
    name: 'Reinforced Shield',
    description: 'When an enemy would apply a negative condition to you, prevent the condition.',
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [10],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 1],
    ])
  },
  {
    id: 16,
    name: 'Inspiring Helmet',
    description: 'During your turn grant all adjacent allies: Movement 2',
    type: ItemType.Head,
    usageType: ItemUsageType.Consumed,
    items: [2],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 17,
    name: 'Cured Leather Armor',
    description: 'On the next two attacks targeting you, the attacker gains disadvantage.',
    type: ItemType.Body,
    usageType: ItemUsageType.Spent,
    items: [4, 98],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 18,
    name: 'Rough Boots',
    description: 'During your turn add +1 Movement to all your move abilities.',
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [5],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 19,
    name: 'Ringing Hammer',
    description: 'During your attack ability, add Muddle to all attacks.',
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 1],
      [ResourceType.Metal, 1],
      [ResourceType.Axenut, 1],
    ])
  },
  {
    id: 20,
    name: 'Well-Strung Bow',
    description: 'During your turn, add +1 Range to all your ranged attacks.',
    type: ItemType.TwoHands,
    usageType: ItemUsageType.Spent,
    items: [7],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
    ])
  },
  {
    id: 21,
    name: 'Chain Hood',
    description: 'While you are adjacent to three or more enemies, gain Shield 1.',
    type: ItemType.Head,
    usageType: ItemUsageType.Passive,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 3],
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 22,
    name: 'Heavy Chain Armor',
    description: 'When you suffer Damage from an attack, gain Shield 3 for the attack.',
    type: ItemType.Body,
    usageType: ItemUsageType.Spent,
    items: [12],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 23,
    name: 'Sturdy Greaves',
    description: 'At the start of your turn, add -2 Movement to all your move abilities to gain Shield 1 this round.',
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 2],
      [ResourceType.Hide, 2],
    ])
  },
  {
    id: 24,
    name: 'Corrupted Blade',
    description: 'During your melee attack ability, add Wound, Poison, and Muddle to one attack.',
    type: ItemType.OneHand,
    usageType: ItemUsageType.Consumed,
    items: [14, 98],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 25,
    name: 'Soothing Scepter',
    description: 'During your turn, perform: Regenerate Target 1 ally, Range 2',
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 1],
      [ResourceType.Hide, 1],
      [ResourceType.Rockroot, 1],
    ])
  },
  {
    id: 26,
    name: 'Truesight Lenses',
    description: 'During your attack ability, treat all negative and NULL modifier cards as +0 instead.',
    type: ItemType.Head,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 27,
    name: 'Cloak of Warding',
    description: 'Immediately after an enemy ends its move ability adjacent to you, perform: Push 1 Target the enemy',
    type: ItemType.Body,
    usageType: ItemUsageType.Consumed,
    items: [3, 91],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 28,
    name: 'Sturdy Boots',
    description: 'During your turn, add +1 Movement to all your move abilities and ignore difficult terrain.',
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [18],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 29,
    name: 'Cleaving Axe',
    description: 'After your melee attack, one enemy adjacent to the target suffers Damage 2.',
    type: ItemType.TwoHands,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 1],
      [ResourceType.Metal, 2],
    ])
  },
  {
    id: 30,
    name: 'Parrying Gauntlet',
    description: 'Immediately after an enemy ends its move ability adjacent to you, perform: Attack 3 Target the enemy',
    type: ItemType.OneHand,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 1],
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 31,
    name: 'Deathproof Charm',
    description: 'When you would suffer Damage from any source, negate the Damage',
    type: ItemType.Head,
    usageType: ItemUsageType.Consumed,
    items: [11, 106],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 32,
    name: 'Shell Armor',
    description: 'During your turn, perform: Ward self',
    type: ItemType.Body,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 1],
      [ResourceType.Metal, 2],
      [ResourceType.Hide, 2],
    ])
  },
  {
    id: 33,
    name: 'Volatile Boots',
    description: 'Up to once each turn, during your move ability, add +1 Movement, then flip this card over at the end of your turn. [FLIP] Up to once each turn, during your move ability, suffer Damage 1, then flip this card over at the end of your turn.',
    type: ItemType.Feet,
    usageType: ItemUsageType.Flip,
    items: [18, 96],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 34,
    name: 'Shrapnel Bomb',
    description: 'After your ranged attack, all enemies adjacent to the target suffer Damage 2.',
    type: ItemType.OneHand,
    usageType: ItemUsageType.Consumed,
    items: [97],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 2],
    ])
  },
  {
    id: 35,
    name: 'Kite Shield',
    description: 'When you suffer Damage from an attack, gain Shield 1 for the attack and prevent any negative conditions from the attack.',
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 2],
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 36,
    name: 'Plumed Helmet',
    description: 'When you are attacked by an attack with disadvantage, treat all +0 and +1 attack modifier cards as -1.',
    type: ItemType.Head,
    usageType: ItemUsageType.Passive,
    items: [16],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 1],
      [ResourceType.Snowthistle, 1],
    ])
  },
  {
    id: 37,
    name: 'Ghost Cloak',
    description: 'During your turn, suffer Damage 3 to perform: Invisible self',
    type: ItemType.Body,
    usageType: ItemUsageType.Consumed,
    items: [3, 114],
    resources: new Map<ResourceType, number>([
      [ResourceType.Corpsecap, 1],
    ])
  },
  {
    id: 38,
    name: "Duelist's Shoes",
    description: 'During your turn, perform: Movement 2. This movement must end adjacent to an enemy.',
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [13, 113],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 39,
    name: 'Abyss Axe',
    description: 'During your attack ability, add +3 Attack and Pierce 1 to one attack targeting a Frozen Corpse, Ice Wraith, or Living Doom.',
    type: ItemType.TwoHands,
    usageType: ItemUsageType.Spent,
    items: [29, 101, 112],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 40,
    name: 'Heartstrike Bow',
    description: 'During your turn, add +1 Attack and +2 Range to one of your ranged attacks.',
    type: ItemType.TwoHands,
    usageType: ItemUsageType.Spent,
    items: [20, 85],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 1],
    ])
  },
  {
    id: 41,
    name: 'Intricate Charm',
    description: 'At the start of the scenario, remove one +0 and one -1 attack modifier card from your attack modifier deck.',
    type: ItemType.Head,
    usageType: ItemUsageType.Passive,
    items: [11, 110],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 42,
    name: 'Ornate Armor',
    description: 'On the next two source of Damage from attacks targeting you, gain Shield 2 for the attacks.',
    type: ItemType.Body,
    usageType: ItemUsageType.Spent,
    items: [112],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 3],
    ])
  },
  {
    id: 43,
    name: 'Kicking Boots',
    description: 'During your melee attack ability, add Push 2 to one attack.',
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [28, 90],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 44,
    name: 'Sword of Absolution',
    description: 'When you would gain Poison or Curse, gain Bless instead.',
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [24, 108],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 45,
    name: 'Master Scepter',
    description: 'During your turn, perform: Heal 1 Target 1 ally, Range 2, Ward',
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [9, 25],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 46,
    name: 'Double-Lens Goggles',
    description: 'During your attack ability, gain advantage on all attacks and treat all +0 and -1 attack modifier cards as +1 instead.',
    type: ItemType.Head,
    usageType: ItemUsageType.Spent,
    items: [26, 129],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 47,
    name: 'Robes of Doom',
    description: 'On the next two sources of Damage from attacks targeting you, suffer Damage 3 to give the attacker Brittle.',
    type: ItemType.Body,
    usageType: ItemUsageType.Spent,
    items: [27, 119, 162],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 48,
    name: 'Living Shoes',
    description: "After any ally's heal ability targeting you, perform: Movement 2",
    type: ItemType.Feet,
    usageType: ItemUsageType.Passive,
    items: [13],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 2],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 49,
    name: 'Cruel Dagger',
    description: "During your melee attack ability, add +1 Damage and Wound to one attack.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [111, 145],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 50,
    name: 'Shield of Reciprocity',
    description: "When you suffer Damage from an attack, gain Shield 1 for the attack and flip this card over. [FLIP] During your melee attack ability, add Pierce 1 to one attack and flip this card over.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Flip,
    items: [35, 105, 161],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 51,
    name: 'Spiked Collar',
    description: "During your turn, perform: Wound self",
    type: ItemType.Head,
    usageType: ItemUsageType.Spent,
    items: [11],
    resources: new Map<ResourceType, number>([
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 52,
    name: 'Laser Lens',
    description: "During your turn, (Consume Fire) to cause up to two enemies within Range 4 to suffer Damage 1.",
    type: ItemType.Head,
    usageType: ItemUsageType.Spent,
    items: [97, 129],
    resources: new Map<ResourceType, number>([])
  },
]
