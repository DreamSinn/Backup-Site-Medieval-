const generateButton = document.getElementById('generate-button');
const copyButton = document.getElementById('copy-button');
const promptArea = document.getElementById('prompt-area');
const notification = document.getElementById('notification');

// Definir palavras-chave para o tema medieval e das Cruzadas
const keywords = {
    environments: [
        "desolate battlefield", "crumbling castle", "foggy forest", "dark dungeon", "ancient ruins", 
        "treacherous mountain pass", "mystical temple", "underground catacombs", "quiet village", "stormy coastline",
        "abandoned monastery", "towering fortress", "golden plains", "haunted battlefield", "deserted city",
        "snow-covered hills", "enchanted forest", "barren wasteland", "forgotten shrine", "overgrown garden",
        "isolated keep", "tropical jungle", "deep cavern", "distant kingdom", "sacred grounds", 
        "frostbitten tundra", "rustic inn", "war-torn village", "darkened forest", "ancient marketplace",
        "stormy sky", "crumbling citadel", "eerie swamp", "mysterious island", "ruined bridge", 
        "northern fjords", "twilight village", "cliffside ruins", "flaming village", "haunted castle", 
        "dawn-lit battlefield", "silent mountains", "forgotten temple", "cursed lands", "sunset plains", 
        "forest clearing", "midnight forest", "serene lake", "abandoned fort", "deep woodlands",
        "sacred temple", "riverbank", "crumbling tower", "desert oasis", "twin mountains", 
        "ancient battlefield", "lost temple", "hidden caves", "sunset coast", "weathered path",
        "open plains", "haunted grove", "mystic cavern", "overgrown ruins", "shadowed alley"
    ],
    adjectives: [
        "noble", "brave", "fearless", "ancient", "heroic", "valiant", "mighty", "loyal", "sturdy", "honorable",
        "wise", "venerable", "sacred", "fearsome", "unwavering", "regal", "mysterious", "dark", "unyielding", "fierce",
        "glorious", "sublime", "majestic", "shadowed", "grim", "war-torn", "vicious", "chivalrous", "bloodied", 
        "gilded", "forgotten", "wicked", "unstoppable", "fiery", "unforgiving", "serene", "ominous", "unbroken",
        "brutal", "bold", "epic", "unmatched", "honored", "enchanted", "blessed", "sacrosanct", "invincible",
        "troubled", "silent", "desolate", "ancient", "whispered", "mournful", "warlike", "timeless", "hallowed",
        "revered", "stirring", "tragic", "legendary", "terrifying", "unyielding", "wild", "mystical", "allegorical"
    ],
    nouns: [
        "sword", "shield", "helmet", "castle", "kingdom", "village", "knight", "warrior", "archer", "crossbow", 
        "fortress", "banner", "scepter", "dragon", "griffin", "magic staff", "king", "queen", "monk", "paladin", 
        "temple", "battle axe", "cavalry", "throne", "queen's crown", "sword of destiny", "dragon egg", "bow", 
        "catapult", "empire", "knighthood", "ranger", "sorcerer", "wizard", "paladin's armor", "goblin", 
        "beast", "dungeon", "spellbook", "warrior's shield", "mace", "royal seal", "bastion", "royal decree", 
        "war banner", "ancient relic", "holy relic", "battle horn", "enchanted blade", "spear", "baron", 
        "princess", "knight's oath", "scroll", "glowing gem", "sorcery", "dragon's heart", "sorcerer's staff", 
        "divine intervention", "sword of the ancients", "throne room", "royal guard", "arena", "blessed talisman"
    ],
    verbs: [
        "march", "conquer", "defend", "invade", "slay", "reclaim", "forge", "defeat", "siege", "protect", 
        "charge", "decimate", "guard", "betray", "invade", "destroy", "fortify", "strike", "retreat", "wage", 
        "swear", "honor", "lead", "betray", "enslave", "besiege", "attack", "overthrow", "defend", "wage war",
        "avenge", "rally", "pillaging", "fortify", "weaken", "hunt", "enchant", "perish", "liberate", 
        "consolidate", "scout", "reclaim", "defy", "wage battle", "sworn", "destroy", "forage", "defend",
        "expel", "retaliate", "sworn", "curse", "purge", "overrun", "murder", "abolish", "oppose", "rescue", 
        "confront", "ransom", "claim", "invigorate", "conqueror", "defeat", "pillaging", "enslave"
    ],
    moodStyle: [
        "glorious", "heroic", "tragic", "epic", "mournful", "sombre", "ominous", "majestic", "chaotic", "romantic", 
        "gritty", "brutal", "fantastical", "otherworldly", "melancholic", "noble", "tragic", "dreamlike", 
        "mystical", "haunting", "mystical", "inspiring", "stoic", "romantic", "desolate", "war-torn", "legendary", 
        "calm", "ferocious", "turbulent", "whimsical", "daunting", "ominous", "uplifting", "vengeful", "melancholy", 
        "grand", "inspiring", "mournful", "triumphant", "intense", "tragic", "savage", "despairing", "vivid", 
        "dramatic", "legendary", "bitter", "stoic", "stormy", "majestic", "brutal", "devastating", "tragic", "surreal"
    ],
    technicalDescriptive: [
        "rusted armor", "moss-covered stone", "cracked sword", "dusty tome", "ancient scroll", "shimmering shield", 
        "glowing emblem", "hardened leather", "weathered banner", "frost-covered spire", "gold-encrusted hilt", 
        "gleaming steel", "crumbling brick", "smoldering ruins", "rotten wood", "polished sword", "etched stone", 
        "scorched earth", "smoke-filled air", "blood-soaked ground", "burnt ruins", "frostbitten air", "sprawling cityscape", 
        "tattered cloak", "crumbling parchment", "ancient tome", "overgrown ivy", "glowing runes", "golden treasure",
        "chained gate", "broken wheel", "glistening armor", "whispers of magic", "dusty scrolls", "sacred anvil", 
        "enchanted armor", "rustic wood", "tattered banner", "war-torn flag", "shattered glass", "arcane sigils", 
        "runic symbols", "dim lantern", "grinding wheels", "forged steel", "bloodied earth", "seeping wounds", 
        "aged parchment", "weathered shield", "ancient door", "faded mural", "dust-filled halls", "iron bars", 
        "stone stairwell", "echoing voice", "lost relic", "grimy scroll", "distant drumbeats", "blood-spattered ground"
    ],
    colors: [
        "crimson", "emerald", "golden", "silver", "onyx", "sapphire", "amber", "obsidian", "ivory", "cobalt", 
        "ruby", "jade", "scarlet", "platinum", "charcoal", "copper", "tarnished bronze", "azure", "pearl", 
        "onyx black", "bronze", "rose gold", "peach", "obsidian black", "molten silver", "pale gold", "ashen", 
        "carmine", "midnight blue", "taupe", "graphite", "blood red", "nightfall blue", "dark slate", "silver moon", 
        "deep brown", "glimmering silver", "rich gold", "snow white", "cherry red", "emerald green", "stone grey", 
        "sapphire blue", "brass", "brilliant gold", "forest green", "royal purple", "frosted pink", "rust", 
        "warm amber", "dark emerald", "pale violet", "bright citrine", "bronzed copper", "mossy green", 
        "lemon yellow", "misty gray", "frosty white", "burnt orange", "pearl grey", "bright cerulean", "stormy grey",
        "deep indigo", "dusk violet", "fiery red", "glowing violet", "storm cloud grey", "deep bronze", "misty teal"
    ]
};


// Arrays for beginning and ending prompts (backup)
let usedBeginnings = [];
let usedEndings = [];

function randomizeKeywords() {
    const beginnings = [
        "/imagine prompt: A mighty knight standing at the entrance of a medieval castle, surrounded by",
        "/imagine prompt: In the heart of a battle-torn landscape, where",
        "/imagine prompt: Beneath the shadow of a towering castle, there is",
        "/imagine prompt: A proud crusader raising his sword high above a burning village, where",
        "/imagine prompt: In the midst of a great crusade, a knight stands ready for battle, surrounded by",
        "/imagine prompt: As the sun sets over the fortress walls, the air is filled with",
        "/imagine prompt: In a deep medieval forest, the sound of an approaching army echoes, and",
        "/imagine prompt: The royal banner flutters high above a grand castle, where",
        "/imagine prompt: At the crossroads of an ancient kingdom, where",
        "/imagine prompt: The great hall of a fortified castle is filled with knights and warriors, preparing for",
        "/imagine prompt: As the great crusaders march towards battle, the path is lined with",
        "/imagine prompt: The sound of clashing swords echoes through the ancient city walls, and",
        "/imagine prompt: Beneath the ancient ruins of a crusader fortress, a lone knight stands with",
        "/imagine prompt: On the edge of a vast battlefield, the banner of the king rises high above the soldiers, where",
        "/imagine prompt: In a quiet medieval village, the smell of freshly baked bread mixes with the scent of",
        "/imagine prompt: At the edge of a vast forest, a lonely knight looks towards a distant castle, where"
    ];

    const endings = [
        "the land is filled with ash and the remnants of once-great warriors. The scene is tragic and war-torn.",
        "the light of a dying sun casts an ominous glow over the battlefield, and the echoes of war can still be heard.",
        "the wind carries the scent of smoke and burning ruins, while the sky is darkened with clouds of war.",
        "a sense of dread fills the air as the winds howl across the blood-soaked battlefield.",
        "the horizon glows with the fire of a thousand dying warriors, their memories fading into the history of the kingdom.",
        "a shroud of darkness hangs over the castle, and the screams of the fallen echo through the halls.",
        "the earth trembles beneath the march of soldiers, each step bringing them closer to their fate.",
        "the echo of clashing swords is drowned out by the roars of the surrounding armies, as the battle rages on.",
        "the once-proud banner of the kingdom flutters in the wind, torn and bloodstained from years of war.",
        "the world is silent, save for the creaking of the castle walls and the steady march of warriors across the battlefield.",
        "the whispers of old legends stir in the air, and the heroes of the kingdom rise from the ashes of their past.",
        "the smoke from burning villages fills the air, and the sound of galloping horses fades into the distance.",
        "the dark clouds part, revealing a shining knight who rides alone into the heart of the kingdom's fallen glory.",
        "a lone crusader kneels before a fallen king, sword raised to the sky as the storm clouds begin to clear.",
        "a great warship drifts silently through fog-covered waters, its hull scarred by battle yet resolute in its mission.",
        "the final blow is struck, and the kingdom’s fate hangs in the balance, shrouded in uncertainty."
    ];

    // Select random elements from each array
    const beginning = beginnings[Math.floor(Math.random() * beginnings.length)];
    const environment = keywords.environments[Math.floor(Math.random() * keywords.environments.length)];
    const adjective = keywords.adjectives[Math.floor(Math.random() * keywords.adjectives.length)];
    const noun = keywords.nouns[Math.floor(Math.random() * keywords.nouns.length)];
    const verb = keywords.verbs[Math.floor(Math.random() * keywords.verbs.length)];
    const mood = keywords.moodStyle[Math.floor(Math.random() * keywords.moodStyle.length)];
    const technical = keywords.technicalDescriptive[Math.floor(Math.random() * keywords.technicalDescriptive.length)];
    const color = keywords.colors[Math.floor(Math.random() * keywords.colors.length)];
    const ending = endings[Math.floor(Math.random() * endings.length)];

    // Update the prompt area with the generated prompt
    promptArea.innerText = `${beginning} ${environment}, ${adjective} ${noun}, wielding a ${adjective} ${noun}, ready to ${verb}. The atmosphere is ${mood} and filled with ${technical}. The colors are rich with ${color}. ${ending}`;
}

// Add event listeners to the buttons
generateButton.addEventListener('click', () => {
    randomizeKeywords();
    notification.style.display = 'none'; // Hide notification when new prompt is generated
});

copyButton.addEventListener('click', () => {
    const textToCopy = promptArea.innerText;
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            notification.style.display = 'block'; // Show notification when prompt is copied
            setTimeout(() => {
                notification.style.display = 'none'; // Hide notification after a short time
            }, 2000);
        });
    }
});
