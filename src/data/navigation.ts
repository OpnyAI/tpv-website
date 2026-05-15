export type NavigationItem = {
  label: string;
  href: string;
};

export type FooterNavigationGroup = {
  title: string;
  items: NavigationItem[];
};

export const mainNavigation: NavigationItem[] = [
  { label: "Referenzen", href: "#referenzen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Standorte", href: "#standorte" },
  { label: "Kontakt", href: "#kontakt" },
];

export const footerNavigation: FooterNavigationGroup[] = [
  {
    title: "Leistungen",
    items: [
      { label: "Projektierung & Kalkulation", href: "#leistungen" },
      { label: "Installation & Projektleitung", href: "#leistungen" },
      { label: "Content Creation & Design", href: "#leistungen" },
      { label: "Premium Service & Support", href: "#leistungen" },
    ],
  },
  {
    title: "Rechtliches",
    items: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "AGB", href: "/agb" },
    ],
  },
];
