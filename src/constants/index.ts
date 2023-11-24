import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaAward, FaRegCreditCard } from "react-icons/fa";

// API
export const SPIDERVO_API_URL: string = process.env.NEXT_PUBLIC_API_URL || "";

// Function to format number with space every 3 digits
export const formatNumber = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const cardDetailsServicesMkb = [
  {
    title: "Voiture contrôlée",
    logo: AiOutlineCheckCircle,
  },
  {
    title: "Garantie et prêt à partir",
    logo: FaAward,
  },
  {
    title: "Paiement en plusieurs fois ou à crédit",
    logo: FaRegCreditCard,
  },
];

export const reseauSocial = [
  {
    logo: BsFacebook,
    titre: "Facebook",
    href: "https://www.facebook.com/mkb.automobile",
  },
  {
    logo: BsInstagram,
    titre: "Instagram",
    href: "https://www.instagram.com/mkbautomobile/?igshid=MWs0bTB4YW11a2JkZQ%3D%3D",
  },
];
// Manufacturers
export const manufacturers = [
  "Abarth",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Bugatti",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroën",
  "Dacia",
  "Daewoo",
  "Daihatsu",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hummer",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Koenigsegg",
  "Lamborghini",
  "Lancia",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Lotus",
  "Maserati",
  "Maybach",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "Mini",
  "Mitsubishi",
  "Nissan",
  "Opel",
  "Pagani",
  "Peugeot",
  "Pontiac",
  "Porsche",
  "Ram",
  "Renault",
  "Rolls-Royce",
  "Saab",
  "Saturn",
  "Scion",
  "Seat",
  "Skoda",
  "Smart",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
  "Acura",
  "Geely",
  "BYD",
  "Chery",
  "Great Wall Motors",
  "MG Motor",
  "Proton",
  "Tata Motors",
  "Mahindra",
  "Maruti Suzuki",
  "Isuzu",
  "FAW",
  "Haval",
  "Dongfeng",
  "BAIC",
  "JAC Motors",
  "Brilliance Auto",
  "Zotye",
  "Genesis",
  "Ram",
  "Polestar",
  "Rivian",
  "Lucid Motors",
  "NIO",
  "Byton",
  "Lynk & Co",
  "Rimac",
  "Wuling",
  "Xpeng Motors",
  "Faraday Future",
  "VinFast",
  "Seres",
  "Lucra Cars",
  "Lykan Hypersport",
  "Rimac Automobili",
  "Naran Automotive",
  "Rezvani Motors",
  "Zenvo Automotive",
];
// Years of production
export const yearsOfProduction = [
  { title: "Année", value: "" },
  { title: "1992", value: "1992" },
  { title: "1993", value: "1993" },
  { title: "1994", value: "1994" },
  { title: "1995", value: "1995" },
  { title: "1996", value: "1996" },
  { title: "1997", value: "1997" },
  { title: "1998", value: "1998" },
  { title: "1999", value: "1999" },
  { title: "2000", value: "2000" },
  { title: "2001", value: "2001" },
  { title: "2002", value: "2002" },
  { title: "2003", value: "2003" },
  { title: "2004", value: "2004" },
  { title: "2005", value: "2005" },
  { title: "2006", value: "2006" },
  { title: "2007", value: "2007" },
  { title: "2008", value: "2008" },
  { title: "2009", value: "2009" },
  { title: "2010", value: "2010" },
  { title: "2011", value: "2011" },
  { title: "2012", value: "2012" },
  { title: "2013", value: "2013" },
  { title: "2014", value: "2014" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];
// Type of fuels
export const fuels = [
  {
    title: "Carburant",
    value: "",
  },
  {
    title: "Diesel",
    value: "Diesel",
  },
  {
    title: "Essence",
    value: "Essence",
  },
  {
    title: "Éléctrique",
    value: "Éléctrique",
  },
];

// Header
export const navLinks = [
  { title: "Achat", path: "/voitures-occasions" },
  // { title: "Reprise", path: "/reprise-automobile" },
  { title: "Recherche personnalisé", path: "/recherche-personnalisee" },
  { title: "Financement", path: "/financement" },
  { title: "Comment ça marche ?", path: "/comment-ca-marche" },
];

// Home page
export const sectionHome = [
  {
    img: "/simplicite.svg",
    title: "Simplicité",
    text: "Nous vous aidons à trouver la voiture de vos rêves parmi un large choix de véhicules en France et en Europe. Du financement à l’immatriculation, achetez en toute simplicité.",
  },
  {
    img: "/fiabilite.svg",
    title: "Fiabilité",
    text: "La meilleure façon d’acheter votre voiture à proximité de chez vous et cela partout en France.",
  },
  {
    img: "/securite.svg",
    title: "Sécurité",
    text: "Nos équipes vérifient l’état de votre nouvelle voiture, la révisent et la préparent. Vous bénéficiez de l’expertise MKB Automobile et d’une garantie extensible pour votre véhicule.",
  },
];

export const supportCards = [
  {
    title: "Comment ça marche ?",
    btnTitle: "On vous explique tout",
    path: "/comment-ca-marche",
    backgroundImage: "/MKB-Automobile-service-personnalise-1.webp",
  },
  {
    title: "Financement",
    btnTitle: "Je me renseigne",
    path: "/financement",
    backgroundImage: "/MKB-Automobile-financement.webp",
  },
  {
    title: "Reprise auto",
    text: `Vous souhaitez vendre votre voiture ? Aucun problème - On est là pour vous`,
    btnTitle: "Je demande une estimation",
    path: "/reprise-automobile",
    backgroundImage: "/MKB-automobile-Trouvez-votre-voiture-600-400.webp",
  },
  {
    title: "Contactez-nous",
    text: "Vous avez des question ? Nous sommes à votre écoute pour échanger sur votre projet automobile",
    btnTitle: "Contactez un conseiller",
    path: "/contact",
    backgroundImage: "/MKB-automobile-Trouvez-votre-voiture-600-400.webp",
  },
];

export const manifactureLogo = [
  {
    alt: "Peugeot",
    img: "/Peugeot.png",
  },
  {
    alt: "Renault",
    img: "/Renault.webp",
  },
  {
    alt: "Citroen",
    img: "/Citroen.webp",
  },
  {
    alt: "Audi",
    img: "/Audi.webp",
  },
  {
    alt: "BMW",
    img: "/BMW.webp",
  },
  {
    alt: "Fiat",
    img: "/Fiat.webp",
  },
  {
    alt: "Ford",
    img: "/Ford.webp",
  },
  {
    alt: "Mercedes-Benz",
    img: "/Mercedes-Benz.webp",
  },
  {
    alt: "Opel",
    img: "/Opel.webp",
  },
  {
    alt: "VW",
    img: "/VW.webp",
  },
];

export const carsModel = [
  {
    title: "Citadine",
    path: "/citadine.jpg",
  },
  {
    title: "SUV / 4x4",
    path: "/suvm.jpg",
  },
  {
    title: "Berline",
    path: "/jon-koop-khYVyHiNZo0-unsplash.jpg",
  },
  {
    title: "Utilitaire",
    path: "/leo-OnHZTmU7WKQ-unsplash.jpg",
  },
];

// Footer
export const footerLinks = [
  {
    title: "A Propos de",
    links: [
      { title: "MKB Automobile", url: "/a-propos" },
      { title: "Contact", url: "/contact" },
      // { title: "FAQ", url: "/faq" },
      { title: "Comment ça marche ?", url: "/comment-ca-marche" },
    ],
  },
  {
    title: "Nos Services",
    links: [
      { title: "Achat", url: "/voitures-occasions" },
      // { title: "Reprise", url: "/reprise-automobile" },
      { title: "Financement", url: "/financement" },
      { title: "Recherche personnalisée", url: "/recherche-personnalisee" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        title: "Linkedin",
        url: "https://www.linkedin.com/company/mkb-automobile/",
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com/mkbautomobile/?igshid=MzRlODBiNWFlZA%3D%3D",
      },
    ],
  },
  {
    title: "Autres",
    links: [
      {
        title: "Politique des Cokkies",
        url: "/",
      },
    ],
  },
];
