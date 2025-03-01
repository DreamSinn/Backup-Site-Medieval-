const generateButton = document.getElementById('generate-button');
const promptArea = document.getElementById('prompt-area');
const notification = document.getElementById('notification');
const negativePromptInput = document.getElementById('negative-prompt');

const keywords = {
    environments: [
        "medieval castle", "dark forest", "ancient ruins", "stone fortress", "mystic village", "dragon's lair", "enchanted woods",
        "gothic cathedral", "haunted graveyard", "royal palace", "wizard's tower", "battlefield", "mountain stronghold", "hidden cave",
        "cursed swamp", "viking village", "medieval town square", "knight's keep", "ancient library", "forgotten temple", "dwarven mine",
        "elven sanctuary", "witch's hut", "royal court", "dark dungeon", "enchanted lake", "mystic portal", "ancient battlefield",
        "shadowy valley", "frosted peaks", "deserted village", "cursed ruins", "sacred grove", "dragon's peak", "wizard's laboratory",
        "haunted castle", "royal garden", "ancient crypt", "mystic waterfall", "enchanted meadow", "dark citadel", "knight's training ground",
        "viking longhouse", "medieval marketplace", "ancient observatory", "forgotten shrine", "dwarven forge", "elven treehouse",
        "witch's cauldron", "royal banquet hall", "dark catacombs", "enchanted river", "mystic glade", "ancient battlefield"
    ],
    adjectives: [
        "dark", "mysterious", "ancient", "forgotten", "enchanted", "haunted", "cursed", "royal", "gothic", "shadowy",
        "frosted", "sacred", "dwarven", "elven", "wizardly", "knightly", "viking", "medieval", "mystic", "barbaric",
        "heroic", "legendary", "mythical", "epic", "ominous", "ethereal", "majestic", "spiritual", "divine", "arcane",
        "sorcerous", "dragonborn", "warrior-like", "chivalrous", "feudal", "rustic", "timeless", "grandiose", "mystical",
        "shadowed", "frostbitten", "sacrosanct", "dwarfish", "elvish", "wizardly", "knightly", "viking", "medieval", "mystic"
    ],
    nouns: [
        "castle", "forest", "ruins", "fortress", "village", "dragon", "woods", "cathedral", "graveyard", "palace",
        "tower", "battlefield", "stronghold", "cave", "swamp", "keep", "library", "temple", "mine", "sanctuary",
        "hut", "court", "dungeon", "lake", "portal", "valley", "peaks", "crypt", "waterfall", "meadow", "citadel",
        "training ground", "longhouse", "marketplace", "observatory", "shrine", "forge", "treehouse", "cauldron",
        "banquet hall", "catacombs", "river", "glade", "battlefield", "knight", "wizard", "witch", "dwarf", "elf",
        "viking", "king", "queen", "prince", "princess", "warrior", "mage", "rogue", "cleric", "bard", "druid", "sorcerer"
    ],
    verbs: [
        "battle", "defend", "conquer", "explore", "summon", "cast", "forge", "protect", "destroy", "curse",
        "enchant", "haunt", "resurrect", "train", "lead", "rule", "worship", "pray", "meditate", "study",
        "brew", "alchemize", "transform", "travel", "quest", "hunt", "track", "ambush", "raid", "pillage",
        "build", "repair", "guard", "scout", "negotiate", "betray", "ally", "fight", "retreat", "advance",
        "celebrate", "mourn", "sacrifice", "bless", "curse", "heal", "revive", "summon", "banish", "teleport"
    ],
    moodStyle: [
        "dark and ominous", "mysterious and foreboding", "ancient and forgotten", "enchanted and magical", "haunted and cursed",
        "royal and grandiose", "gothic and shadowy", "frosted and cold", "sacred and divine", "dwarven and sturdy",
        "elven and ethereal", "wizardly and arcane", "knightly and chivalrous", "viking and barbaric", "medieval and rustic",
        "mystic and spiritual", "heroic and legendary", "mythical and epic", "ominous and eerie", "ethereal and majestic",
        "spiritual and divine", "arcane and sorcerous", "dragonborn and fierce", "warrior-like and brave", "chivalrous and noble",
        "feudal and traditional", "rustic and timeless", "grandiose and majestic", "mystical and enchanting", "shadowed and dark",
        "frostbitten and cold", "sacrosanct and holy", "dwarfish and strong", "elvish and graceful", "wizardly and wise",
        "knightly and honorable", "viking and fierce", "medieval and historic", "mystic and otherworldly"
    ],
    technicalDescriptive: [
        "dark details", "mysterious lighting", "gothic colors", "ethereal atmosphere", "ancient patterns", "forgotten textures",
        "enchanted aura", "haunted details", "cursed contrasts", "royal edges", "gothic glow", "shadowy textures", "frosted environment",
        "sacred color palette", "dwarven light effect", "elven look", "wizardly textures", "knightly glow", "viking atmosphere",
        "medieval softness", "mystic vibrancy", "heroic warmth", "legendary polish", "mythical watery feel", "epic glistening",
        "ominous richness", "ethereal tones", "majestic water-soaked", "spiritual filmic finish", "divine glittering hue",
        "arcane soft glow", "sorcerous dreamlike light", "dragonborn blurred edges", "warrior-like softness", "chivalrous vibrant effect",
        "feudal glimmering", "rustic sharp detailing", "timeless milky hues", "grandiose lush contrast", "mystical whispery effect",
        "shadowed emollient texture", "frostbitten deep tones", "sacrosanct brushed light", "dwarfish clear-cut textures",
        "elvish bright overlay", "wizardly playful edge", "knightly vibrating hues", "viking rich detail", "medieval sunny warmth",
        "mystic aerial view", "heroic soft brushstrokes", "legendary shining contour", "mythical cool shadows", "epic color blends",
        "ominous glassy texture", "ethereal vintage vibe"
    ],
    colors: [
        "dark crimson", "midnight blue", "forest green", "obsidian black", "royal purple", "blood red", "emerald green", "golden yellow",
        "silver gray", "bronze brown", "iron gray", "stone gray", "shadow black", "frost white", "sacred gold", "dwarven bronze",
        "elven silver", "wizardly purple", "knightly red", "viking blue", "medieval brown", "mystic green", "heroic gold", "legendary silver",
        "mythical bronze", "epic crimson", "ominous black", "ethereal white", "majestic purple", "spiritual gold", "divine silver",
        "arcane green", "sorcerous blue", "dragonborn red", "warrior-like black", "chivalrous gold", "feudal silver", "rustic brown",
        "timeless gray", "grandiose purple", "mystical green", "shadowed black", "frostbitten white", "sacrosanct gold", "dwarfish bronze",
        "elvish silver", "wizardly purple", "knightly red", "viking blue", "medieval brown", "mystic green"
    ]
};

const beginnings = [
    "In the heart of the ", "Beneath the towering ", "On the edge of the ", "Within the ancient ", "Amidst the ruins of the ",
    "At the foot of the ", "Through the dark ", "Under the shadow of the ", "At the peak of the ", "In the depths of the ",
    "Along the path to the ", "Within the walls of the ", "At the gates of the ", "In the shadow of the ", "Beyond the borders of the ",
    "In the center of the ", "At the entrance to the ", "Within the halls of the ", "At the edge of the ", "In the midst of the ",
    "Under the protection of the ", "In the ruins of the ", "At the base of the ", "In the heart of the ", "Within the confines of the ",
    "At the top of the ", "In the depths of the ", "Along the shores of the ", "Within the forests of the ", "At the foot of the ",
    "In the shadow of the ", "Beyond the reach of the ", "In the center of the ", "At the entrance to the ", "Within the halls of the ",
    "At the edge of the ", "In the midst of the ", "Under the protection of the ", "In the ruins of the ", "At the base of the ",
    "In the heart of the ", "Within the confines of the ", "At the top of the ", "In the depths of the ", "Along the shores of the ",
    "Within the forests of the ", "At the foot of the ", "In the shadow of the ", "Beyond the reach of the "
];

const endings = [
    "where darkness reigns supreme.", "where legends are born.", "where the past comes alive.", "where magic flows freely.",
    "where the brave dare to tread.", "where the cursed linger.", "where the ancient ones sleep.", "where the shadows whisper.",
    "where the dragons soar.", "where the knights rise.", "where the wizards weave their spells.", "where the witches brew their potions.",
    "where the dwarves forge their weapons.", "where the elves sing their songs.", "where the vikings set sail.", "where the kings rule.",
    "where the queens reign.", "where the warriors train.", "where the mages study.", "where the rogues plot.", "where the clerics pray.",
    "where the bards sing.", "where the druids commune.", "where the sorcerers cast their spells.", "where the undead rise.",
    "where the living fear to go.", "where the brave find glory.", "where the weak perish.", "where the strong thrive.", "where the cursed are bound.",
    "where the ancient ones awaken.", "where the shadows grow darker.", "where the dragons guard their treasure.", "where the knights face their destiny.",
    "where the wizards unlock their secrets.", "where the witches cast their curses.", "where the dwarves mine their riches.", "where the elves protect their realm.",
    "where the vikings raid and pillage.", "where the kings wage war.", "where the queens forge alliances.", "where the warriors find honor.",
    "where the mages discover new magic.", "where the rogues steal their fortunes.", "where the clerics heal the wounded.", "where the bards tell their tales.",
    "where the druids protect the balance.", "where the sorcerers unleash their power.", "where the undead seek vengeance.", "where the living fight for survival."
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generatePrompt() {
    let prompt = `/imagine prompt: ${getRandomElement(beginnings)}${getRandomElement(keywords.adjectives)} ${getRandomElement(keywords.nouns)} and ${getRandomElement(keywords.verbs)} over a ${getRandomElement(keywords.environments)}.${getRandomElement(endings)}`;
    
    // Check length, ensure it meets the 400 character requirement
    while (prompt.length < 400) {
        prompt += ` ${getRandomElement(keywords.adjectives)} ${getRandomElement(keywords.nouns)} and ${getRandomElement(keywords.verbs)} over a ${getRandomElement(keywords.environments)}.${getRandomElement(endings)}`;
    }

    // Add negative prompt if provided
    const negativePrompt = negativePromptInput.value.trim();
    if (negativePrompt) {
        prompt += ` --no ${negativePrompt}`; // Adiciona o negative prompt exatamente como foi digitado
    }

    promptArea.textContent = prompt;
}

generateButton.addEventListener('click', generatePrompt);

// Copiar o prompt ao clicar na área do prompt
promptArea.addEventListener('click', () => {
    const promptText = promptArea.textContent;
    if (promptText) {
        navigator.clipboard.writeText(promptText).then(() => {
            notification.style.display = 'block';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 2000);
        });
    }
});
