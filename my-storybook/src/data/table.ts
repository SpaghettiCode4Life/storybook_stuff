

type DaysPerPrice = number;
export type DaysPerNight = Record<number, number>;

export interface AccessDayRow {
  parkId: string;
  days?: DaysPerNight;
  price?: DaysPerPrice;
}

  export type AccessDayOutput = AccessDayRow & {
    parkName: string;
    parkIcon: string;
  };

  export interface Noun {
    singular: string;
    plural: string;
  }
  
  export interface AccessDaysOutputData {
    title: string;
    videoImage: string;
    description: string;
    nightText: Noun;
    dayText: Noun;
    pricePerDay: string;
    accessDays: AccessDayOutput[];
  }
export const dataTable: AccessDaysOutputData =    {
  
    title: "¿Cuántos días puedo acceder a los parques?",
    accessDays: [
      {
        parkId: "portaventura",
        days: {
          1: 2,
          2: 3,
          3: 4
        },
        parkName: "Portaventura Park",
        parkIcon: "portaventuraLogo"
      },
      {
        parkId: "ferrari-land",
        days :{
          1: 1,
          2: 1,
          3: 1
        },
        parkName: "Ferrari Land",
        parkIcon: "ferrarilandLogo"
      },
      {
        parkId: "caribe-aquatic-park",
        price: 6,
        parkName: "Caribe Aquatic Park",
        parkIcon: "caribeLogo"
      }
    ],
    nightText: {
      singular: "noche",
      plural: "noches"
    },
    dayText: {
    singular: "día",
      plural: "días"
    },
    pricePerDay: "€/día",
    videoImage: "/fondofooter.jpg",
    description: "Aquí te mostramos un ejemplo de cuántos días puedes acceder a los parques en base a tus noches de estancia ¡Si estás más noches, podrás acceder durante más días a nuestros parques!"
  }