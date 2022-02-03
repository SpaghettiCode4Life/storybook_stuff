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
      text: "Discover",
      type: "root",
      href: "/entradas",
      icon: "ticketMenu",
      banners: [
        {
          text: "Play Tetris",
          img: "https://i2.wp.com/www.cgquarterly.com/wp-content/uploads/2015/07/tetris1.png",
          type: "external",
          href: "/entradas+halloween",
          icon: "promotionMenu"
        },
        {
          text: "Play Pacman",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpl0xj33VRrMaqAoFgwy-_6Q3pKw7mK3sjA&usqp=CAU",
          type: "external",
          href: "http://www.portaventuraworld.com",
          icon: "promotionMenu"
        }
      ],
      children: [
        {
          text: "Programming",
          type: "level",
          href: "/entradas",
          children: [
            {
              text: "Javascript",
              type: "internal",
              href: "/entradas"
            },
            {
              text: "Arduino",
              type: "internal",
              href: "/entradas/caribe-aquatic-park",
           },
            {
              text: "Others",
              type: "internal",
              href: "/entradas/ferrari-land"
            }
          ]
        },
        {
          text: "Photography",
          type: "level",
          href: "/",
          children: [
            {
              text: "Shoot",
              type: "internal",
              href: "/pase-anual/pase-platinum"
            },
            {
              text: "Develop",
              type: "internal",
              href: "/pase-anual/pase-premium"
            },
            {
              text: "Techniques",
              type: "internal",
              href: "/pase-anual/pase-gold"
            }
          ]
        },
        {
          text: "Music",
          type: "level",
          href: "/",
          children: [
            {
              text: "Theory",
              type: "internal",
              href: "/entradas/familia-numerosa"
            },
            {
              text: "Practice",
              type: "internal",
              href: "/entradas/personas-discapacidad-pmr"
            },
            {
              text: "Stuff",
              type: "internal",
              href: "/grupos/grupos-escolares"
            },
            {
              text: "Other",
              type: "internal",
              href: "/grupos/grupos-vacacionales"
            }
          ]
        },
        {
        
          text: "Tutorials",
          type: "level",
          href: "/",
          children: [
            {
              text: "Tutorial 1",
              type: "internal",
              href: "/promociones/vacaciones"
            },
            {
              text: "Tutorial 2",
              type: "internal",
              href: "/promociones/entradas-transporte"
            },
            {
              text: "Tutorial 3",
              type: "internal",
              href: "/promociones/tienda-online"
            },
            {
              text: "Tutorial 4",
              type: "internal",
              href: "/promociones"
            },
            {
              text: "Tutorial 5",
              type: "internal",
              href: "/promociones/entrada-hotel"
            },
            {
              text: "Tutorial 6",
              type: "internal",
              href: "/promociones/club-oferta-pase-anual"
            },
          ]
        }
      ]
    },
    {
      text: "Play",
      type: "root",
      href: "/",
      icon: "parqueMenu",
      banners: [
        {
          text: "Baner 1",
          img: "/fondofooter.jpg",
          type: "external",
          href: "http://www.portaventuraworld.com",
          icon: "promotionMenu"
        },
        {
          text: "Baner 2",
          img: "/fondofooter.jpg",
          type: "external",
          href: "http://www.portaventuraworld.com",
          icon: "person"
        }
      ],
      children: [
        {
          text: "Mini Games",
          type: "level",
          href: "/",
          children: [
            {
              text: "Tetris",
              type: "internal",
              href: "/atracciones"
            },
            {
              text: "PacMan",
              type: "internal",
              href: "/restaurantes"
            },
            {
              text: "Game Of Life",
              type: "internal",
              href: "/espectaculos"
            },
          ]
        },
        {
          text: "Play & Learn",
          type: "level",
          href: "/",
          children: [
            {
              text: "Make a robot",
              type: "internal",
              href: "/aquatic-park/atracciones"
            },
            {
              text: "Make a time machine",
              type: "internal",
              href: "/aquatic-park/restaurantes"
            },
            {
              text: "Make colors LEDS",
              type: "internal",
              href: "/aquatic-park/tiendas"
            }
          ]
        },
        {
          text: "Design Expert Zone",
          type: "level",
          href: "/",
          children: [
            {
              text: "Processing tutorials",
              type: "internal",
              href: "/ferrari-land/atracciones"
            },
            {
              text: "P5JS tutorials",
              type: "internal",
              href: "/ferrari-land/restaurantes"
            },
            {
              text: "CSS challenges",
              type: "internal",
              href: "/ferrari-land/espectaculos"
            },
          ]
        }
      ]
    },
    {
      "text": "Travel",
      "type": "root",
      "href": "/",
      "icon": "hotelMenu",
      "banners": [
        {
          "text": "Banner 1",
          "img": "/fondofooter.jpg",
          "type": "external",
          "href": "http://www.portaventuraworld.com",
          "icon": "promotionMenu"
        },
        {
          "text": "Banner 2",
          "img": "/fondofooter.jpg",
          "type": "external",
          "href": "http://www.portaventuraworld.com",
          "icon": "person"
        }
      ],
      "children": [
        {
          "text": "Barcelona",
          "type": "internal",
          "href": "/hoteles/mansion-de-lucy"
        },
        {
          "text": "Toulouse",
          "type": "internal",
          "href": "/hoteles/colorado-creek"
        },
        {
          "text": "Paris",
          "type": "internal",
          "href": "/hoteles/gold-river"
        },
        {
          "text": "Reunion Island",
          "type": "internal",
          "href": "/hoteles/port-aventura"
        },
        {
          "text": "Ireland",
          "type": "internal",
          "href": "/hoteles/caribe"
        },
        {
          "text": "London",
          "type": "internal",
          "href": "/hoteles/el-paso"
        }
      ]
    },
    {
      "text": "About",
      "type": "root",
      "href": "/",
      "icon": "mapaMenu",
      "banners": [
        {
          "text": "Banner 1",
          "img": "/fondofooter.jpg",
          "type": "external",
          "href": "http://www.portaventuraworld.com",
          "icon": "promotionMenu"
        },
        {
          "text": "Banner 2",
          "img": "/fondofooter.jpg",
          "type": "external",
          "href": "http://www.portaventuraworld.com",
          "icon": "person"
        }
      ],
      "children": [
        {
          "text": "My Page",
          "type": "internal",
          "href": "/horarios-calendario"
        },
        {
          "text": "About me",
          "type": "internal",
          "href": "/destino/planificar/como-llegar-a-portaventura"
        },
      ]
    }
  ]