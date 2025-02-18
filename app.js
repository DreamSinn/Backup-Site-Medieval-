const generateButton = document.getElementById('generate-button');
const copyButton = document.getElementById('copy-button');
const promptArea = document.getElementById('prompt-area'); // Corrigi o ID para 'prompt-area'
const notification = document.getElementById('notification');

// Definir palavras-chave para o tema medieval e das Cruzadas
const keywords = {
    environments: [
        "desolate battlefield", "crumbling castle", "foggy forest", "dark dungeon", "ancient ruins", 
        "treacherous mountain pass", "medieval chapel", "underground crypt", "quiet village", "stormy coastline",
        "abandoned monastery", "towering fortress", "golden plains", "haunted battlefield", "deserted city",
        "snow-covered hills", "barren wasteland", "forgotten shrine", "overgrown garden", "isolated keep",
        "deep cavern", "distant kingdom", "sacred grounds", "frostbitten tundra", "rustic inn", 
        "war-torn village", "darkened forest", "ancient marketplace", "stormy sky", "crumbling citadel",
        "eerie swamp", "ruined bridge", "northern fjords", "twilight village", "cliffside ruins", 
        "flaming village", "dawn-lit battlefield", "silent mountains", "forgotten temple", "cursed lands", 
        "sunset plains", "forest clearing", "midnight forest", "serene lake", "abandoned fort", 
        "deep woodlands", "sacred temple", "riverbank", "crumbling tower", "desert oasis", "twin mountains", 
        "ancient battlefield", "lost temple", "hidden caves", "sunset coast", "weathered path",
        "open plains", "haunted grove", "overgrown ruins", "shadowed alley"
    ],
    adjectives: [
        "noble", "brave", "fearless", "ancient", "heroic", "valiant", "mighty", "loyal", "sturdy", "honorable",
        "wise", "venerable", "sacred", "fearsome", "unwavering", "regal", "mysterious", "dark", "unyielding", "fierce",
        "glorious", "sublime", "majestic", "shadowed", "grim", "war-torn", "vicious", "chivalrous", "bloodied", 
        "gilded", "forgotten", "wicked", "unstoppable", "fiery", "unforgiving", "serene", "ominous", "unbroken",
        "brutal", "bold", "epic", "unmatched", "honored", "blessed", "sacrosanct", "invincible", "troubled", 
        "silent", "desolate", "whispered", "mournful", "warlike", "timeless", "hallowed", "revered", "stirring", 
        "tragic", "legendary", "terrifying", "wild", "allegorical"
    ],
    nouns: [
        "sword", "shield", "helmet", "castle", "kingdom", "village", "knight", "warrior", "archer", "crossbow", 
        "fortress", "banner", "scepter", "king", "queen", "monk", "paladin", "temple", "battle axe", "cavalry", 
        "throne", "queen's crown", "bow", "catapult", "empire", "knighthood", "ranger", "sorcerer", "wizard", 
        "paladin's armor", "dungeon", "warrior's shield", "mace", "royal seal", "bastion", "royal decree", 
        "war banner", "ancient relic", "holy relic", "battle horn", "spear", "baron", "princess", "knight's oath", 
        "scroll", "glowing gem", "throne room", "royal guard", "arena", "blessed talisman"
    ],
    verbs: [
        "march", "conquer", "defend", "invade", "slay", "reclaim", "forge", "defeat", "siege", "protect", 
        "charge", "decimate", "guard", "betray", "invade", "destroy", "fortify", "strike", "retreat", "wage", 
        "swear", "honor", "lead", "betray", "besiege", "attack", "overthrow", "defend", "wage war", "avenge", 
        "rally", "fortify", "weaken", "hunt", "perish", "liberate", "consolidate", "scout", "reclaim", "defy", 
        "wage battle", "sworn", "destroy", "forage", "defend", "expel", "retaliate", "sworn", "curse", "purge", 
        "overrun", "murder", "abolish", "oppose", "rescue", "confront", "ransom", "claim", "invigorate", "conqueror", 
        "defeat"
    ],
    moodStyle: [
        "glorious", "heroic", "tragic", "epic", "mournful", "sombre", "ominous", "majestic", "chaotic", "romantic", 
        "gritty", "brutal", "melancholic", "noble", "tragic", "haunting", "inspiring", "stoic", "romantic", 
        "desolate", "war-torn", "legendary", "calm", "ferocious", "turbulent", "daunting", "ominous", "uplifting", 
        "vengeful", "melancholy", "grand", "inspiring", "mournful", "triumphant", "intense", "tragic", "savage", 
        "despairing", "vivid", "dramatic", "legendary", "bitter", "stoic", "stormy", "majestic", "brutal", 
        "devastating", "tragic"
    ],
    technicalDescriptive: [
        "rusted armor", "moss-covered stone", "cracked sword", "dusty tome", "ancient scroll", "shimmering shield", 
        "glowing emblem", "hardened leather", "weathered banner", "frost-covered spire", "gold-encrusted hilt", 
        "gleaming steel", "crumbling brick", "smoldering ruins", "rotten wood", "polished sword", "etched stone", 
        "scorched earth", "smoke-filled air", "blood-soaked ground", "burnt ruins", "frostbitten air", 
        "sprawling cityscape", "tattered cloak", "crumbling parchment", "ancient tome", "overgrown ivy", 
        "glowing runes", "golden treasure", "chained gate", "broken wheel", "glistening armor", "dusty scrolls", 
        "sacred anvil", "rustic wood", "tattered banner", "war-torn flag", "shattered glass", "arcane sigils", 
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

// Arrays para rastrear itens usados
let usedBeginnings = [];
let usedEndings = [];
let usedEnvironments = [];
let usedAdjectives = [];
let usedNouns = [];
let usedVerbs = [];
let usedMoodStyle = [];
let usedTechnicalDescriptive = [];
let usedColors = [];

// Variáveis para controlar repetições consecutivas
let lastEnvironment = null;
let lastEnding = null;

function getRandomItem(array, usedItems) {
    if (array.length === usedItems.length) {
        usedItems.length = 0; // Reset se todos os itens foram usados
    }
    let item;
    do {
        item = array[Math.floor(Math.random() * array.length)];
    } while (usedItems.includes(item));
    usedItems.push(item);
    return item;
}

function generatePrompt() {
    const beginnings = [
        "/imagine prompt: A lone, cloaked figure stands amidst a",
        "/imagine prompt: In the heart of a war-torn landscape, a",
        "/imagine prompt: Beneath the shadow of a towering cathedral, a",
        "/imagine prompt: A mysterious wanderer walks through a",
        "/imagine prompt: In the midst of a desolate battlefield, a",
        "/imagine prompt: As the sun sets over the ruins, a",
        "/imagine prompt: In a deep, dark forest, a",
        "/imagine prompt: The silhouette of a figure emerges from a",
        "/imagine prompt: At the edge of a forgotten kingdom, a",
        "/imagine prompt: The ruins of an ancient temple are guarded by a"
    ];

    const endings = [
        "Above, a blood-red sky swirls with ominous clouds. In the distance, a decaying tree stands sentinel.",
        "The air is thick with the scent of smoke and blood, and the ground is littered with the remnants of battle.",
        "The horizon glows with the light of a setting sun, casting long shadows across the barren landscape.",
        "The atmosphere is heavy with the weight of history, and the faint sound of distant drums fills the air.",
        "The scene is both haunting and beautiful, with a stark contrast between life and death.",
        "The sky is a swirling canvas of dark clouds and crimson hues, creating a dramatic backdrop.",
        "The ground is cracked and barren, with twisted trees reaching towards the ominous sky.",
        "The air is filled with an eerie silence, broken only by the faint rustling of leaves.",
        "The landscape is a blend of decay and resilience, with the scars of war evident everywhere.",
        "The scene is both tranquil and unsettling, with a sense of foreboding that lingers in the air."
    ];

    // Seleciona elementos únicos
    const beginning = getRandomItem(beginnings, usedBeginnings);

    // Garante que o ambiente não seja repetido consecutivamente
    let environment;
    do {
        environment = getRandomItem(keywords.environments, usedEnvironments);
    } while (environment === lastEnvironment);
    lastEnvironment = environment;

    // Garante que o adjetivo e o substantivo não sejam iguais
    let adjective, noun;
    do {
        adjective = getRandomItem(keywords.adjectives, usedAdjectives);
        noun = getRandomItem(keywords.nouns, usedNouns);
    } while (adjective === noun);  // Verifica se o adjetivo e o substantivo são iguais

    // Garante que o verbo não seja repetido junto ao adjetivo
    let verb;
    do {
        verb = getRandomItem(keywords.verbs, usedVerbs);
    } while (verb === adjective);  // Verifica se o verbo é igual ao adjetivo

    const mood = getRandomItem(keywords.moodStyle, usedMoodStyle);
    const technical = getRandomItem(keywords.technicalDescriptive, usedTechnicalDescriptive);
    const color = getRandomItem(keywords.colors, usedColors);

    // Garante que a terminação não seja repetida consecutivamente
    let ending;
    do {
        ending = getRandomItem(endings, usedEndings);
    } while (ending === lastEnding);
    lastEnding = ending;

    // Gera o prompt
    const prompt = `${beginning} ${environment}, ${adjective} ${noun}, wielding a ${adjective} ${noun}, ready to ${verb}. The atmosphere is ${mood} and filled with ${technical}. The colors are rich with ${color}. ${ending} The human figure stares directly at the viewer, their gaze intense and unwavering. | dvd screengrab, from 1982 medieval film, 'excalibur', and --style Medieval --v 5 --stylize 1000`;

    // Exibe o prompt na área de texto
    promptArea.textContent = prompt;
}

// Adiciona event listeners aos botões
generateButton.addEventListener('click', () => {
    generatePrompt();
    notification.style.display = 'none'; // Oculta a notificação ao gerar novo prompt
});

copyButton.addEventListener('click', () => {
    const textToCopy = promptArea.textContent;
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            notification.style.display = 'block'; // Mostra a notificação ao copiar
            setTimeout(() => {
                notification.style.display = 'none'; // Oculta a notificação após 2 segundos
            }, 2000);
        });
    }
});
