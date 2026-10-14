/**
 * Comprehensive curated word pairs for the Imposter Game across all sectors:
 * - Food, Dining & Culinary
 * - Technology & Digital
 * - Sports, Fitness & Games
 * - Pop Culture, Movies & Media
 * - Professions & Workplaces
 * - Nature, Space & Science
 * - Places, Travel & Transport
 * - Fashion, Household & Lifestyle
 * - History & Society
 *
 * Each pair contains two everyday, related concepts that share context
 * but have subtle differences, making clue-giving and deduction fun.
 */

export const WORD_PAIRS = [
  // --- FOOD, DINING & CULINARY ---
  { normal: "Coffee", imposter: "Tea", category: "Food & Drinks" },
  { normal: "Pizza", imposter: "Burger", category: "Food & Drinks" },
  { normal: "Apple", imposter: "Orange", category: "Food & Drinks" },
  { normal: "Cake", imposter: "Ice Cream", category: "Food & Drinks" },
  { normal: "Milkshake", imposter: "Smoothie", category: "Food & Drinks" },
  { normal: "Strawberry", imposter: "Cherry", category: "Food & Drinks" },
  { normal: "Cookie", imposter: "Donut", category: "Food & Drinks" },
  { normal: "Sandwich", imposter: "Hotdog", category: "Food & Drinks" },
  { normal: "Butter", imposter: "Cheese", category: "Food & Drinks" },
  { normal: "Pancake", imposter: "Waffle", category: "Food & Drinks" },
  { normal: "Honey", imposter: "Maple Syrup", category: "Food & Drinks" },
  { normal: "Sushi", imposter: "Sashimi", category: "Food & Drinks" },
  { normal: "Cappuccino", imposter: "Latte", category: "Food & Drinks" },
  { normal: "Spaghetti", imposter: "Noodles", category: "Food & Drinks" },
  { normal: "Taco", imposter: "Burrito", category: "Food & Drinks" },
  { normal: "Guacamole", imposter: "Salsa", category: "Food & Drinks" },
  { normal: "Brownie", imposter: "Muffin", category: "Food & Drinks" },
  { normal: "Ketchup", imposter: "Mayonnaise", category: "Food & Drinks" },
  { normal: "Croissant", imposter: "Bagel", category: "Food & Drinks" },
  { normal: "Popcorn", imposter: "Potato Chips", category: "Food & Drinks" },
  { normal: "French Fries", imposter: "Onion Rings", category: "Food & Drinks" },
  { normal: "Coca-Cola", imposter: "Pepsi", category: "Food & Drinks" },
  { normal: "Beer", imposter: "Cider", category: "Food & Drinks" },
  { normal: "Red Wine", imposter: "White Wine", category: "Food & Drinks" },
  { normal: "Steak", imposter: "Barbecue Ribs", category: "Food & Drinks" },
  { normal: "Chocolate", imposter: "Caramel", category: "Food & Drinks" },

  // --- TECHNOLOGY & DIGITAL ---
  { normal: "Laptop", imposter: "Tablet", category: "Technology" },
  { normal: "iPhone", imposter: "Android Phone", category: "Technology" },
  { normal: "WiFi", imposter: "Bluetooth", category: "Technology" },
  { normal: "Keyboard", imposter: "Mouse", category: "Technology" },
  { normal: "Instagram", imposter: "TikTok", category: "Technology" },
  { normal: "YouTube", imposter: "Twitch", category: "Technology" },
  { normal: "Headphones", imposter: "Earbuds", category: "Technology" },
  { normal: "Email", imposter: "Text Message", category: "Technology" },
  { normal: "Computer Monitor", imposter: "Television", category: "Technology" },
  { normal: "Charger", imposter: "Power Bank", category: "Technology" },
  { normal: "Smartwatch", imposter: "Fitness Tracker", category: "Technology" },
  { normal: "Google Search", imposter: "Wikipedia", category: "Technology" },
  { normal: "USB Flash Drive", imposter: "Hard Drive", category: "Technology" },
  { normal: "Video Call", imposter: "Voice Call", category: "Technology" },
  { normal: "PlayStation", imposter: "Xbox", category: "Technology" },
  { normal: "Printer", imposter: "Scanner", category: "Technology" },
  { normal: "Drone", imposter: "Remote Control Car", category: "Technology" },
  { normal: "Password", imposter: "PIN Code", category: "Technology" },

  // --- SPORTS, GAMES & FITNESS ---
  { normal: "Football", imposter: "Basketball", category: "Sports" },
  { normal: "Swimming", imposter: "Surfing", category: "Sports" },
  { normal: "Cricket", imposter: "Baseball", category: "Sports" },
  { normal: "Tennis", imposter: "Badminton", category: "Sports" },
  { normal: "Skiing", imposter: "Snowboarding", category: "Sports" },
  { normal: "Yoga", imposter: "Pilates", category: "Sports" },
  { normal: "Marathon", imposter: "Sprint", category: "Sports" },
  { normal: "Chess", imposter: "Checkers", category: "Sports" },
  { normal: "Bowling", imposter: "Billiards", category: "Sports" },
  { normal: "Rugby", imposter: "American Football", category: "Sports" },
  { normal: "Boxing", imposter: "Karate", category: "Sports" },
  { normal: "Golf", imposter: "Mini Golf", category: "Sports" },
  { normal: "Skateboarding", imposter: "Rollerblading", category: "Sports" },
  { normal: "Table Tennis", imposter: "Air Hockey", category: "Sports" },
  { normal: "Gym", imposter: "CrossFit Box", category: "Sports" },
  { normal: "Dodgeball", imposter: "Volleyball", category: "Sports" },
  { normal: "Rock Climbing", imposter: "Hiking", category: "Sports" },

  // --- PROFESSIONS & WORKPLACES ---
  { normal: "Doctor", imposter: "Nurse", category: "Professions" },
  { normal: "Pilot", imposter: "Astronaut", category: "Professions" },
  { normal: "Lawyer", imposter: "Judge", category: "Professions" },
  { normal: "Architect", imposter: "Civil Engineer", category: "Professions" },
  { normal: "Chef", imposter: "Baker", category: "Professions" },
  { normal: "Photographer", imposter: "Cameraman", category: "Professions" },
  { normal: "Firefighter", imposter: "Police Officer", category: "Professions" },
  { normal: "Dentist", imposter: "Surgeon", category: "Professions" },
  { normal: "Electrician", imposter: "Plumber", category: "Professions" },
  { normal: "Professor", imposter: "School Teacher", category: "Professions" },
  { normal: "Journalist", imposter: "Author", category: "Professions" },
  { normal: "Barista", imposter: "Bartender", category: "Professions" },
  { normal: "Detective", imposter: "Secret Agent", category: "Professions" },
  { normal: "Flight Attendant", imposter: "Hotel Concierge", category: "Professions" },
  { normal: "Magician", imposter: "Hypnotist", category: "Professions" },
  { normal: "Actor", imposter: "Voice Actor", category: "Professions" },

  // --- TRAVEL, TRANSPORT & VEHICLES ---
  { normal: "Airport", imposter: "Railway Station", category: "Travel" },
  { normal: "Bicycle", imposter: "Motorcycle", category: "Travel" },
  { normal: "Ship", imposter: "Submarine", category: "Travel" },
  { normal: "Hotel", imposter: "Resort", category: "Travel" },
  { normal: "Airplane", imposter: "Helicopter", category: "Travel" },
  { normal: "Train", imposter: "Metro", category: "Travel" },
  { normal: "Taxi", imposter: "Bus", category: "Travel" },
  { normal: "Passport", imposter: "Identity Card", category: "Travel" },
  { normal: "Backpack", imposter: "Suitcase", category: "Travel" },
  { normal: "Tent", imposter: "Cabin", category: "Travel" },
  { normal: "Ambulance", imposter: "Fire Truck", category: "Travel" },
  { normal: "Yacht", imposter: "Cruise Ship", category: "Travel" },
  { normal: "Scooter", imposter: "Moped", category: "Travel" },
  { normal: "Hot Air Balloon", imposter: "Parachute", category: "Travel" },
  { normal: "Rocket", imposter: "Space Shuttle", category: "Travel" },
  { normal: "Limousine", imposter: "Sports Car", category: "Travel" },
  { normal: "Bridge", imposter: "Tunnel", category: "Travel" },
  { normal: "Highway", imposter: "Race Track", category: "Travel" },

  // --- NATURE, SPACE & SCIENCE ---
  { normal: "Beach", imposter: "Island", category: "Nature & Places" },
  { normal: "Mountain", imposter: "Hill", category: "Nature & Places" },
  { normal: "Sun", imposter: "Moon", category: "Science & Space" },
  { normal: "Rain", imposter: "Snow", category: "Nature" },
  { normal: "River", imposter: "Lake", category: "Nature & Places" },
  { normal: "Jungle", imposter: "Forest", category: "Nature & Places" },
  { normal: "Volcano", imposter: "Earthquake", category: "Nature" },
  { normal: "Waterfall", imposter: "Fountain", category: "Nature & Places" },
  { normal: "Telescope", imposter: "Microscope", category: "Science" },
  { normal: "Planet", imposter: "Asteroid", category: "Science & Space" },
  { normal: "Lightning", imposter: "Thunder", category: "Nature" },
  { normal: "Tornado", imposter: "Hurricane", category: "Nature" },
  { normal: "Cave", imposter: "Mine Shaft", category: "Nature & Places" },
  { normal: "Desert", imposter: "Sand Dune", category: "Nature & Places" },
  { normal: "Glacier", imposter: "Iceberg", category: "Nature & Places" },
  { normal: "Solar Eclipse", imposter: "Lunar Eclipse", category: "Science & Space" },
  { normal: "Rainbow", imposter: "Northern Lights", category: "Nature" },
  { normal: "Dinosaur Fossil", imposter: "Mammoth Bones", category: "Science" },

  // --- ANIMALS & WILDLIFE ---
  { normal: "Tiger", imposter: "Lion", category: "Animals" },
  { normal: "Dolphin", imposter: "Whale", category: "Animals" },
  { normal: "Crocodile", imposter: "Alligator", category: "Animals" },
  { normal: "Cheetah", imposter: "Leopard", category: "Animals" },
  { normal: "Eagle", imposter: "Hawk", category: "Animals" },
  { normal: "Wolf", imposter: "Fox", category: "Animals" },
  { normal: "Penguin", imposter: "Puffin", category: "Animals" },
  { normal: "Zebra", imposter: "Horse", category: "Animals" },
  { normal: "Kangaroo", imposter: "Koala", category: "Animals" },
  { normal: "Rabbit", imposter: "Hamster", category: "Animals" },
  { normal: "Shark", imposter: "Piranha", category: "Animals" },
  { normal: "Bees", imposter: "Wasps", category: "Animals" },
  { normal: "Camel", imposter: "Llama", category: "Animals" },
  { normal: "Owl", imposter: "Bat", category: "Animals" },

  // --- HOUSEHOLD, OBJECTS & LIFESTYLE ---
  { normal: "Book", imposter: "Magazine", category: "Objects" },
  { normal: "Watch", imposter: "Clock", category: "Objects" },
  { normal: "Candle", imposter: "Flashlight", category: "Objects" },
  { normal: "Pen", imposter: "Pencil", category: "Objects" },
  { normal: "Blanket", imposter: "Quilt", category: "Home" },
  { normal: "Fork", imposter: "Spoon", category: "Kitchen" },
  { normal: "Shampoo", imposter: "Soap", category: "Bathroom" },
  { normal: "Mirror", imposter: "Window", category: "Home" },
  { normal: "Wallet", imposter: "Purse", category: "Accessories" },
  { normal: "Sunglasses", imposter: "Spectacles", category: "Accessories" },
  { normal: "Toothbrush", imposter: "Hairbrush", category: "Bathroom" },
  { normal: "Pillow", imposter: "Cushion", category: "Home" },
  { normal: "Sofa", imposter: "Armchair", category: "Home" },
  { normal: "Microwave", imposter: "Oven", category: "Kitchen" },
  { normal: "Washing Machine", imposter: "Dishwasher", category: "Home" },
  { normal: "Ceiling Fan", imposter: "Air Conditioner", category: "Home" },
  { normal: "Curtain", imposter: "Blinds", category: "Home" },
  { normal: "Umbrella", imposter: "Raincoat", category: "Clothing" },
  { normal: "Jeans", imposter: "Trousers", category: "Clothing" },
  { normal: "Hoodie", imposter: "Jacket", category: "Clothing" },
  { normal: "Boots", imposter: "Sneakers", category: "Clothing" },
  { normal: "Suit", imposter: "Tuxedo", category: "Clothing" },

  // --- ENTERTAINMENT, ARTS & CULTURE ---
  { normal: "Cinema", imposter: "Theatre", category: "Entertainment" },
  { normal: "Guitar", imposter: "Violin", category: "Music" },
  { normal: "Piano", imposter: "Keyboard", category: "Music" },
  { normal: "Violin", imposter: "Cello", category: "Music" },
  { normal: "Museum", imposter: "Art Gallery", category: "Places" },
  { normal: "Fireworks", imposter: "Campfire", category: "Celebration" },
  { normal: "Microphone", imposter: "Megaphone", category: "Audio" },
  { normal: "Amusement Park", imposter: "Water Park", category: "Entertainment" },
  { normal: "Library", imposter: "Bookstore", category: "Places" },
  { normal: "Castle", imposter: "Palace", category: "Places" },
  { normal: "Standup Comedy", imposter: "Sitcom", category: "Entertainment" },
  { normal: "Concert", imposter: "Music Festival", category: "Entertainment" },
  { normal: "Podcast", imposter: "Radio Show", category: "Entertainment" },
  { normal: "Anime", imposter: "Cartoon", category: "Entertainment" },
  { normal: "Magic Show", imposter: "Circus", category: "Entertainment" },
  { normal: "Diamond", imposter: "Ruby", category: "Treasures" },
  { normal: "Gold", imposter: "Silver", category: "Materials" },

  // --- SCHOOL, HISTORY & SOCIETY ---
  { normal: "Final Exam", imposter: "Pop Quiz", category: "School" },
  { normal: "Homework", imposter: "Class Assignment", category: "School" },
  { normal: "King", imposter: "Emperor", category: "History" },
  { normal: "Knight", imposter: "Samurai", category: "History" },
  { normal: "Pyramids", imposter: "Great Wall of China", category: "History" },
  { normal: "Revolution", imposter: "Protest", category: "History" }
];

/**
 * Gets a random word pair, avoiding recently used indices if possible
 */
export function getRandomWordPair(excludePairs = []) {
  const available = WORD_PAIRS.filter(
    (pair) => !excludePairs.some((p) => p.normal === pair.normal && p.imposter === pair.imposter)
  );

  const pool = available.length > 0 ? available : WORD_PAIRS;
  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}
