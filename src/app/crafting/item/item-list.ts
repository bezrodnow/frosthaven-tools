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
  {
    id: 53,
    name: 'Hobnail Boots',
    description: "After you move 4 or more hexes during your turn, gain Retaliate 1 for the round.",
    type: ItemType.Feet,
    usageType: ItemUsageType.Passive,
    items: [18, 88],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 54,
    name: 'Restful Slippers',
    description: "During your short rest, instead of randomly losing one card from your discard pile, randomly draw three cards from your discard pile and choose one to lose.",
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [6, 92],
    resources: new Map<ResourceType, number>([
      [ResourceType.Snowthistle, 1],
    ])
  },
  {
    id: 55,
    name: 'Biting Gauntlet',
    description: "When you are attacked by an adjacent enemy, gain Retaliate 2 for the attack.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [94],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 56,
    name: "Scavenger's Magnet",
    description: "During your turn, (Consume Earth) to loot one adjacent loot token.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 1],
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 57,
    name: "Shovel",
    description: "During your turn, destroy one adjacent obstacle, hazardous terrain, difficult terrain, icy terrain, or trap tile.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 1],
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 58,
    name: "Slippery Sword",
    description: "During your melee attack ability, add +2 Attack to one attack. After the ability, gain Disarm.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [14, 85, 90],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 59,
    name: "Charm of Expertise",
    description: "At the start of the scenario, for the scenario, gain one 1-mark perk from your character sheet which you have not yet gained.",
    type: ItemType.Head,
    usageType: ItemUsageType.Passive,
    items: [11, 113],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 60,
    name: "Cloak of Many Pockets",
    description: "At the start of the scenario, bring up to two additional Small items.",
    type: ItemType.Body,
    usageType: ItemUsageType.Passive,
    items: [132],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 3],
    ])
  },
  {
    id: 61,
    name: "Spiked Shell",
    description: "Immediately after you are attacked by an adjacent enemy, that enemy suffers Damage X, where X is your Shield value for the attack.",
    type: ItemType.Body,
    usageType: ItemUsageType.Spent,
    items: [32, 105],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 62,
    name: "Everlasting Boots",
    description: "During your move ability, add +1 Movement and gain Regenerate.",
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [28, 99],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 63,
    name: "Shadow Stompers",
    description: "During your move ability, (Consume Dark) to add +2 Movement.",
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [13, 158],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 64,
    name: "Detonator",
    description: "When one of your summons is killed, all enemies adjacent to it suffers Damage 2 and gain Wound.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Consumed,
    items: [96, 112],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 65,
    name: "Rust Powder",
    description: "During your turn, place a character token on one normal or elite enemy within Range 3. That enemy gains -1 Shield for the scenario.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [157],
    resources: new Map<ResourceType, number>([
      [ResourceType.Corpsecap, 1],
    ])
  },
  {
    id: 66,
    name: "Amulet of Eternal Life",
    description: "At the start of your rests, perform: Heal 1 self",
    type: ItemType.Head,
    usageType: ItemUsageType.Passive,
    items: [109, 120],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 67,
    name: "Converging Lenses",
    description: "When you are attacked, add +1 Attack to the attack instead of drawing an attack modifier card and flip this card over. [FLIP] During your attack ability, add +1 Attack to one attack instead of drawing an attack modifier card an flip this card over.",
    type: ItemType.Head,
    usageType: ItemUsageType.Flip,
    items: [1, 93],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
    ])
  },
  {
    id: 68,
    name: "Scaled Armor",
    description: "On the next three sources of 2 or fewer Damage you would suffer, negate the Damage.",
    type: ItemType.Body,
    usageType: ItemUsageType.Consumed,
    items: [89, 123],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 69,
    name: "Feathered Cloak",
    description: "When you suffer Damage from an attack, (Consume Air) to gain Shield 3 for the attack.",
    type: ItemType.Body,
    usageType: ItemUsageType.Spent,
    items: [3, 233],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 70,
    name: "Aesther Robe",
    description: "Whenever you suffer Damage from Retaliate, reduce the Damage to 1. If the Damage is already 1, reduce it to 0 instead.",
    type: ItemType.Body,
    usageType: ItemUsageType.Passive,
    items: [27, 113],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 71,
    name: "Bone Boots",
    description: "After your ability where you kill an enemy, perform: Movement 4",
    type: ItemType.Feet,
    usageType: ItemUsageType.Consumed,
    items: [18],
    resources: new Map<ResourceType, number>([
      [ResourceType.Corpsecap, 1],
    ])
  },
  {
    id: 72,
    name: "Oak Staff",
    description: "During your turn, (Consume Light), to perform: Bless Range 3",
    type: ItemType.TwoHands,
    usageType: ItemUsageType.Spent,
    items: [91],
    resources: new Map<ResourceType, number>([
      [ResourceType.Lumber, 1],
    ])
  },
  {
    id: 73,
    name: "Energizing Baton",
    description: "When you apply a positive condition to an ally, a different ally within Range 3 gains the same condition.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [101],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 2],
    ])
  },
  {
    id: 74,
    name: "Shock Grenades",
    description: "During your turn, perform: Muddle Range 2 AOE",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [19, 97],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 75,
    name: "Rose Gauntlet",
    description: "After any ally within Range 2 suffers Damage from an attack, remove all negative conditions from the ally and then perform: Heal 3 Target the ally, Pull 1",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Consumed,
    items: [30],
    resources: new Map<ResourceType, number>([
      [ResourceType.Flamefruit, 1],
      [ResourceType.Snowthistle, 1],
    ])
  },
  {
    id: 76,
    name: "Horn of Command",
    description: "During one of your summons' turns, decide how it performs its abilities.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
      [ResourceType.Hide, 1],
      [ResourceType.Rockroot, 1],
    ])
  },
  {
    id: 77,
    name: "Chaos Cannon",
    description: "During your turn, replace one 1-hex obstacle, hazardous terrain, difficult terrain, or icy terrain tile in an unoccupied hex within Range 2 with a different type of tile listed above.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Consumed,
    items: [86],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 2],
    ])
  },
  {
    id: 78,
    name: "Balanced Scales",
    description: "Once each turn, during your attack ability, gain advantage on one attack, then flip this card over at the end of your turn. [FLIP] Once each turn, during your attack ability, gain disadvantage on one attack, then flip this card over at the end of your turn.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Flip,
    items: [110],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 1],
      [ResourceType.Hide, 1],
    ])
  },
  {
    id: 79,
    name: "Roasted Fowl",
    description: "During your turn, add +1 Attack to all your attacks and perform: Heal 2 self",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 2],
      [ResourceType.Flamefruit, 1],
      [ResourceType.Snowthistle, 1],
    ])
  },
  {
    id: 80,
    name: "Living Stone",
    description: "When you would suffer 4 or fewer Damage from an attack, negate the Damage and perform: Heal X self where X is the amount of damage you would have suffered.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [99, 156],
    resources: new Map<ResourceType, number>([
      [ResourceType.Rockroot, 1],
    ])
  },
  {
    id: 81,
    name: "Pain Simulacrum",
    description: "When you suffer 5 or fewer Damage from an attack, one enemy within Range 2 also suffers the same amount of Damage.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [97],
    resources: new Map<ResourceType, number>([
      [ResourceType.Hide, 2],
    ])
  },
  {
    id: 82,
    name: "Mechanical Cube",
    description: "During your move ability, after you enter any one hex, give Immobilize to all adjacent enemies.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [112],
    resources: new Map<ResourceType, number>([
      [ResourceType.Metal, 2],
    ])
  },
  {
    id: 83,
    name: "Healing Potion",
    description: "During your turn, perform: Heal 3 self",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Rockroot, 1],
    ])
  },
  {
    id: 84,
    name: "Stamina Potion",
    description: "During your turn, Recover one level 1 card from your discard pile.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Snowthistle, 1],
    ])
  },
  {
    id: 85,
    name: "Power Potion",
    description: "During your turn, add +1 Attack to all your attacks.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Axenut, 1],
    ])
  },
  {
    id: 86,
    name: "Element Potion",
    description: "During your turn, (Infuse Wild).",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 87,
    name: "Cure Potion",
    description: "During your turn, remove one negative condition you have. This item can be used while you have Impair or Stun.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Corpsecap, 1],
    ])
  },
  {
    id: 88,
    name: "Fireshield Potion",
    description: "During your turn, perform: Retaliate 1 Range 3",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Rockroot, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 89,
    name: "Stoneskin Potion",
    description: "During your turn, perform: Ward self",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Rockroot, 1],
      [ResourceType.Corpsecap, 1],
    ])
  },
  {
    id: 90,
    name: "Muscle Potion",
    description: "During your turn, perform: Strengthen self",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Axenut, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 91,
    name: "Holy Water",
    description: "During your turn, perform: Bless self",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Corpsecap, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 92,
    name: "Renewing Potion",
    description: "During your turn, Recover up to two of your spent items.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Rockroot, 1],
      [ResourceType.Snowthistle, 1],
    ])
  },
  {
    id: 93,
    name: "Glancing Potion",
    description: "When you reveal a NULL attack modifier card from your attack modifier deck, treat it as a +0 instead.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Rockroot, 1],
      [ResourceType.Axenut, 1],
    ])
  },
  {
    id: 94,
    name: "Frenzy Potion",
    description: "During your turn, perform: Attack 2",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Corpsecap, 1],
      [ResourceType.Axenut, 1],
    ])
  },
  {
    id: 95,
    name: "Poison Vial",
    description: "During your turn, perform: Poison Range 1",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Snowthistle, 1],
      [ResourceType.Corpsecap, 1],
    ])
  },
  {
    id: 96,
    name: "Flame Vial",
    description: "During your turn, perform: Wound Range 1",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Snowthistle, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 97,
    name: "Explosive Vial",
    description: "During your turn, one enemy within Range 2 suffers Damage 2",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Snowthistle, 1],
      [ResourceType.Axenut, 1],
    ])
  },
  {
    id: 98,
    name: "Unhealthy Mixture",
    description: "During your turn, perform: Wound, Poison self",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 99,
    name: "Major Healing Potion",
    description: "During your turn, perform: Heal 6 self",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Rockroot, 1],
      [ResourceType.Snowthistle, 1],
    ])
  },
  {
    id: 100,
    name: "Major Stamina Potion",
    description: "During your turn, Recover one card from your discard pile.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Snowthistle, 1],
      [ResourceType.Axenut, 1],
    ])
  },
  {
    id: 101,
    name: "Major Power Potion",
    description: "During your turn, add +2 Attack to all your attacks.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Axenut, 1],
      [ResourceType.Corpsecap, 1],
    ])
  },
  {
    id: 102,
    name: "Major Element Potion",
    description: "During your turn, (Infuse Wild) (Infuse Wild)",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Axenut, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 103,
    name: "Major Cure Potion",
    description: "During your turn, remove all negative conditions you have. This item can be used while you have Impair or Stun.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Corpsecap, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 104,
    name: "Swiftness Potion",
    description: "During your move ability, add +3 Movement and Jump",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Rockroot, 1],
      [ResourceType.Axenut, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 105,
    name: "Major Fireshield Potion",
    description: "During your turn, perform: Retaliate 2 Range 3",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Rockroot, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 106,
    name: "Stonewall Potion",
    description: "During your turn, perform: Ward Target 2 adjacent allies and self",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Rockroot, 1],
      [ResourceType.Axenut, 1],
    ])
  },
  {
    id: 107,
    name: "Vigor Potion",
    description: "During your turn, perform: Strengthen Target 2 adjacent allies and self",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Rockroot, 1],
      [ResourceType.Corpsecap, 1],
    ])
  },
  {
    id: 108,
    name: "Holy Rain",
    description: "During your turn, perform: Bless Target 2 adjacent allies and self",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Snowthistle, 1],
      [ResourceType.Corpsecap, 1],
    ])
  },
  {
    id: 109,
    name: "Major Renewing Potion",
    description: "During your turn, Recover up to one of your lost 2-herb potions.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Rockroot, 1],
      [ResourceType.Snowthistle, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 110,
    name: "Precision Potion",
    description: "When you reveal a NULL attack modifier card from your attack modifier deck, treat it as a +2 instead.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Rockroot, 1],
      [ResourceType.Snowthistle, 1],
      [ResourceType.Corpsecap, 1],
    ])
  },
  {
    id: 111,
    name: "Major frenzy Potion",
    description: "During your turn, perform: Attack 4",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Rockroot, 1],
      [ResourceType.Axenut, 1],
      [ResourceType.Corpsecap, 1],
    ])
  },
  {
    id: 112,
    name: "Hammer Potion",
    description: "During your turn, suffer Damage 10",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Rockroot, 1],
      [ResourceType.Snowthistle, 1],
      [ResourceType.Axenut, 1],
    ])
  },
  {
    id: 113,
    name: "Expertise Potion",
    description: "At the start of your turn, discard one of your played cards to perform both the top and the bottom actions of your other played card. At most one action can trigger a Lost icon.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Rockroot, 1],
      [ResourceType.Corpsecap, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 114,
    name: "Foresight Potion",
    description: "During your turn, reveal the top card of one monster ability deck. You may place the card on the bottom of the deck.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Snowthistle, 1],
      [ResourceType.Corpsecap, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 115,
    name: "Infusion Potion",
    description: "During your turn, ignore one elemental consumption symbol on an action you played and gain it's effect.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Axenut, 1],
      [ResourceType.Corpsecap, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 116,
    name: "Plague Flask",
    description: "During your turn, perform: Poison Range 1 AOE",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Snowthistle, 1],
      [ResourceType.Axenut, 1],
      [ResourceType.Corpsecap, 1],
    ])
  },
  {
    id: 117,
    name: "Inferno Flask",
    description: "During your turn, perform: Wound Range 1 AOE",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Snowthistle, 1],
      [ResourceType.Axenut, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 118,
    name: "Fulminant Flask",
    description: "During your turn, one enemy within Range 2 suffers Damage 4.",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Arrowvine, 1],
      [ResourceType.Snowthistle, 1],
      [ResourceType.Flamefruit, 1],
    ])
  },
  {
    id: 119,
    name: "Deadly Mixture",
    description: "During your turn, perform: Wound, Poison, Immobilize, Disarm self",
    type: ItemType.Small,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([])
  },
  {
    id: 120,
    name: "Amulet of Life",
    description: "During your turn, perform: Heal 1 self",
    type: ItemType.Head,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 15],
    ])
  },
  {
    id: 121,
    name: "Circle of Elements",
    description: "During your turn, perform: (Consume Wild): (Infuse Wild)",
    type: ItemType.Head,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 25],
    ])
  },
  {
    id: 122,
    name: "Warden's Robes",
    description: "When one of your summons suffers Damage from an attack, that summon gains Shield 2 for the attack.",
    type: ItemType.Body,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 30],
    ])
  },
  {
    id: 123,
    name: "Leather Armor",
    description: "When you are attacked, before drawing an attack modifier card, the attacker gains disadvantage on the attack.",
    type: ItemType.Body,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 15],
    ])
  },
  {
    id: 124,
    name: "Winged Shoes",
    description: "During your turn, add Jump to all your move abilities.",
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 15],
    ])
  },
  {
    id: 125,
    name: "Boots of Speed",
    description: "During ordering of initiative after all ability cards have been revealed, increase or decrease your initiative by 10.",
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 30],
    ])
  },
  {
    id: 126,
    name: "Weighted Net",
    description: "During your ranged attack ability, add Immobilize to one attack.",
    type: ItemType.TwoHands,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 20],
    ])
  },
  {
    id: 127,
    name: "Poison Dagger",
    description: "During your melee attack ability, add Poison to one attack.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 15],
    ])
  },
  {
    id: 128,
    name: "Heater Shield",
    description: "When you suffer Damage from an attack, gain Shield 1 for the attack.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 15],
    ])
  },
  {
    id: 129,
    name: "Eagle-Eye Goggles",
    description: "During your attack ability, gain advantage on all attacks.",
    type: ItemType.Head,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 30],
    ])
  },
  {
    id: 130,
    name: "Iron Helmet",
    description: "When you are attacked, treat any 2x attack modifier card the enemy draws as a +0 instead.",
    type: ItemType.Head,
    usageType: ItemUsageType.Passive,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 20],
    ])
  },
  {
    id: 131,
    name: "Chainmail",
    description: "On the next three sources of Damage from attacks targeting you, gain Shield 1 for the attacks.",
    type: ItemType.Body,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 25],
    ])
  },
  {
    id: 132,
    name: "Cloak of Pockets",
    description: "At the start of the scenario bring one additional Small item",
    type: ItemType.Body,
    usageType: ItemUsageType.Passive,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 30],
    ])
  },
  {
    id: 133,
    name: "Nimble Legguards",
    description: "When an adjacent ally would be targeted by an attack, you are targeted instead, regardless of range and line-of-sight.",
    type: ItemType.Feet,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 20],
    ])
  },
  {
    id: 134,
    name: "Comfortable Shoes",
    description: "When you use the basic bottom action of an ability card, perform Move 3 instead of Move 2",
    type: ItemType.Feet,
    usageType: ItemUsageType.Passive,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 30],
    ])
  },
  {
    id: 135,
    name: "Armorbane Bow",
    description: "During your turn, add Pierce 3 to all your ranged attacks.",
    type: ItemType.TwoHands,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 30],
    ])
  },
  {
    id: 136,
    name: "Battle Axe",
    description: "During your single-target melee attack ability, change the targeting of the ability to: AOE",
    type: ItemType.TwoHands,
    usageType: ItemUsageType.Consumed,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 20],
    ])
  },
  {
    id: 137,
    name: "Tower Shield",
    description: "When you suffer Damage from an attack, gain Shield 2 for the attack.",
    type: ItemType.OneHand,
    usageType: ItemUsageType.Spent,
    items: [],
    resources: new Map<ResourceType, number>([
      [ResourceType.Gold, 35],
    ])
  },
]
