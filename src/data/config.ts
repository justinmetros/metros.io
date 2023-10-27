export const SITE_URL = "https://metros.io/";
export const EMAIL = "justin@metros.io";
export const NAME = "Justin Metros";
export const DEFAULT_TITLE_PAGE = "Justin Metros | Portfolio";
export const DEFAULT_DESCRIPTION_PAGE =
  "Experienced Technical Director with 20+ years in enterprise application design and development, specializing in full-stack e-commerce, A11Y, UI/UX and composable architecture.";
export const DEFAULT_URL_SITE = SITE_URL;
export const TWITTER_HANDLE = "@justinmetros";
const PROFILE_IMAGE = "/img/profile.webp";

type Social = {
  label: string;
  link: string;
};

type Profile = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  image?: string;
};

type Navigation = NavigationItem[];

interface NavigationItem {
  title: string;
  link: string;
}

export const navigation: Navigation = [
  { title: "Home", link: "/" },
  { title: "Work", link: "/projects" },
  { title: "Press", link: "/press" },
];

export const profile: Profile = {
  mail: EMAIL,
  title: NAME,
  image: PROFILE_IMAGE,
  description: DEFAULT_DESCRIPTION_PAGE,
  socials: [
    {
      label: "LinkedIn",
      link: "https://linkedin.com/in/justinmetros",
    },
    {
      label: "Github",
      link: "https://github.com/justinmetros",
    },
    {
      label: "X",
      link: "https://twitter.com/justinmetros",
    },
    {
      label: "Forbes",
      link: "https://councils.forbes.com/profile/Justin-Metros-Chief-Technology-Officer-Toklas/93a6a110-7d70-4f95-b45e-916e9d2cb4d0",
    },
  ],
};
