import Iphone from '../../assets/images/iphone-16.webp';
import samsungS24 from '../../assets/images/samsung-s24.webp';
import xiaomiPhone from '../../assets/images/xiaomi-phone.webp';
import GooglePhone from '../../assets/images/googlePhone.webp';
import Iphone13Home from '../../assets/images/iphone-13Home.webp';
import xiaomiPoco from '../../assets/images/xiaomi-poco.webp';
import GooglePixel from '../../assets/images/google-pixel.webp';
import RealmePhone from '../../assets/images/realmePhomne.webp';

const sliderData = [
  {
    image: Iphone,
    brand: 'Apple',
    name: 'iPhone 16',
    price: 799,
    description: "Apple's latest iPhone with A18 chip, Dynamic Island, and USB-C support.",
    id: 1,
    specs: "6.1\" OLED, A18 chip, 460 ppi",
    features: [
      "Dynamic Island display",
      "Apple A18 chip",
      "48MP dual-camera system",
      "USB-C support",
      "Face ID",
      "Water and dust resistant (IP68)"
    ],
    colors: ["Black", "White", "Blue", "Pink"],
    releaseDate: "2024-09-20",
    weight: "170g",
    dimensions: "147.6 x 71.6 x 7.8 mm",
    connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "USB-C"],
    inStock: true
  },
  {
    image: samsungS24,
    brand: 'Samsung',
    name: 'Samsung Galaxy S24 Ultra',
    price: 1199,
    description: "Flagship Samsung phone with S Pen, advanced AI camera system and long battery life.",
    id: 2,
    specs: "6.8\" QHD+ OLED, Snapdragon 8 Gen 3, 120Hz",
    features: [
      "200MP quad-camera system",
      "Snapdragon 8 Gen 3",
      "S Pen built-in",
      "QHD+ AMOLED display",
      "Water and dust resistant (IP68)",
      "AI-enhanced features"
    ],
    colors: ["Titanium Black", "Titanium Gray", "Titanium Violet"],
    releaseDate: "2024-01-17",
    weight: "232g",
    dimensions: "162.3 x 79.0 x 8.6 mm",
    connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "USB-C"],
    inStock: true
  },
  {
    image: xiaomiPhone,
    brand: 'Xiaomi',
    name: 'Xiaomi Poco F6 Pro',
    price: 499,
    description: "Affordable flagship with powerful specs and ultra-fast charging.",
    id: 3,
    specs: "6.67\" WQHD+ AMOLED, Snapdragon 8 Gen 2, 120Hz",
    features: [
      "Snapdragon 8 Gen 2",
      "120W fast charging",
      "WQHD+ AMOLED display",
      "Triple rear cameras",
      "LiquidCool Technology 4.0",
      "Dolby Vision support"
    ],
    colors: ["Black", "White"],
    releaseDate: "2024-05-23",
    weight: "204g",
    dimensions: "160.9 x 75 x 8.2 mm",
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "USB-C"],
    inStock: true
  },
  {
    image: GooglePhone,
    brand: 'Google',
    name: 'Google Pixel 8',
    price: 699,
    description: "Google's AI-first phone with powerful Tensor chip and stellar camera features.",
    id: 4,
    specs: "6.2\" OLED, Tensor G3, 120Hz",
    features: [
      "Google Tensor G3 chip",
      "50MP main camera",
      "IP68 water resistance",
      "AI photo tools",
      "120Hz OLED display",
      "Titan M2 security chip"
    ],
    colors: ["Obsidian", "Rose", "Hazel"],
    releaseDate: "2023-10-12",
    weight: "187g",
    dimensions: "150.5 x 70.8 x 8.9 mm",
    connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "USB-C"],
    inStock: true
  },
  {
    image: Iphone13Home,
    brand: 'Apple',
    name: 'iPhone 13',
    price: 699,
    description: "Reliable iPhone with A15 Bionic chip, MagSafe, and dual-camera system.",
    id: 5,
    specs: "6.1\" OLED, A15 chip, 460 ppi",
    features: [
      "A15 Bionic chip",
      "Dual-camera system",
      "Face ID",
      "MagSafe wireless charging",
      "Super Retina XDR display",
      "IP68 water resistance"
    ],
    colors: ["Starlight", "Midnight", "Blue", "Pink", "Green"],
    releaseDate: "2021-09-24",
    weight: "174g",
    dimensions: "146.7 x 71.5 x 7.7 mm",
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0", "Lightning"],
    inStock: true
  },
  {
    image: xiaomiPoco,
    brand: 'Xiaomi',
    name: 'Xiaomi Poco F6',
    price: 399,
    description: "Compact powerhouse with Snapdragon 8s Gen 3 and fast charging.",
    id: 6,
    specs: "6.67\" AMOLED, Snapdragon 8s Gen 3, 120Hz",
    features: [
      "Snapdragon 8s Gen 3",
      "90W turbo charging",
      "50MP main camera with OIS",
      "AMOLED display",
      "LiquidCool Tech 4.0",
      "Gorilla Glass Victus"
    ],
    colors: ["Black", "Green"],
    releaseDate: "2024-05-23",
    weight: "179g",
    dimensions: "160.5 x 74.4 x 7.8 mm",
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "USB-C"],
    inStock: true
  },
  {
    image: GooglePixel,
    brand: 'Google',
    name: 'Google Pixel 9 Pro',
    price: 999,
    description: "Google's most advanced phone with Tensor G4 and enhanced photography tools.",
    id: 7,
    specs: "6.3\" OLED, Tensor G4, 120Hz",
    features: [
      "Triple camera setup with 48MP telephoto",
      "Tensor G4 chip",
      "Face Unlock",
      "IP68 rating",
      "Android 15",
      "Premium OLED display"
    ],
    colors: ["Porcelain", "Obsidian", "Bay"],
    releaseDate: "2024-10-15",
    weight: "195g",
    dimensions: "160.0 x 76.1 x 8.8 mm",
    connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "USB-C"],
    inStock: true
  },
  {
    image: RealmePhone,
    brand: 'Realme',
    name: 'Realme GT 7 Pro NFC',
    price: 599,
    description: "Feature-packed Realme flagship with huge battery and ultra-fast charging.",
    id: 8,
    specs: "6.74\" AMOLED, Snapdragon 8 Gen 3, 120Hz",
    features: [
      "Snapdragon 8 Gen 3",
      "6500mAh battery",
      "120W fast charging",
      "Triple camera with 50MP main",
      "Ultrasonic fingerprint sensor",
      "IP69 water resistance"
    ],
    colors: ["Black", "Orange"],
    releaseDate: "2024-07-18",
    weight: "205g",
    dimensions: "161.6 x 74.3 x 8.9 mm",
    connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.4", "USB-C", "NFC"],
    inStock: true
  }
];

export default sliderData;
