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

export const cardsHotel: CardType[] = [
  {
    name: "Hotel Colorado Creek",
    buttonPrimary: {
      label: "Ver hotel",
      url: ""
    },
    buttonSecondary: {
      label: "Ver promociones",
      url: ""
    },

    description: "Al norte de la ciudad de Sullivan, los buscadores de oro construyeron un hotel repleto de comodidades, donde compartían sus viajes y aventuras. Adéntrate en el auténtico viaje por la fiebre del oro en nuestro Hotel Colorado Creek 4*.",
    image: {
      alt: "Hotel Colorado Creek",
      src: "https://search.portaventuraworld.com/assets/hotel/112624/media/property-images/property-main-image/hcc-1.jpg"
    },
    stars: 4,
    price: 175
  },
  {
    name: "Hotel Gold River",
    buttonPrimary: {
      label: "Ver hotel",
      url: ""
    },
    buttonSecondary: {
      label: "Ver promociones",
      url: ""
    },

    description: "Siéntete como un auténtico vaquero de la época dorada del Lejano Oeste alojándote en el poblado de Sullivan para disfrutar de una aventura única al más puro estilo Far West. ¿Estás listo para vivir las aventuras de un auténtico vaquero?.",
    image: {
      alt: "Hotel Colorado Creek",
      src: "https://search.portaventuraworld.com/assets/hotel/112618/media/property-images/property-main-image/hgr_3_320x320.jpg"
    },
    stars: 4,
    price: 450
  },
  {
    name: "Hotel Mansion de Lucy",
    buttonPrimary: {
      label: "Ver hotel",
      url: "/hoteles/mansionlucy"
    },
    buttonSecondary: {
      label: "Ver promociones",
      url: "/hoteles/mansionlucy"
    },
   
    description: "Disfruta de nuestro Hotel 5 estrellas en la Costa Dorada ambientado en el puro Far West del Siglo XIX y ubicado [b]Ubicado en[/b]ortAventura Park. Habitaciones lujosas donde podrás vivir la auténtica experiencia PortAventurera, pasarlo en grande y descansar de tu día en los parques.",
    image: {
      alt: "Hotel Colorado Creek",
      src: "https://search.portaventuraworld.com/assets/hotel/112620/media/property-images/property-main-image/hml_-_3__-_320x320.jpg"
    },
    stars: 5,

    price: 650
  },
  {
    name: "Hotel PortAventura",
    buttonPrimary: {
      label: "Ver hotel",
      url: ""
    },
    buttonSecondary: {
      label: "Ver promociones",
      url: ""
    },
 
    description: "Vive la magia del Mediterráneo en el Hotel PortAventura: trasládate a este maravilloso hotel que recrea un pueblo pesquero y disfruta de una relajante experiencia.",
    image: {
      alt: "Hotel Colorado Creek",
      src: "https://search.portaventuraworld.com/assets/hotel/112616/media/property-images/property-main-image/hpa_2_320x320.jpg"
    },
    stars: 4,
 
    price: 650
  },
]