export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownLinks?: { label: string; href: string }[];
}

export enum Language {
  EN = 'EN',
  PT = 'PT',
  ES = 'ES'
}