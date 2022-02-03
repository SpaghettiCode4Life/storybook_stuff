interface DBFeatureData {
  icon: string;
  text: string;
}


type ButtonCard = {
  label: string;
  url: string;
};
  

export interface CardType {
  stars?: number;
  price?: number;
  type?: string;
  items?: DBFeatureData[];
  image: { src: string; alt: string };
  name: string;
  description: string;
  buttonSecondary?: ButtonCard;
  buttonPrimary?: ButtonCard;
}

export const cardRating: CardType = {
    name: "Hotel Card ejemplo",
    buttonPrimary: {
      "label": "Ver hotel",
      "url": ""
    },
    buttonSecondary: {
      "label": "Ver promociones",
      "url": ""
    },
  
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: {
      "alt": "Hotel ejemplo",
      "src": "https://search.portaventuraworld.com/assets/hotel/112618/media/property-images/property-main-image/hgr_3_320x320.jpg"
    },
    stars: 4,
    price: 450
}

export const coverCard: CardType = {
  type: "cover",
  image:{
    "alt": "tarjeta cover",
    "src": "https://search.portaventuraworld.com/assets/hotel/112618/media/property-images/property-main-image/hgr_3_320x320.jpg"
  },
  buttonPrimary: {
    label: "Ver más",
    url: "/parques/parqueportaventura"
  },
  name: "Card Type",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
}

export const cardItems: CardType =  {
    name: "Card listing",
    buttonPrimary: {
      label: "Ver más",
      url: "/parques/parqueportaventura"
    },
    
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: {
      "alt": "imagelistcard",
      "src": "https://www.portaventuraworld.com/static/1a81162122685db2ff69aea26cdd8e9e/05b6c/cabecera-pap.jpg"
    },
    items: [
      {
        "icon": "compass",
        "text": "Primer característica."
      },
      {
        "icon": "rocket",
        "text": "Segunda característica."
      },
      {
        "icon": "star_raw",
        "text": "Tercera característica."
      },
      {
        "icon": "utensils",
        "text": "Cuarta característica."
      }
    ]
}

export const cardsHotel: CardType[] = [
  {
    name: "Hotel Card 1",
    buttonPrimary: {
      label: "Ver hotel",
      url: ""
    },
    buttonSecondary: {
      label: "Ver promociones",
      url: ""
    },

    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: {
      alt: "image1",
      src: "https://search.portaventuraworld.com/assets/hotel/112624/media/property-images/property-main-image/hcc-1.jpg"
    },
    stars: 4,
    price: 175
  },
  {
    name: "Hotel Card 2",
    buttonPrimary: {
      label: "Ver hotel",
      url: ""
    },
    buttonSecondary: {
      label: "Ver promociones",
      url: ""
    },

    description: "SLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: {
      alt: "image2",
      src: "https://search.portaventuraworld.com/assets/hotel/112618/media/property-images/property-main-image/hgr_3_320x320.jpg"
    },
    stars: 4,
    price: 450
  },
  {
    name: "Hotel Card 3",
    buttonPrimary: {
      label: "Ver hotel",
      url: "/hoteles/mansionlucy"
    },
    buttonSecondary: {
      label: "Ver promociones",
      url: "/hoteles/mansionlucy"
    },
   
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: {
      alt: "image3",
      src: "https://search.portaventuraworld.com/assets/hotel/112620/media/property-images/property-main-image/hml_-_3__-_320x320.jpg"
    },
    stars: 5,

    price: 650
  },
  {
    name: "Hotel Card 4",
    buttonPrimary: {
      label: "Ver hotel",
      url: ""
    },
    buttonSecondary: {
      label: "Ver promociones",
      url: ""
    },
 
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: {
      alt: "image4",
      src: "https://search.portaventuraworld.com/assets/hotel/112616/media/property-images/property-main-image/hpa_2_320x320.jpg"
    },
    stars: 4,
 
    price: 650
  },
]