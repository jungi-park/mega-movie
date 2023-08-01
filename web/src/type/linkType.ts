export type LeftLink = {
  href: string;
  title: string;
};

export type RightLink = {
  href: string;
  title: string;
  showWhenLoggedIn: boolean;
  fuc?: () => void;
};

export type Link = {
  showWhenLoggedIn: boolean;
  href?: string;
  title?: string;
  fuc?: () => void;
};
