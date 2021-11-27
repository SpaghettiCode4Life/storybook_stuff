interface MenuLevel {
    type: "level";
    href?: string;
    children: MenuEntry[];
  }
  
  interface MenuRoot {
    type: "root";
    href: string;
    banners: MenuBanner[];
    children: MenuEntry[];
  }
  
  interface MenuInternal {
    href: string;
    type: "internal";
  }
  
  interface MenuExternal {
    href: string;
    type: "external";
  }
  
  interface MenuText {
    href: "";
    type: "text";
  }
  
  export type MenuEntry = {
    text: string;
    icon?: string;
  } & (MenuLevel | MenuInternal | MenuExternal | MenuText | MenuRoot);
  
  export type MenuBanner = {
    text: string;
    icon: string;
    img: string;
  } & (MenuInternal | MenuExternal);

export const mainMenu: MenuEntry[] = [
    {
      text: "Entradas y Paquetes",
      type: "root",
      href: "/entradas",
      icon: "ticketMenu",
      banners: [
        {
          text: "Baner customizado",
          img: "https://i2.wp.com/www.cgquarterly.com/wp-content/uploads/2015/07/tetris1.png",
          type: "external",
          href: "/entradas+halloween",
          icon: "promotionMenu"
        },
        {
          text: "Entradas + Hotel",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpl0xj33VRrMaqAoFgwy-_6Q3pKw7mK3sjA&usqp=CAU",
          type: "external",
          href: "http://www.portaventuraworld.com",
          icon: "promotionMenu"
        }
      ],
      children: [
        {
          text: "Entradas a los parques",
          type: "level",
          href: "/entradas",
          children: [
            {
              text: "Entradas PortAventura Park",
              type: "internal",
              href: "/entradas"
            },
            {
              text: "Entradas Caribe Aquatic Park",
              type: "internal",
              href: "/entradas/caribe-aquatic-park",
           },
            {
              text: "Entradas Ferrari Land",
              type: "internal",
              href: "/entradas/ferrari-land"
            }
          ]
        },
        {
          text: "Pases Express",
          type: "internal",
          href: "/entradas/pase-express"
        },
        {
          text: "Pases Anuales",
          type: "level",
          href: "/",
          children: [
            {
              text: "Pase Anual Platinum",
              type: "internal",
              href: "/pase-anual/pase-platinum"
            },
            {
              text: "Pase Anual Premium",
              type: "internal",
              href: "/pase-anual/pase-premium"
            },
            {
              text: "Pase Anual Gold",
              type: "internal",
              href: "/pase-anual/pase-gold"
            }
          ]
        },
        {
          text: "Tarifas Especiales",
          type: "level",
          href: "/",
          children: [
            {
              text: "Familias numerosas y monoparentales",
              type: "internal",
              href: "/entradas/familia-numerosa"
            },
            {
              text: "Personas con discapacidad",
              type: "internal",
              href: "/entradas/personas-discapacidad-pmr"
            },
            {
              text: "Grupos escolares",
              type: "internal",
              href: "/grupos/grupos-escolares"
            },
            {
              text: "Grupos vacacionales",
              type: "internal",
              href: "/grupos/grupos-vacacionales"
            }
          ]
        },
        {
        
          text: "Promociones",
          type: "level",
          href: "/",
          children: [
            {
              text: "ENTRADAS + HOTEL desde 65 €* pers./noche",
              type: "internal",
              href: "/promociones/vacaciones"
            },
            {
              text: "Entradas + transporte",
              type: "internal",
              href: "/promociones/entradas-transporte"
            },
            {
              text: "Tienda online PortAventura",
              type: "internal",
              href: "/promociones/tienda-online"
            },
            {
              text: "¿Sois un grupo vacacional o escolar?",
              type: "internal",
              href: "/promociones"
            },
            {
              text: "¡Llévate tus fotos de recuerdo!",
              type: "internal",
              href: "/promociones/entrada-hotel"
            },
            {
              text: "Nuevas promociones para renovar o comprar tu Pase Anual",
              type: "internal",
              href: "/promociones/club-oferta-pase-anual"
            },
            {
              text: "Entrada de 2 días al precio de 1",
              type: "internal",
              href: "/promociones/descuento-entradas"
            },
            {
              text: "30% dto entradas 1 día 2 parques",
              type: "internal",
              href: "/promociones/entradas"
            }
          ]
        }
      ]
    },
    {
      text: "Parques",
      type: "root",
      href: "/",
      icon: "parqueMenu",
      banners: [
        {
          text: "Entradas + Hotel",
          img: "/fondofooter.jpg",
          type: "external",
          href: "http://www.portaventuraworld.com",
          icon: "promotionMenu"
        },
        {
          text: "Pack Aventura",
          img: "/fondofooter.jpg",
          type: "external",
          href: "http://www.portaventuraworld.com",
          icon: "person"
        }
      ],
      children: [
        {
          text: "Port Aventura Park",
          type: "level",
          href: "/",
          children: [
            {
              text: "Atracciones",
              type: "internal",
              href: "/atracciones"
            },
            {
              text: "Restaurantes",
              type: "internal",
              href: "/restaurantes"
            },
            {
              text: "Espectáculos",
              type: "internal",
              href: "/espectaculos"
            },
            {
              text: "Tiendas",
              type: "internal",
              href: "/tiendas"
            },
            {
              text: "Nuestros Mundos",
              type: "internal",
              href: "/zonas"
            }
          ]
        },
        {
          text: "Caribe Aquatic Park",
          type: "level",
          href: "/",
          children: [
            {
              text: "Atracciones",
              type: "internal",
              href: "/aquatic-park/atracciones"
            },
            {
              text: "Restaurantes",
              type: "internal",
              href: "/aquatic-park/restaurantes"
            },
            {
              text: "Tiendas",
              type: "internal",
              href: "/aquatic-park/tiendas"
            }
          ]
        },
        {
          text: "Ferrari Land",
          type: "level",
          href: "/",
          children: [
            {
              text: "Atracciones",
              type: "internal",
              href: "/ferrari-land/atracciones"
            },
            {
              text: "Restaurantes",
              type: "internal",
              href: "/ferrari-land/restaurantes"
            },
            {
              text: "Espectáculos",
              type: "internal",
              href: "/ferrari-land/espectaculos"
            },
            {
              text: "Tiendas",
              type: "internal",
              href: "/ferrari-land/tiendas"
            }
          ]
        }
      ]
    },
    {
      "text": "Hoteles",
      "type": "root",
      "href": "/",
      "icon": "hotelMenu",
      "banners": [
        {
          "text": "Entradas + Hotel",
          "img": "/fondofooter.jpg",
          "type": "external",
          "href": "http://www.portaventuraworld.com",
          "icon": "promotionMenu"
        },
        {
          "text": "Pack Aventura",
          "img": "/fondofooter.jpg",
          "type": "external",
          "href": "http://www.portaventuraworld.com",
          "icon": "person"
        }
      ],
      "children": [
        {
          "text": "Hotel Mansión de Lucy",
          "type": "internal",
          "href": "/hoteles/mansion-de-lucy"
        },
        {
          "text": "Hotel Colorado Creek",
          "type": "internal",
          "href": "/hoteles/colorado-creek"
        },
        {
          "text": "Hotel Gold River",
          "type": "internal",
          "href": "/hoteles/gold-river"
        },
        {
          "text": "Hotel Portaventura",
          "type": "internal",
          "href": "/hoteles/port-aventura"
        },
        {
          "text": "Hotel Caribe",
          "type": "internal",
          "href": "/hoteles/caribe"
        },
        {
          "text": "Hotel El Paso",
          "type": "internal",
          "href": "/hoteles/el-paso"
        },
        {
          "text": "Hotel Roulette",
          "type": "internal",
          "href": "/hoteles/hotel-roulette"
        },
        {
          "text": "Parking Caravaning",
          "type": "internal",
          "href": "/hoteles/estacionamiento-autocaravanas"
        },
        {
          "text": "Sports & Wellness",
          "type": "internal",
          "href": "/sport-wellness"
        }
      ]
    },
    {
      "text": "Planea tu visita",
      "type": "root",
      "href": "/",
      "icon": "mapaMenu",
      "banners": [
        {
          "text": "Entradas + Hotel",
          "img": "/fondofooter.jpg",
          "type": "external",
          "href": "http://www.portaventuraworld.com",
          "icon": "promotionMenu"
        },
        {
          "text": "Pack Aventura",
          "img": "/fondofooter.jpg",
          "type": "external",
          "href": "http://www.portaventuraworld.com",
          "icon": "person"
        }
      ],
      "children": [
        {
          "text": "Horarios",
          "type": "internal",
          "href": "/horarios-calendario"
        },
        {
          "text": "Cómo llegar",
          "type": "internal",
          "href": "/destino/planificar/como-llegar-a-portaventura"
        },
        {
          "text": "Mapa de los parques",
          "type": "external",
          "href": "https://s3-eu-west-1.amazonaws.com/portaventura-world-production-files/wilson_cms/images/images/000/014/760/original/MAP_RES_NONE_GEN_0121_002-min-2.jpg"
        },
        {
          "text": "Qué hacer en el resort",
          "type": "level",
          "href": "/",
          "children": [
            {
              "text": "Eventos de temporada",
              "type": "level",
              "href": "/",
              "children": [
                {
                  "text": "Semana Santa en PortAventura",
                  "type": "internal",
                  "href": "/semana-santa"
                },
                {
                  "text": "Halloween en PortAventura",
                  "type": "internal",
                  "href": "/halloween"
                },
                {
                  "text": "Navidad en PortAventura",
                  "type": "internal",
                  "href": "/navidad"
                }
              ]
            },
            {
              "text": "Atracciones",
              "type": "level",
              "href": "/",
              "children": [
                {
                  "text": "Atracciones en PortAventura Park",
                  "type": "internal",
                  "href": "/atracciones"
                },
                {
                  "text": "Rides en Caribe Aquatic Park",
                  "type": "internal",
                  "href": "/aquatic-park/atracciones"
                },
                {
                  "text": "Rides en Ferrari Land",
                  "type": "internal",
                  "href": "/ferrari-land/atracciones"
                }
              ]
            },
            {
              "text": "Espectáculos",
              "type": "level",
              "href": "/",
              "children": [
                {
                  "text": "Espectáculos en PortAventura Park",
                  "type": "internal",
                  "href": "/espectaculos"
                },
                {
                  "text": "Espectáculos en Ferrari Land",
                  "type": "internal",
                  "href": "/ferrari-land/espectaculos"
                }
              ]
            },
            {
              "text": "Dónde comer",
              "type": "level",
              "href": "/",
              "children": [
                {
                  "text": "Restaurantes en PortAventura Park",
                  "type": "internal",
                  "href": "/restaurantes"
                },
                {
                  "text": "Restaurantes en Caribe Aquatic Park",
                  "type": "internal",
                  "href": "/aquatic-park/restaurantes"
                },
                {
                  "text": "Restaurantes en Ferrari Land",
                  "type": "internal",
                  "href": "/ferrari-land/restaurantes"
                },
                {
                  "text": "Intolerancias y alergias",
                  "type": "internal",
                  "href": "/gastronomia/intolerancias-y-alergias"
                },
                {
                  "text": "NOVEDAD Delion Experience",
                  "type": "internal",
                  "href": "/delion-experience"
                }
              ]
            },
            {
              "text": "Dónde dormir",
              "type": "level",
              "href": "/",
              "children": [
                {
                  "text": "Hotel Mansión de Lucy",
                  "type": "internal",
                  "href": "/hoteles/mansion-de-lucy"
                },
                {
                  "text": "Hotel Colorado Creek",
                  "type": "internal",
                  "href": "/hoteles/colorado-creek"
                },
                {
                  "text": "Hotel Gold River",
                  "type": "internal",
                  "href": "/hoteles/gold-river"
                },
                {
                  "text": "Hotel Portaventura",
                  "type": "internal",
                  "href": "/hoteles/port-aventura"
                },
                {
                  "text": "Hotel Caribe",
                  "type": "internal",
                  "href": "/hoteles/caribe"
                },
                {
                  "text": "Hotel El Paso",
                  "type": "internal",
                  "href": "/hoteles/el-paso"
                }
              ]
            },
            {
              "text": "Dónde comprar",
              "type": "level",
              "href": "/",
              "children": [
                {
                  "text": "Tienda online PortAventura",
                  "type": "external",
                  "href": "https://portaventurastore.com/es/"
                },
                {
                  "text": "Tiendas en PortAventura Park",
                  "type": "internal",
                  "href": "/tiendas"
                },
                {
                  "text": "Shops in Caribe Aquatic Park",
                  "type": "internal",
                  "href": "/aquatic-park/tiendas"
                },
                {
                  "text": "Tiendas en Ferrari Land",
                  "type": "internal",
                  "href": "/ferrari-land/tiendas"
                }
              ]
            },
            {
              "text": "Entorno",
              "type": "level",
              "href": "/",
              "children": [
                {
                  "text": "Costa Dorada",
                  "type": "internal",
                  "href": "/destino/costa-dorada"
                },
                {
                  "text": "Barcelona",
                  "type": "internal",
                  "href": "/destino/barcelona"
                },
                {
                  "text": "Hoteles y Campings asociados",
                  "type": "internal",
                  "href": "/nosotros/hoteles-campings-asociados"
                }
              ]
            }
          ]
        }
      ]
    }
  ]