import promotionIcon from "../stories/assets/colors.svg";

type DaysPerPrice = number;
export type DaysPerNight = Record<number, number>;

export interface AccessDayRow {
  tableId: string;
  days?: DaysPerNight;
  price?: DaysPerPrice;
}

  export type AccessDayOutput = AccessDayRow & {
    name: string;
    icon: string;
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
  
    title: "Título de la tabla",
    accessDays: [
      {
        tableId: "firstItem",
        days: {
          1: 2,
          2: 3,
          3: 4
        },
        name: "First Item",
        icon: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Mickey_Mouse_head_and_ears.svg"
      },
      {
        tableId: "secondItem",
        days :{
          1: 1,
          2: 1,
          3: 1
        },
        name: "Second Item",
        icon: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Mickey_Mouse_head_and_ears.svg"
      },
      {
        tableId: "thirdItem",
        price: 6,
        name: "Third Item",
        icon: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Mickey_Mouse_head_and_ears.svg"
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
    videoImage: "https://search.portaventuraworld.com/assets/hotel/112618/media/property-images/property-main-image/hgr_3_320x320.jpg",
    description: "Aquí te mostramos un ejemplo de una tabla al que le puedes datos que necesites enseñar de esta manera!"
  }