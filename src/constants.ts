type benefitsType = {
  icon: string;
  title: string;
  description: string;
};
type infoType = {
  icon: string;
  title: string;
  description: string;
};

type propertiesType = {
  image: string;
  price: string | number;
  name: string;
  address: string;
  beds: string;
  bathrooms: string;
  area: string;
  popular: boolean;
};

export const info: infoType[] = [
  {
    icon: "",
    title: "",
    description:""
  }
]

export const benefits: benefitsType[] = [
  {
    icon: "/src/assets/benefitsIcon1.png",
    title: "Property Insurance",
    description:
      "We offer our customer property protection of liability coverage and insurance for their better life.",
  },
  {
    icon: "/src/assets/benefitsIcon2.png",
    title: "Best Price",
    description:
      "Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.",
  },
  {
    icon: "/src/assets/benefitsIcon3.png",
    title: "Lowest Commission",
    description:
      "You no longer have to negotiate commissions and haggle with other agents it only cost 2%!",
  },
  {
    icon: "/src/assets/benefitsIcon4.png",
    title: "Overall Control",
    description:
      "Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.",
  },
];

export const properties: propertiesType[] = [
  {
    image: "/src/assets/property1.png",
    price: "2095",
    name: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: "3",
    bathrooms: "2",
    area: "5x7",
    popular: true,
  },

  {
    image: "/src/assets/property2.png",
    price: "2095",
    name: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: "3",
    bathrooms: "2",
    area: "5x7",
    popular: true,
  },
  {
    image: "/src/assets/property3.png",
    price: "2095",
    name: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: "3",
    bathrooms: "2",
    area: "5x7",
    popular: false,
  },
  {
    image: "/src/assets/property4.png",
    price: "2095",
    name: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: "3",
    bathrooms: "2",
    area: "5x7",
    popular: false,
  },
  {
    image: "/src/assets/property5.png",
    price: "2095",
    name: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: "3",
    bathrooms: "2",
    area: "5x7",
    popular: false,
  },
  {
    image: "/src/assets/property6.png",
    price: "2095",
    name: "Palm Harbor",
    address: "2699 Green Valley, Highland Lake, FL",
    beds: "3",
    bathrooms: "2",
    area: "5x7",
    popular: false,
  },
];
