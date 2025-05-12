import iphone16 from '../../assets/images/iphone-16.webp';
import iphone16Pro from '../../assets/images/iphone-16-pro.webp';
import iphone16ProMax from '../../assets/images/iphone-16-pro-max.webp';
import iphone15 from '../../assets/images/iphone-15.webp';
import iphone15Pro from '../../assets/images/iphone-15-pro.webp';
import iphone15ProMax from '../../assets/images/iphone-15-promax.webp';
import iphone14 from '../../assets/images/iphone-14.webp';
import iphone14Pro from '../../assets/images/iphone-14-pro.webp';
import iphone14ProMax from '../../assets/images/iphone-14-promax.webp';
import iphone13 from '../../assets/images/iphone-13.webp';
import iphone13Pro from '../../assets/images/iphone-13-pro.webp';



const allProducts = {
  iphone: [
    {
      id: 1,
      name: "iPhone 16",
      price: 2899,
      image: iphone16,
      specs: "128GB, A18 chip, dual-camera",
      description: "The iPhone 16 features a sleek design, A18 chip, and enhanced battery life.",
      features: [
        "128GB storage",
        "A18 chip",
        "6.1-inch OLED display",
        "Dual 48MP cameras",
        "iOS 18",
        "MagSafe support"
      ],
      colors: ["Black", "Blue", "Starlight"],
      releaseDate: "2024-09-22",
      weight: "174g",
      dimensions: "146.7 x 71.5 x 7.8 mm",
      os: "iOS 18",
      connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3"],
      inStock: true
    },
    {
      id: 2,
      name: "iPhone 16 Pro",
      price: 3499,
      image: iphone16Pro,
      specs: "256GB, A18 Pro chip, triple-camera",
      description: "Advanced photography and performance with the new iPhone 16 Pro and A18 Pro chip.",
      features: [
        "256GB storage",
        "A18 Pro chip",
        "6.1-inch ProMotion display",
        "Triple 48MP cameras",
        "Always-On display",
      ],
      colors: ["Graphite", "Silver", "Titanium Blue"],
      releaseDate: "2024-09-22",
      weight: "187g",
      dimensions: "146.6 x 70.6 x 7.85 mm",
      os: "iOS 18",
      connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC"],
      inStock: true
    },
    {
      id: 3,
      name: "iPhone 16 Pro Max",
      price: 3999,
      image: iphone16ProMax,
      specs: "512GB, A18 Pro chip, zoom lens",
      description: "iPhone 16 Pro Max offers unmatched power, display, and camera capabilities.",
      features: [
        "512GB storage",
        "A18 Pro chip",
        "6.7-inch ProMotion display",
        "Triple camera with zoom lens",
        "Best battery in iPhone lineup"
      ],
      colors: ["Titanium Black", "Natural Titanium"],
      releaseDate: "2024-09-22",
      weight: "240g",
      dimensions: "160.7 x 77.6 x 7.9 mm",
      os: "iOS 18",
      connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3"],
      inStock: true
    },
    {
      id: 4,
      name: "iPhone 15",
      price: 2499,
      image: iphone15,
      specs: "128GB, A17 chip, dual-camera",
      description: "A refined version of the iPhone series with the A17 chip and Dynamic Island.",
      features: [
        "128GB storage",
        "A17 chip",
        "6.1-inch Super Retina display",
        "Dual camera system",
        "MagSafe"
      ],
      colors: ["Pink", "Blue", "Green", "Yellow"],
      releaseDate: "2023-09-15",
      weight: "171g",
      dimensions: "147.6 x 71.6 x 7.8 mm",
      os: "iOS 17",
      connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3"],
      inStock: true
    },
    {
      id: 5,
      name: "iPhone 15 Pro",
      price: 3199,
      image: iphone15Pro,
      specs: "256GB, A17 Pro, triple-camera",
      description: "Power meets precision with iPhone 15 Pro, featuring A17 Pro chip and titanium frame.",
      features: [
        "256GB storage",
        "A17 Pro chip",
        "Triple camera with ProRAW",
        "LiDAR Scanner",
        "USB-C support"
      ],
      colors: ["Natural Titanium", "Blue Titanium"],
      releaseDate: "2023-09-15",
      weight: "187g",
      dimensions: "146.6 x 70.6 x 8.25 mm",
      os: "iOS 17",
      connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3"],
      inStock: true
    },
    {
      id: 6,
      name: "iPhone 15 Pro Max",
      price: 3699,
      image: iphone15ProMax,
      specs: "512GB, A17 Pro, telephoto lens",
      description: "Top-tier performance and camera with 5x optical zoom and large storage.",
      features: [
        "512GB storage",
        "A17 Pro chip",
        "6.7-inch display",
        "Telephoto lens",
        "USB-C charging"
      ],
      colors: ["Natural Titanium", "Black Titanium"],
      releaseDate: "2023-09-15",
      weight: "221g",
      dimensions: "159.9 x 76.7 x 8.25 mm",
      os: "iOS 17",
      connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3"],
      inStock: true
    },
    {
      id: 7,
      name: "iPhone 14",
      price: 2199,
      image: iphone14,
      specs: "128GB, A15 chip, dual-camera",
      description: "Reliable and affordable, iPhone 14 offers a great camera and performance.",
      features: [
        "128GB storage",
        "A15 chip",
        "6.1-inch OLED",
        "Crash Detection",
        "Photonic Engine"
      ],
      colors: ["Midnight", "Starlight", "Purple", "Red"],
      releaseDate: "2022-09-16",
      weight: "172g",
      dimensions: "146.7 x 71.5 x 7.8 mm",
      os: "iOS 16",
      connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0"],
      inStock: true
    },
    {
      id: 8,
      name: "iPhone 14 Pro",
      price: 2699,
      image: iphone14Pro,
      specs: "256GB, A16 chip, triple-camera",
      description: "The first iPhone to feature Dynamic Island and the powerful A16 chip.",
      features: [
        "256GB storage",
        "A16 chip",
        "ProMotion 120Hz",
        "Always-On display",
        "Triple-camera system"
      ],
      colors: ["Space Black", "Deep Purple"],
      releaseDate: "2022-09-16",
      weight: "206g",
      dimensions: "147.5 x 71.5 x 7.9 mm",
      os: "iOS 16",
      connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3"],
      inStock: true
    },
    {
      id: 9,
      name: "iPhone 14 Pro Max",
      price: 3199,
      image: iphone14ProMax,
      specs: "512GB, A16 chip, big screen",
      description: "The biggest iPhone with the best battery and display experience.",
      features: [
        "512GB storage",
        "A16 chip",
        "6.7-inch Super Retina XDR",
        "48MP camera system",
        "Dynamic Island"
      ],
      colors: ["Gold", "Deep Purple", "Silver"],
      releaseDate: "2022-09-16",
      weight: "240g",
      dimensions: "160.7 x 77.6 x 7.85 mm",
      os: "iOS 16",
      connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3"],
      inStock: true
    },
    {
      id: 10,
      name: "iPhone 13",
      price: 1899,
      image: iphone13,
      specs: "128GB, A15 chip, dual-camera",
      description: "Compact, fast, and affordable iPhone with long battery life.",
      features: [
        "128GB storage",
        "A15 chip",
        "6.1-inch OLED",
        "Dual camera system",
        "Night mode"
      ],
      colors: ["Green", "Blue", "Pink", "Red"],
      releaseDate: "2021-09-24",
      weight: "174g",
      dimensions: "146.7 x 71.5 x 7.65 mm",
      os: "iOS 15",
      connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0"],
      inStock: true
    },
    {
      id: 11,
      name: "iPhone 13 Pro",
      price: 2299,
      image: iphone13Pro,
      specs: "256GB, A15 chip, ProMotion",
      description: "High-performance device with ProMotion display and strong camera features.",
      features: [
        "256GB storage",
        "A15 chip",
        "120Hz ProMotion display",
        "Triple camera",
        "LiDAR sensor"
      ],
      colors: ["Graphite", "Sierra Blue"],
      releaseDate: "2021-09-24",
      weight: "204g",
      dimensions: "146.7 x 71.5 x 7.65 mm",
      os: "iOS 15",
      connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0"],
      inStock: true
    }
  ],

  headphones: [
  {
    id: 1,
    name: "AirPods Pro (2nd Gen)",
    price: 999,
    // image: airpodsPro2,
    specs: "ANC, MagSafe case, H2 chip",
    description: "AirPods Pro (2nd Gen) offer immersive sound, powerful noise cancellation, and seamless iOS integration.",
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "MagSafe charging case",
      "Adaptive EQ",
      "H2 chip for improved audio",
      "Up to 6 hours of listening"
    ],
    colors: ["White"],
    releaseDate: "2022-09-23",
    weight: "5.3g each (buds), 50.8g (case)",
    dimensions: "30.9 x 21.8 x 24.0 mm (each bud)",
    connectivity: ["Bluetooth 5.3"],
    inStock: true
  },
  {
    id: 2,
    name: "AirPods Max",
    price: 2099,
    // image: airpodsMax,
    specs: "Over-ear, ANC, Spatial Audio",
    description: "AirPods Max deliver high-fidelity audio, Adaptive EQ, and premium design with over-ear comfort.",
    features: [
      "Active Noise Cancellation",
      "Transparency mode",
      "Spatial Audio with dynamic head tracking",
      "Digital crown for volume and playback",
      "H1 chip in each ear cup",
      "Up to 20 hours battery life"
    ],
    colors: ["Silver", "Space Gray", "Sky Blue", "Green", "Pink"],
    releaseDate: "2020-12-15",
    weight: "384.8g",
    dimensions: "187.3 x 168.6 x 83.4 mm",
    connectivity: ["Bluetooth 5.0"],
    inStock: true
  },
  {
    id: 3,
    name: "Beats Fit Pro",
    price: 899,
    // image: beatsFitPro,
    specs: "Secure-fit, ANC, H1 chip",
    description: "Designed for active lifestyles, Beats Fit Pro offer powerful sound with secure fit and Apple ecosystem benefits.",
    features: [
      "Active Noise Cancellation",
      "Secure-fit wingtips",
      "Spatial Audio support",
      "H1 chip for iOS features",
      "IPX4 sweat and water resistance",
      "Up to 6 hours of listening (24 with case)"
    ],
    colors: ["Black", "White", "Stone Purple", "Sage Gray"],
    releaseDate: "2021-11-01",
    weight: "5.6g each (buds), 55.1g (case)",
    dimensions: "19.9 x 24.0 x 21.8 mm (each bud)",
    connectivity: ["Bluetooth 5.0", "Class 1"],
    inStock: true
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 1399,
    // image: sonyXM5,
    specs: "Over-ear, ANC, LDAC",
    description: "Sony WH-1000XM5 offers industry-leading noise cancellation and premium audio in a sleek form.",
    features: [
      "Multi-microphone ANC",
      "LDAC high-res wireless audio",
      "30-hour battery life",
      "Quick charging (3 min = 3 hours)",
      "Touch controls",
      "Alexa & Google Assistant support"
    ],
    colors: ["Black", "Silver"],
    releaseDate: "2022-05-20",
    weight: "250g",
    dimensions: "Unknown (foldable)",
    connectivity: ["Bluetooth 5.2", "3.5mm jack", "USB-C"],
    inStock: true
  },
  {
    id: 5,
    name: "Samsung Galaxy Buds2 Pro",
    price: 799,
    // image: galaxyBuds2Pro,
    specs: "ANC, 24-bit Hi-Fi audio",
    description: "Galaxy Buds2 Pro offer immersive 24-bit Hi-Fi sound with intelligent ANC in a compact design.",
    features: [
      "24-bit Hi-Fi audio",
      "Intelligent Active Noise Cancellation",
      "360 Audio",
      "IPX7 water resistance",
      "Up to 5 hours with ANC on",
      "Wireless charging case"
    ],
    colors: ["Graphite", "White", "Bora Purple"],
    releaseDate: "2022-08-26",
    weight: "5.5g each (buds), 43.4g (case)",
    dimensions: "21.6 x 19.9 x 18.7 mm (each bud)",
    connectivity: ["Bluetooth 5.3"],
    inStock: true
  },

  {
  id: 6,
  name: "Bose QuietComfort Ultra Headphones",
  price: 1599,
  // image: boseQCUltra,
  specs: "ANC, Immersive Audio, Long Battery",
  description: "Bose QuietComfort Ultra offers world-class noise cancellation and spatialized immersive audio in a luxurious design.",
  features: [
    "World-class Active Noise Cancellation",
    "Immersive Audio (spatial sound)",
    "Adjustable EQ via Bose app",
    "Up to 24 hours of battery life",
    "Bluetooth 5.3 + Multipoint",
    "Touch controls & voice assistant"
  ],
  colors: ["Black", "White Smoke"],
  releaseDate: "2023-10-03",
  weight: "254g",
  dimensions: "197 x 180 x 50 mm",
  connectivity: ["Bluetooth 5.3", "3.5mm jack", "USB-C"],
  inStock: true
},
{
  id: 7,
  name: "Sennheiser Momentum 4 Wireless",
  price: 1399,
  // image: sennMomentum4,
  specs: "Audiophile-grade sound, ANC",
  description: "Momentum 4 Wireless headphones deliver class-leading sound quality with adaptive noise cancellation and 60-hour battery life.",
  features: [
    "Adaptive Noise Cancellation",
    "60-hour battery life",
    "Built-in EQ and sound profiles",
    "USB-C fast charging",
    "Multipoint connection",
    "Touchpad controls"
  ],
  colors: ["Black", "White"],
  releaseDate: "2022-08-23",
  weight: "293g",
  dimensions: "192 x 180 x 46 mm",
  connectivity: ["Bluetooth 5.2", "3.5mm jack", "USB-C"],
  inStock: true
},
{
  id: 8,
  name: "Jabra Elite 10",
  price: 799,
  // image: jabraElite10,
  specs: "ANC, Dolby Atmos, Multipoint",
  description: "Jabra Elite 10 offers premium call quality, Dolby Head Tracking, and all-day comfort for both work and play.",
  features: [
    "Hybrid ANC + HearThrough",
    "Dolby Atmos with head tracking",
    "6-mic call technology",
    "IP57 water/dust resistance",
    "Multipoint Bluetooth",
    "Up to 6 hours battery (27h w/case)"
  ],
  colors: ["Titanium Black", "Cream", "Cocoa", "Gloss Black"],
  releaseDate: "2023-09-14",
  weight: "5.7g each (buds), 45.1g (case)",
  dimensions: "22.1 x 18.8 x 20.2 mm (each bud)",
  connectivity: ["Bluetooth 5.3"],
  inStock: true
},
{
  id: 9,
  name: "Anker Soundcore Liberty 4 NC",
  price: 399,
  // image: soundcoreLiberty4NC,
  specs: "Budget ANC, LDAC, 10mm drivers",
  description: "Liberty 4 NC combines affordability with features like Hi-Res Audio, customizable ANC, and multi-device support.",
  features: [
    "Adaptive ANC 2.0",
    "10mm drivers + LDAC support",
    "Hi-Res Wireless Audio",
    "Bluetooth Multipoint",
    "IPX4 water resistance",
    "Up to 10 hours battery (50h with case)"
  ],
  colors: ["Black", "White", "Sky Blue", "Pink", "Navy Blue"],
  releaseDate: "2023-06-28",
  weight: "5.2g each (buds), 48.2g (case)",
  dimensions: "23.5 x 18.1 x 24.6 mm (each bud)",
  connectivity: ["Bluetooth 5.3"],
  inStock: true
},
{
  id: 10,
  name: "Marshall Major IV",
  price: 599,
  // image: marshallMajorIV,
  specs: "On-ear, Iconic sound, 80h battery",
  description: "Marshall Major IV blends iconic design with rock-inspired sound and industry-leading 80-hour battery life.",
  features: [
    "Custom-tuned dynamic drivers",
    "80+ hours of wireless playtime",
    "Wireless charging support",
    "Foldable design with control knob",
    "3.5mm jack passthrough",
    "Retro Marshall styling"
  ],
  colors: ["Black", "Brown"],
  releaseDate: "2020-10-14",
  weight: "165g",
  dimensions: "160 x 160 x 70 mm",
  connectivity: ["Bluetooth 5.0", "3.5mm jack", "USB-C"],
  inStock: true
}

],


  laptop: [],
  television: [],
  monitor: [],
  playstation: [],
};


export default allProducts;
