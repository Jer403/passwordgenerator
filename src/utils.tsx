const words = [
  "sky",
  "dog",
  "guitar",
  "mountain",
  "butterfly",
  "fire",
  "book",
  "path",
  "sun",
  "moon",
  "star",
  "cloud",
  "water",
  "wind",
  "rock",
  "sand",
  "leaf",
  "flower",
  "forest",
  "river",
  "light",
  "hat",
  "shoe",
  "window",
  "door",
  "mirror",
  "spoon",
  "chair",
  "table",
  "wall",
  "car",
  "plane",
  "train",
  "boat",
  "bicycle",
  "city",
  "village",
  "tower",
  "bridge",
  "castle",
  "sword",
  "shield",
  "hammer",
  "tool",
  "scissors",
  "lamp",
  "phone",
  "screen",
  "keyboard",
  "mouse",
  "paper",
  "pen",
  "ink",
  "box",
  "bag",
  "bottle",
  "watch",
  "necklace",
  "ring",
  "bracelet",
  "gold",
  "silver",
  "diamond",
  "ticket",
  "coin",
  "wallet",
  "pocket",
  "shirt",
  "pants",
  "jacket",
  "scarf",
  "umbrella",
  "belt",
  "sock",
  "shoes",
  "gloves",
  "backpack",
  "suitcase",
  "map",
  "compass",
  "flashlight",
  "match",
  "candle",
  "magnifier",
  "microscope",
  "telescope",
  "radio",
  "television",
  "speaker",
  "headphones",
  "camera",
  "video",
  "photo",
  "painting",
  "sculpture",
  "mural",
  "graffiti",
  "theater",
  "cinema",
  "music",
  "song",
  "melody",
  "symphony",
  "guitar",
  "violin",
  "piano",
  "trumpet",
  "flute",
  "drum",
  "orchestra",
  "concert",
  "festival",
  "dance",
  "circus",
  "magic",
  "story",
  "novel",
  "history",
  "poem",
  "essay",
  "diary",
  "magazine",
  "newspaper",
  "news",
  "report",
  "code",
  "program",
  "algorithm",
  "function",
  "variable",
  "constant",
  "object",
  "class",
  "inheritance",
  "database",
  "server",
  "client",
  "network",
  "cloud",
  "internet",
  "email",
  "message",
  "chat",
  "forum",
  "blog",
  "page",
  "site",
  "link",
  "browser",
  "engine",
  "search",
  "cookie",
  "security",
  "password",
  "user",
  "profile",
  "avatar",
  "settings",
  "preferences",
  "notification",
  "download",
  "upload",
  "streaming",
  "video game",
  "screen",
  "monitor",
  "resolution",
  "brightness",
  "contrast",
  "background",
  "theme",
  "icon",
  "application",
  "software",
  "hardware",
  "processor",
  "memory",
  "storage",
  "disk",
  "card",
  "battery",
  "charger",
  "cable",
  "adapter",
  "sensor",
  "altitude",
  "pressure",
  "temperature",
  "humidity",
  "speed",
  "acceleration",
  "frequency",
  "voltage",
  "current",
  "resistance",
  "power",
  "energy",
  "field",
  "wave",
  "radiation",
  "particle",
  "atom",
  "molecule",
  "element",
  "apple",
  "banana",
  "orange",
  "grape",
  "pear",
  "peach",
  "cherry",
  "strawberry",
  "blueberry",
  "pineapple",
  "mango",
  "lemon",
  "lime",
  "coconut",
  "watermelon",
  "melon",
  "kiwi",
  "plum",
  "fig",
  "pomegranate",
  "carrot",
  "potato",
  "tomato",
  "onion",
  "garlic",
  "cucumber",
  "lettuce",
  "cabbage",
  "pepper",
  "broccoli",
  "mushroom",
  "spinach",
  "corn",
  "pea",
  "bean",
  "pumpkin",
  "zucchini",
  "radish",
  "asparagus",
  "celery",
  "bread",
  "butter",
  "cheese",
  "milk",
  "egg",
  "yogurt",
  "cream",
  "meat",
  "chicken",
  "beef",
  "pork",
  "fish",
  "shrimp",
  "crab",
  "lobster",
  "salmon",
  "tuna",
  "sausage",
  "ham",
  "bacon",
  "rice",
  "pasta",
  "noodles",
  "flour",
  "sugar",
  "salt",
  "pepper",
  "spice",
  "honey",
  "jam",
  "chocolate",
  "candy",
  "cookie",
  "cake",
  "pie",
  "ice",
  "cream",
  "coffee",
  "tea",
  "juice",
  "soda",
  "water",
  "wine",
  "beer",
  "whiskey",
  "vodka",
  "champagne",
  "cocktail",
  "glass",
  "cup",
  "bowl",
  "plate",
  "fork",
  "knife",
  "spoon",
  "napkin",
  "tablecloth",
  "oven",
  "microwave",
  "stove",
  "fridge",
  "freezer",
  "pan",
  "pot",
  "blender",
  "toaster",
  "kettle",
  "mixer",
  "grill",
  "dish",
  "recipe",
  "restaurant",
  "bar",
  "bakery",
  "supermarket",
  "market",
  "store",
  "shop",
  "mall",
  "cashier",
  "money",
  "credit card",
  "wallet",
  "bank",
  "coin",
  "bill",
  "receipt",
  "discount",
  "sale",
  "price",
  "shopping",
  "cart",
  "bag",
  "customer",
  "cash",
  "clothes",
  "shirt",
  "pants",
  "jeans",
  "shorts",
  "skirt",
  "dress",
  "sweater",
  "jacket",
  "coat",
  "hat",
  "cap",
  "scarf",
  "gloves",
  "shoes",
  "boots",
  "socks",
  "tie",
  "belt",
  "sunglasses",
  "watch",
  "ring",
  "earrings",
  "bracelet",
  "necklace",
  "perfume",
  "makeup",
  "shampoo",
  "soap",
  "toothpaste",
  "toothbrush",
  "towel",
  "mirror",
  "comb",
  "brush",
  "razor",
  "lotion",
  "deodorant",
  "nail",
  "clipper",
  "hairdryer",
  "bath",
  "shower",
  "toilet",
  "sink",
  "bed",
  "pillow",
  "blanket",
  "mattress",
  "wardrobe",
  "drawer",
  "lamp",
  "curtain",
  "window",
  "door",
];

const palabras = [
  "cielo",
  "perro",
  "guitarra",
  "mariposa",
  "fuego",
  "libro",
  "camino",
  "sol",
  "luna",
  "estrella",
  "nube",
  "agua",
  "viento",
  "roca",
  "arena",
  "hoja",
  "flor",
  "bosque",
  "luz",
  "sombrero",
  "zapato",
  "ventana",
  "puerta",
  "espejo",
  "cuchara",
  "silla",
  "mesa",
  "pared",
  "coche",
  "tren",
  "barco",
  "bicicleta",
  "ciudad",
  "pueblo",
  "torre",
  "puente",
  "castillo",
  "espada",
  "escudo",
  "martillo",
  "herramienta",
  "tijeras",
  "pantalla",
  "teclado",
  "papel",
  "pluma",
  "tinta",
  "caja",
  "bolsa",
  "botella",
  "reloj",
  "collar",
  "anillo",
  "pulsera",
  "oro",
  "plata",
  "diamante",
  "billete",
  "moneda",
  "cartera",
  "bolsillo",
  "camisa",
  "chaqueta",
  "bufanda",
  "sombrilla",
  "paraguas",
  "zapatos",
  "guantes",
  "mochila",
  "maleta",
  "mapa",
  "linterna",
  "cerilla",
  "vela",
  "lupa",
  "microscopio",
  "telescopio",
  "radio",
  "televisor",
  "altavoz",
  "auriculares",
  "video",
  "cuadro",
  "pintura",
  "escultura",
  "mural",
  "grafiti",
  "teatro",
  "cine",
  "guitarra",
  "piano",
  "trompeta",
  "flauta",
  "tambor",
  "orquesta",
  "concierto",
  "festival",
  "baile",
  "danza",
  "circo",
  "magia",
  "cuento",
  "novela",
  "historia",
  "poema",
  "ensayo",
  "diario",
  "revista",
  "noticia",
  "informe",
  "programa",
  "algoritmo",
  "variable",
  "constante",
  "objeto",
  "clase",
  "herencia",
  "base de datos",
  "servidor",
  "cliente",
  "red",
  "nube",
  "internet",
  "correo",
  "mensaje",
  "chat",
  "foro",
  "blog",
  "sitio",
  "enlace",
  "navegador",
  "motor",
  "buscador",
  "cookie",
  "seguridad",
  "usuario",
  "perfil",
  "avatar",
  "ajuste",
  "preferencia",
  "descarga",
  "subida",
  "streaming",
  "videojuego",
  "pantalla",
  "monitor",
  "brillo",
  "contraste",
  "fondo",
  "tema",
  "icono",
  "software",
  "hardware",
  "procesador",
  "memoria",
  "almacenamiento",
  "disco",
  "tarjeta",
  "cargador",
  "cable",
  "adaptador",
  "sensores",
  "altitud",
  "temperatura",
  "humedad",
  "velocidad",
  "frecuencia",
  "voltaje",
  "corriente",
  "resistencia",
  "potencia",
  "campo",
  "onda",
  "elemento",
  "arbol",
  "barco",
  "casa",
  "dado",
  "elefante",
  "fuego",
  "gato",
  "hielo",
  "isla",
  "jirafa",
  "koala",
  "lago",
  "montana",
  "nube",
  "ojo",
  "piedra",
  "queso",
  "raton",
  "sol",
  "tigre",
  "uva",
  "viento",
  "waffle",
  "xilofono",
  "yema",
  "zapato",
  "abeja",
  "brujula",
  "caballo",
  "delfin",
  "espejo",
  "foca",
  "globo",
  "hormiga",
  "iglesia",
  "juguete",
  "kilogramo",
  "lampara",
  "mar",
  "naranja",
  "oso",
  "pajaro",
  "quimica",
  "reloj",
  "serpiente",
  "tren",
  "universo",
  "volcan",
  "wifi",
  "xenon",
  "yogur",
  "zanahoria",
  "agua",
  "bosque",
  "cielo",
  "diamante",
  "estrella",
  "faro",
  "guitarra",
  "hueso",
  "invierno",
  "jirones",
  "kilometro",
  "lobo",
  "murcielago",
  "niebla",
  "orilla",
  "pelota",
  "quesadilla",
  "ratonera",
  "silla",
  "tornado",
  "uva pasa",
  "ventana",
  "whisky",
  "xenofobia",
  "yate",
  "zapatero",
  "albahaca",
  "bicicleta",
  "cinturon",
  "dinosaurio",
  "escoba",
  "fragancia",
  "gorra",
  "hermano",
  "insecto",
  "jirafa",
  "kimono",
  "luna",
  "mantarraya",
  "navaja",
  "oasis",
  "paraguas",
  "quiosco",
  "rima",
  "sombra",
  "tiburon",
  "utensilio",
  "victoria",
  "wasabi",
  "xilografia",
  "yegua",
  "zocalo",
  "almeja",
  "baston",
  "caracol",
  "dardo",
  "electrico",
  "felicidad",
  "gallina",
  "hamaca",
  "iguana",
  "jabalina",
  "karaoke",
  "lagartija",
  "mochila",
  "nido",
  "ornitorrinco",
  "pastel",
  "quebrado",
  "rio",
  "sabor",
  "tambor",
  "union",
  "viaje",
  "waflera",
  "xerografia",
  "yerno",
  "zarzamora",
  "ancla",
  "burbuja",
  "cuerda",
  "domino",
  "escultura",
  "fiesta",
  "girasol",
  "horizonte",
  "insignia",
  "jarra",
  "kiosko",
  "lenteja",
  "musculo",
  "niquel",
  "orquesta",
  "piano",
  "quesadilla",
  "rueda",
  "sabana",
  "trueno",
  "utopia",
  "valle",
  "whisky",
  "xerox",
  "yunque",
  "zapallo",
  "acuario",
  "baul",
  "cristal",
  "diploma",
  "eclipse",
  "farol",
  "granja",
  "herradura",
  "icono",
  "jaula",
  "karate",
  "leon",
  "manzana",
  "neblina",
  "ojo de pez",
  "peluca",
  "quemadura",
  "refugio",
  "sarten",
  "tapiz",
  "uvas",
  "vagon",
  "wasabi",
  "xerox",
  "yerba",
  "zigzag",
  "ardilla",
  "bufanda",
  "cactus",
  "dunas",
  "escalera",
  "ferrocarril",
  "gaviota",
  "hacha",
];

export function clamp(min: number, max: number, val: number) {
  if (val < min) return min;
  if (val > max) return max;
  return val;
}

export function generateRandomCharacters(length: number) {
  const list = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
  let res = "";
  for (let i = 0; i < length; i++) {
    const rnd = Math.floor(Math.random() * list.length);
    res = res + list.charAt(rnd);
  }
  return res;
}

export function generateRandomPassword(
  nums: boolean,
  sym: boolean,
  length: number
) {
  let list = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ";
  if (nums) list += "1234567890";
  if (sym) list += ".,!¡?¿#$%&/()*+{}[]@-_";

  let res = "";
  for (let i = 0; i < length; i++) {
    const rnd = Math.floor(Math.random() * list.length);
    res = res + list.charAt(rnd);
  }
  return res;
}

export function generateRandomPinPassword(length: number) {
  const list = "1234567890";

  let res = "";
  for (let i = 0; i < length; i++) {
    const rnd = Math.floor(Math.random() * list.length);
    res = res + list.charAt(rnd);
  }
  return res;
}

export function generateRandomEasePassword(es: boolean, length: number) {
  let res = "";
  const arr = es ? palabras : words;
  for (let i = 0; i < length; i++) {
    const divisor = i == length - 1 ? "" : "-";
    const rnd = Math.floor(Math.random() * arr.length);
    res += arr[rnd] + divisor;
  }
  return res;
}
