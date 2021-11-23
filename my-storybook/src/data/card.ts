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
  items?: DBFeatureData[];
  image: { src: string; alt: string };
  name: string;
  description: string;
  buttonSecondary?: ButtonCard;
  buttonPrimary?: ButtonCard;
}

export const cardRating: CardType = {
    name: "Hotel Gold River",
    buttonPrimary: {
      "label": "Ver hotel",
      "url": ""
    },
    buttonSecondary: {
      "label": "Ver promociones",
      "url": ""
    },
  
    description: "Siéntete como un auténtico vaquero de la época dorada del Lejano Oeste alojándote en el poblado de Sullivan para disfrutar de una aventura única al más puro estilo Far West. ¿Estás listo para vivir las aventuras de un auténtico vaquero?.",
    image: {
      "alt": "Hotel Colorado Creek",
      "src": "https://search.portaventuraworld.com/assets/hotel/112618/media/property-images/property-main-image/hgr_3_320x320.jpg"
    },
    stars: 4,
    price: 450
}

export const cardItems: CardType =  {
    name: "Portaventura Park",
    buttonPrimary: {
      label: "Ver parque",
      url: "/parques/parqueportaventura"
    },
    
    description: "Seis fascinantes mundos completamente distintos, para que disfrutes al máximo con toda tu familia.",
    image: {
      "alt": "portaventuraPark",
      "src": "https://www.portaventuraworld.com/static/1a81162122685db2ff69aea26cdd8e9e/05b6c/cabecera-pap.jpg"
    },
    items: [
      {
        "icon": "compass",
        "text": "6 mundos por explorar llenos de diversión."
      },
      {
        "icon": "rocket",
        "text": "Más de 40 atracciones."
      },
      {
        "icon": "star_raw",
        "text": "Nuevos espectáculos cada época del año."
      },
      {
        "icon": "utensils",
        "text": "Comida en un entorno caribeño"
      }
    ]
}