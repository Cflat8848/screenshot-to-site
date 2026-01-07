// Product data extracted from Excel - Single source of truth

export interface Product {
  id: string;
  name: string;
  description: string; // Changed from "specification" to "description"
  category: string;
  subCategory: string;
  sizes: string[];
  unit: "Liter" | "KG"; // Unit type for display
  image?: string; // Card image (500x500)
  imageDetail?: string; // Detail image (800x800)
  sizeImages?: Record<string, string>; // Size-specific images
  prices?: Record<string, number>; // Price per size in NPR
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  products: Product[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  subCategories: SubCategory[];
}

// Helper function to format sizes with unit
export const formatSize = (size: string, unit: "Liter" | "KG"): string => {
  return `${size} ${unit}`;
};

// Automotive Oils - Passenger and Light Commercial
const passengerLightCommercial: Product[] = [
  {
    id: "plc-1",
    name: "RACOIL 5W-30 SL/CF",
    description: "High-performance multigrade engine oil providing excellent lubrication, engine cleanliness, and wear protection. Suitable for petrol and diesel engines, ensuring smooth performance and improved fuel efficiency.",
    category: "Automotive Oils",
    subCategory: "Passenger and Light Commercial",
    sizes: ["1", "3", "3.5"],
    unit: "Liter",
    image: "/products/racoil-5w30-slcf-1l.png",
    imageDetail: "/products/racoil-5w30-slcf-1l.png",
    sizeImages: {
      "1": "/products/racoil-5w30-slcf-1l.png",
      "3": "/products/racoil-5w30-slcf-3l.png",
      "3.5": "/products/racoil-5w30-slcf-3.5l.png"
    },
    prices: {
      "1": 907,
      "3": 2685,
      "3.5": 3132
    }
  },
  {
    id: "plc-2",
    name: "RACOIL 5W-30 SM/CF",
    description: "Advanced engine oil formulated for modern engines, offering superior protection against wear, sludge, and oxidation while delivering reliable performance in all driving conditions.",
    category: "Automotive Oils",
    subCategory: "Passenger and Light Commercial",
    sizes: ["1", "3", "4"],
    unit: "Liter"
  },
  {
    id: "plc-3",
    name: "RACOIL 20W-50 SL/CF",
    description: "Heavy-duty multigrade engine oil designed to protect engines operating under high temperature and load conditions. Helps reduce oil consumption and extend engine life.",
    category: "Automotive Oils",
    subCategory: "Passenger and Light Commercial",
    sizes: ["1", "3"],
    unit: "Liter"
  },
  {
    id: "plc-4",
    name: "RACOIL 20W-40 CF/4",
    description: "Robust engine oil suitable for diesel engines, providing good engine protection, cleanliness, and stable performance during long operating hours.",
    category: "Automotive Oils",
    subCategory: "Passenger and Light Commercial",
    sizes: ["1", "3"],
    unit: "Liter"
  },
  {
    id: "plc-5",
    name: "RACOIL 10W-40 SM",
    description: "Premium multigrade engine oil offering excellent cold start performance, reduced engine wear, and smooth operation for petrol engines.",
    category: "Automotive Oils",
    subCategory: "Passenger and Light Commercial",
    sizes: ["1", "3", "4"],
    unit: "Liter"
  },
  {
    id: "plc-6",
    name: "RACOIL 10W-30 SM",
    description: "Fuel-efficient engine oil designed to provide effective lubrication, engine cleanliness, and reliable protection for modern petrol engines.",
    category: "Automotive Oils",
    subCategory: "Passenger and Light Commercial",
    sizes: ["1", "3", "4"],
    unit: "Liter"
  }
];

// Heavy Duty Motor Oils
const heavyDutyMotorOils: Product[] = [
  {
    id: "hdm-1",
    name: "RACOIL PLATINUM 15W-40 CI-4",
    description: "High-performance diesel engine oil formulated for heavy-duty engines. Provides excellent wear protection, soot control, and long engine life.",
    category: "Automotive Oils",
    subCategory: "Heavy Duty Motor Oils",
    sizes: ["1", "6", "6.5", "7", "8", "10", "15", "210"],
    unit: "Liter"
  },
  {
    id: "hdm-2",
    name: "RACOIL PLATINUM 15W-40 CI-4 PLUS",
    description: "Enhanced heavy-duty engine oil offering superior protection against deposits, oxidation, and wear in high-load diesel engines.",
    category: "Automotive Oils",
    subCategory: "Heavy Duty Motor Oils",
    sizes: ["1", "6", "6.5", "7", "8", "10", "15", "210"],
    unit: "Liter"
  },
  {
    id: "hdm-3",
    name: "RACOIL PLATINUM 15W-40 CH-4",
    description: "Reliable diesel engine oil designed for commercial vehicles, ensuring engine cleanliness and dependable performance under severe conditions.",
    category: "Automotive Oils",
    subCategory: "Heavy Duty Motor Oils",
    sizes: ["1", "6", "6.5", "7", "8", "10", "15", "210"],
    unit: "Liter"
  },
  {
    id: "hdm-4",
    name: "RACOIL PLATINUM 15W-40 CF-4",
    description: "Quality engine oil suitable for older diesel engines, providing effective lubrication, corrosion protection, and stable engine operation.",
    category: "Automotive Oils",
    subCategory: "Heavy Duty Motor Oils",
    sizes: ["1", "6", "6.5", "7", "8", "10", "15", "210"],
    unit: "Liter"
  }
];

// Motorcycle Oils
const motorcycleOils: Product[] = [
  {
    id: "mc-1",
    name: "RACOIL 4T 10W-30 SL/CF",
    description: "Motorcycle engine oil providing excellent lubrication, improved fuel economy, and reliable performance in daily riding conditions.",
    category: "Automotive Oils",
    subCategory: "Motorcycle Oils",
    sizes: ["0.8", "1"],
    unit: "Liter",
    image: "/products/racoil-4t-10w30-0.8l.png",
    imageDetail: "/products/racoil-4t-10w30-0.8l.png",
    sizeImages: {
      "0.8": "/products/racoil-4t-10w30-0.8l.png",
      "1": "/products/racoil-4t-10w30-1l.png"
    }
  },
  {
    id: "mc-2",
    name: "RACOIL 4T 20W-50 SL/CF",
    description: "Specially formulated 4-stroke motorcycle oil ensuring smooth clutch performance, strong engine protection, and high thermal stability.",
    category: "Automotive Oils",
    subCategory: "Motorcycle Oils",
    sizes: ["1", "1.2"],
    unit: "Liter",
    image: "/products/racoil-4t-20w50-1l.png",
    imageDetail: "/products/racoil-4t-20w50-1l.png",
    sizeImages: {
      "1": "/products/racoil-4t-20w50-1l.png",
      "1.2": "/products/racoil-4t-20w50-1.2l.png"
    }
  },
  {
    id: "mc-3",
    name: "RACOIL 4T 10W-40 SM/CF",
    description: "Premium motorcycle oil offering superior engine cleanliness, reduced wear, and smooth acceleration.",
    category: "Automotive Oils",
    subCategory: "Motorcycle Oils",
    sizes: ["1"],
    unit: "Liter",
    image: "/products/racoil-4t-10w40-smcf-1l.png",
    imageDetail: "/products/racoil-4t-10w40-smcf-1l.png",
    sizeImages: {
      "1": "/products/racoil-4t-10w40-smcf-1l.png"
    }
  },
  {
    id: "mc-4",
    name: "RACOIL SUPER 4T 20W-50 CF/SF",
    description: "Motorcycle oil designed for high-temperature operation, ensuring long engine life and consistent performance.",
    category: "Automotive Oils",
    subCategory: "Motorcycle Oils",
    sizes: ["1"],
    unit: "Liter"
  }
];

// Agriculture Oils
const agricultureOils: Product[] = [
  {
    id: "ag-1",
    name: "RACOIL TRACTOR ENGINE OIL 20W-40 CF",
    description: "Specially designed for tractors and agricultural engines, providing reliable lubrication, engine protection, and durability during long working hours.",
    category: "Automotive Oils",
    subCategory: "Agriculture Oils",
    sizes: ["1", "8", "10"],
    unit: "Liter"
  },
  {
    id: "ag-2",
    name: "RACOIL UTTO 10W-30",
    description: "Universal Tractor Transmission Oil suitable for transmissions, hydraulics, and wet brakes, ensuring smooth operation and equipment protection.",
    category: "Automotive Oils",
    subCategory: "Agriculture Oils",
    sizes: ["1", "10", "20"],
    unit: "Liter"
  }
];

// Automotive Gear Oils
const automotiveGearOils: Product[] = [
  {
    id: "ago-1",
    name: "RACOIL GEAR OIL EP 140 GL-3",
    description: "Heavy-duty gear oil providing excellent load-carrying capacity and protection against wear in gear systems.",
    category: "Automotive Oils",
    subCategory: "Automotive Gear Oils",
    sizes: ["1", "4", "8", "10", "20"],
    unit: "Liter"
  },
  {
    id: "ago-2",
    name: "RACOIL GEAR OIL EP 90 GL-3",
    description: "Reliable gear oil ensuring smooth operation, reduced noise, and extended gear life.",
    category: "Automotive Oils",
    subCategory: "Automotive Gear Oils",
    sizes: ["1", "4", "8", "10", "20"],
    unit: "Liter"
  },
  {
    id: "ago-3",
    name: "RACOIL TRANSMISSION/GEAR OIL 85W-140 GL4",
    description: "High-viscosity gear oil designed for heavy-load transmissions and differentials.",
    category: "Automotive Oils",
    subCategory: "Automotive Gear Oils",
    sizes: ["1", "4", "8", "10", "20"],
    unit: "Liter"
  },
  {
    id: "ago-4",
    name: "RACOIL TRANSMISSION/GEAR OIL 85W-140 GL5",
    description: "Extreme-pressure gear oil offering superior protection under severe operating conditions.",
    category: "Automotive Oils",
    subCategory: "Automotive Gear Oils",
    sizes: ["1", "4", "8", "10", "20"],
    unit: "Liter"
  },
  {
    id: "ago-5",
    name: "RACOIL TRANSMISSION/GEAR OIL 80W-90 GL-4",
    description: "Quality transmission oil providing smooth gear shifting and wear protection.",
    category: "Automotive Oils",
    subCategory: "Automotive Gear Oils",
    sizes: ["1", "4", "8", "10", "20"],
    unit: "Liter"
  },
  {
    id: "ago-6",
    name: "RACOIL TRANSMISSION/GEAR OIL 80W-90 GL-5",
    description: "High-performance gear oil designed for heavy-duty automotive applications.",
    category: "Automotive Oils",
    subCategory: "Automotive Gear Oils",
    sizes: ["1", "4", "8", "10", "20"],
    unit: "Liter"
  },
  {
    id: "ago-7",
    name: "RACOIL ATF II/TQ",
    description: "Automatic Transmission Fluid providing smooth gear shifting, oxidation resistance, and transmission protection.",
    category: "Automotive Oils",
    subCategory: "Automotive Gear Oils",
    sizes: ["1", "10", "20"],
    unit: "Liter"
  }
];

// Industrial Gear Oils
const industrialGearOils: Product[] = [
  {
    id: "igo-1",
    name: "RACOIL GEAR BOX OIL 150",
    description: "Industrial gear oils formulated to handle heavy loads, reduce wear, and protect gears from rust and oxidation.",
    category: "Industrial Oils",
    subCategory: "Industrial Gear Oils",
    sizes: ["20", "210"],
    unit: "Liter"
  },
  {
    id: "igo-2",
    name: "RACOIL GEAR BOX OIL 220",
    description: "Industrial gear oils formulated to handle heavy loads, reduce wear, and protect gears from rust and oxidation.",
    category: "Industrial Oils",
    subCategory: "Industrial Gear Oils",
    sizes: ["20", "210"],
    unit: "Liter"
  },
  {
    id: "igo-3",
    name: "RACOIL GEAR BOX OIL 320",
    description: "Industrial gear oils formulated to handle heavy loads, reduce wear, and protect gears from rust and oxidation.",
    category: "Industrial Oils",
    subCategory: "Industrial Gear Oils",
    sizes: ["20", "210"],
    unit: "Liter"
  }
];

// Heat Transfer Oils
const heatTransferOils: Product[] = [
  {
    id: "hto-1",
    name: "RACOIL HEAT TRANSFER OIL 32",
    description: "High-quality heat transfer oils offering excellent thermal stability and efficient heat circulation in heating systems.",
    category: "Industrial Oils",
    subCategory: "Heat Transfer Oils",
    sizes: ["20", "210"],
    unit: "Liter"
  },
  {
    id: "hto-2",
    name: "RACOIL HEAT TRANSFER OIL 46",
    description: "High-quality heat transfer oils offering excellent thermal stability and efficient heat circulation in heating systems.",
    category: "Industrial Oils",
    subCategory: "Heat Transfer Oils",
    sizes: ["10", "20", "210"],
    unit: "Liter"
  }
];

// Hydraulic System Oils
const hydraulicOils: Product[] = [
  {
    id: "ho-1",
    name: "RACOIL HYDRO AW 46",
    description: "Anti-wear hydraulic oil providing smooth power transmission and equipment protection.",
    category: "Industrial Oils",
    subCategory: "Hydraulic System Oils",
    sizes: ["10", "20", "210"],
    unit: "Liter"
  },
  {
    id: "ho-2",
    name: "RACOIL HYDRO AW 68",
    description: "Premium hydraulic oil suitable for high-pressure hydraulic systems.",
    category: "Industrial Oils",
    subCategory: "Hydraulic System Oils",
    sizes: ["10", "20", "210"],
    unit: "Liter"
  },
  {
    id: "ho-3",
    name: "RACOIL HYDRO SUPER 68",
    description: "Enhanced hydraulic oil offering improved oxidation resistance and long service life.",
    category: "Industrial Oils",
    subCategory: "Hydraulic System Oils",
    sizes: ["10", "20", "210"],
    unit: "Liter"
  },
  {
    id: "ho-4",
    name: "RACOIL TRANSMISSION 10W",
    description: "Multipurpose oil designed for transmission and hydraulic applications.",
    category: "Industrial Oils",
    subCategory: "Hydraulic System Oils",
    sizes: ["10", "20", "210"],
    unit: "Liter"
  }
];

// Compressor Oils
const compressorOils: Product[] = [
  {
    id: "co-1",
    name: "RACOIL COMPRESSOR OIL ISO 100",
    description: "High-quality compressor oils designed to reduce wear, prevent deposits, and ensure efficient compressor performance.",
    category: "Industrial Oils",
    subCategory: "Compressor Oils",
    sizes: ["10", "20", "210"],
    unit: "Liter"
  },
  {
    id: "co-2",
    name: "RACOIL COMPRESSOR OIL 32",
    description: "High-quality compressor oils designed to reduce wear, prevent deposits, and ensure efficient compressor performance.",
    category: "Industrial Oils",
    subCategory: "Compressor Oils",
    sizes: ["10", "20", "210"],
    unit: "Liter"
  },
  {
    id: "co-3",
    name: "RACOIL COMPRESSOR OIL 46",
    description: "High-quality compressor oils designed to reduce wear, prevent deposits, and ensure efficient compressor performance.",
    category: "Industrial Oils",
    subCategory: "Compressor Oils",
    sizes: ["10", "20", "210"],
    unit: "Liter"
  },
  {
    id: "co-4",
    name: "RACOIL COMPRESSOR OIL 68",
    description: "High-quality compressor oils designed to reduce wear, prevent deposits, and ensure efficient compressor performance.",
    category: "Industrial Oils",
    subCategory: "Compressor Oils",
    sizes: ["10", "20", "210"],
    unit: "Liter"
  }
];

// Greases - sizes in KG
const greases: Product[] = [
  {
    id: "gr-1",
    name: "Rubber Grease",
    description: "Water-resistant grease suitable for rubber components and seals.",
    category: "Greases",
    subCategory: "Greases",
    sizes: ["0.5", "1", "2", "3", "5", "10", "18", "180"],
    unit: "KG"
  },
  {
    id: "gr-2",
    name: "Red Grease",
    description: "General-purpose grease offering good lubrication and protection.",
    category: "Greases",
    subCategory: "Greases",
    sizes: ["0.5", "1", "2", "3", "5", "10", "18", "180"],
    unit: "KG"
  },
  {
    id: "gr-3",
    name: "Bearing EP Grease",
    description: "Extreme-pressure grease designed for heavy-load bearings.",
    category: "Greases",
    subCategory: "Greases",
    sizes: ["0.5", "1", "2", "3", "5", "10", "18", "180"],
    unit: "KG"
  },
  {
    id: "gr-4",
    name: "Bearing Grease Ged Gel",
    description: "Smooth-texture grease providing long-lasting bearing protection.",
    category: "Greases",
    subCategory: "Greases",
    sizes: ["0.5", "1", "2", "3", "5", "10", "18", "180"],
    unit: "KG"
  },
  {
    id: "gr-5",
    name: "HT Blue Grease",
    description: "High-temperature grease suitable for demanding applications.",
    category: "Greases",
    subCategory: "Greases",
    sizes: ["0.5", "1", "10", "18"],
    unit: "KG",
    image: "/products/ht-blue-grease-0.5kg.png",
    imageDetail: "/products/ht-blue-grease-0.5kg.png",
    sizeImages: {
      "0.5": "/products/ht-blue-grease-0.5kg.png",
      "1": "/products/ht-blue-grease-1kg.png",
      "10": "/products/ht-blue-grease-10kg.png",
      "18": "/products/ht-blue-grease-18kg.png"
    }
  },
  {
    id: "gr-6",
    name: "Chessic Grease",
    description: "Durable grease designed for chassis lubrication and protection.",
    category: "Greases",
    subCategory: "Greases",
    sizes: ["0.5", "1", "10", "18"],
    unit: "KG",
    image: "/products/chassic-grease-0.5kg.png",
    imageDetail: "/products/chassic-grease-0.5kg.png",
    sizeImages: {
      "0.5": "/products/chassic-grease-0.5kg.png",
      "1": "/products/chassic-grease-1kg.png",
      "10": "/products/chassic-grease-10kg.png",
      "18": "/products/chassic-grease-18kg.png"
    }
  },
  {
    id: "gr-7",
    name: "Calcium White Grease",
    description: "Water-resistant grease suitable for automotive and industrial use.",
    category: "Greases",
    subCategory: "Greases",
    sizes: ["0.5", "1", "10", "18"],
    unit: "KG",
    image: "/products/calcium-white-grease-0.5kg.png",
    imageDetail: "/products/calcium-white-grease-0.5kg.png",
    sizeImages: {
      "0.5": "/products/calcium-white-grease-0.5kg.png",
      "1": "/products/calcium-white-grease-1kg.png",
      "10": "/products/calcium-white-grease-10kg.png",
      "18": "/products/calcium-white-grease-18kg.png"
    }
  }
];

// Antifreeze/Coolants - renamed to "Others" as per Excel
const coolants: Product[] = [
  {
    id: "af-1",
    name: "Coolants Ready Green",
    description: "Ready-to-use engine coolants providing excellent protection against overheating, corrosion, and rust.",
    category: "Others",
    subCategory: "Coolants",
    sizes: ["1"],
    unit: "Liter",
    image: "/products/coolant-ready-green.png",
    imageDetail: "/products/coolant-ready-green.png"
  },
  {
    id: "af-2",
    name: "Coolants Ready Red",
    description: "Ready-to-use engine coolants providing excellent protection against overheating, corrosion, and rust.",
    category: "Others",
    subCategory: "Coolants",
    sizes: ["1"],
    unit: "Liter",
    image: "/products/coolant-ready-red.png",
    imageDetail: "/products/coolant-ready-red.png"
  },
  {
    id: "af-3",
    name: "Coolants Green 1:4",
    description: "High-quality coolant concentrate ensuring effective engine cooling and long radiator life.",
    category: "Others",
    subCategory: "Coolants",
    sizes: ["1"],
    unit: "Liter",
    image: "/products/coolant-green-1-4.png",
    imageDetail: "/products/coolant-green-1-4.png"
  }
];

// All categories with their subcategories
export const productCategories: Category[] = [
  {
    id: "automotive-oils",
    name: "Automotive Oils",
    slug: "automotive-oils",
    subCategories: [
      {
        id: "passenger-light-commercial",
        name: "Passenger and Light Commercial",
        slug: "passenger-light-commercial",
        products: passengerLightCommercial
      },
      {
        id: "heavy-duty-motor-oils",
        name: "Heavy Duty Motor Oils",
        slug: "heavy-duty-motor-oils",
        products: heavyDutyMotorOils
      },
      {
        id: "motorcycle-oils",
        name: "Motorcycle Oils",
        slug: "motorcycle-oils",
        products: motorcycleOils
      },
      {
        id: "agriculture-oils",
        name: "Agriculture Oils",
        slug: "agriculture-oils",
        products: agricultureOils
      },
      {
        id: "automotive-gear-oils",
        name: "Automotive Gear Oils",
        slug: "automotive-gear-oils",
        products: automotiveGearOils
      }
    ]
  },
  {
    id: "industrial-oils",
    name: "Industrial Oils",
    slug: "industrial-oils",
    subCategories: [
      {
        id: "industrial-gear-oils",
        name: "Industrial Gear Oils",
        slug: "industrial-gear-oils",
        products: industrialGearOils
      },
      {
        id: "heat-transfer-oils",
        name: "Heat Transfer Oils",
        slug: "heat-transfer-oils",
        products: heatTransferOils
      },
      {
        id: "hydraulic-system-oils",
        name: "Hydraulic System Oils",
        slug: "hydraulic-system-oils",
        products: hydraulicOils
      },
      {
        id: "compressor-oils",
        name: "Compressor Oils",
        slug: "compressor-oils",
        products: compressorOils
      }
    ]
  },
  {
    id: "greases",
    name: "Greases",
    slug: "greases",
    subCategories: [
      {
        id: "greases",
        name: "Greases",
        slug: "greases",
        products: greases
      }
    ]
  },
  {
    id: "others",
    name: "Others",
    slug: "others",
    subCategories: [
      {
        id: "coolants",
        name: "Coolants",
        slug: "coolants",
        products: coolants
      }
    ]
  }
];

// Helper functions
export const getAllProducts = (): Product[] => {
  return productCategories.flatMap(category =>
    category.subCategories.flatMap(subCategory => subCategory.products)
  );
};

export const getProductById = (id: string): Product | undefined => {
  return getAllProducts().find(product => product.id === id);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return productCategories.find(category => category.slug === slug);
};

export const getSubCategoryBySlug = (categorySlug: string, subCategorySlug: string): SubCategory | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.subCategories.find(sub => sub.slug === subCategorySlug);
};
