import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.png";
import user2 from "../assets/profile-pictures/user2.png";
import user3 from "../assets/profile-pictures/user3.png";
import user4 from "../assets/profile-pictures/user4.png";
import user5 from "../assets/profile-pictures/user5.png";
import user6 from "../assets/profile-pictures/user6.png";

export const navItems = [

];

export const testimonials = [
  {
    user: "GigaBuła",
    company: "Restauracja",
    image: user1,
    text: "Polecam.",
  },
  {
    user: "Haven",
    company: "Sklep z biżuterią",
    image: user2,
    text: "Super współpraca",
  },
  {
    user: "GTS",
    company: "Grupa Traderska",
    image: user3,
    text: "5 Gwiazdek.",
  },
  {
    user: "Syndicate",
    company: "Kantor Kryptowalut",
    image: user4,
    text: "Polecam",
  },
  {
    user: "Bulwar Cafe",
    company: "Kawiarnia",
    image: user5,
    text: "Najlepsza firma!",
  },
  {
    user: "Dreams",
    company: "Aplikacja Trenera personalnego",
    image: user6,
    text: "Szybka i skuteczna współpraca",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Interfejs „przeciągnij i upuść”",
    description:
      "Łatwe projektowanie i organizacja środowisk VR dzięki przyjaznemu dla użytkownika interfejsowi typu „przeciągnij i upuść”.",
  },
  {
    icon: <Fingerprint />,
    text: "Kompatybilność z wieloma platformami",
    description:
      "Twórz aplikacje VR, które będą działać bezproblemowo na wielu platformach, w tym na urządzeniach mobilnych, komputerach stacjonarnych i zestawach słuchawkowych VR.",
  },
  {
    icon: <ShieldHalf />,
    text: "Wbudowane szablony",
    description:
      "Rozpocznij realizację swoich projektów VR, korzystając z różnorodnych wbudowanych szablonów przeznaczonych do różnych typów aplikacji i środowisk.",
  },
  {
    icon: <BatteryCharging />,
    text: "Podgląd w czasie rzeczywistym",
    description:
      "Podglądaj swoją aplikację VR w czasie rzeczywistym w trakcie wprowadzania zmian, co pozwala na szybkie wprowadzanie iteracji i dostosowań..",
  },
  {
    icon: <PlugZap />,
    text: "Narzędzia do współpracy",
    description:
      "Współpracuj ze swoim zespołem w czasie rzeczywistym nad projektami VR, umożliwiając bezproblemową współpracę i dzielenie się pomysłami.",
  },
  {
    icon: <GlobeLock />,
    text: "Panel analityczny",
    description:
      "Uzyskaj cenne informacje na temat interakcji i zachowań użytkowników w aplikacjach VR dzięki zintegrowanemu panelowi analitycznemu.",
  },
];

export const checklistItems = [
  {
    title: "Łatwe łączenie kodu",

  },
  {
    title: "Przeglądaj kod bez obaw",

  },
  {
    title: "Pomoc AI w celu skrócenia czasu",

  },
  {
    title: "Udostępniaj pracę w kilka minut",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Strony Internetowe",
      "Sklepy Internetowe",
      "Strony typu LinkMe",
      "Portfolia",

    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Aplikacje Webowe",
      "Aplikacje Mobilne",
      "Aplikacje Interaktywne",
      "Inne Aplikacje",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Marketing narzędziami CRM",
      "Pozycjonowanie SEO",
      "Marketing Social Media",
      "Reklamy/ADS",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
