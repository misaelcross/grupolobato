import { NavItem } from './types';

export const NAV_LINKS: NavItem[] = [
  { label: 'grupo lobato', href: '#' },
  { 
    label: 'espaços', 
    href: '#', 
    hasDropdown: true,
    dropdownLinks: [
      { label: 'Contemporâneo', href: '#' },
      { label: 'Fazenda Boa Esperança', href: '#' },
      { label: 'Vila Capão', href: '#' },
      { label: 'Villa Relicário', href: '#' },
    ]
  },
  { 
    label: 'especialistas', 
    href: '#', 
    hasDropdown: true,
    dropdownLinks: [
      { label: 'Gastronomia', href: '#' },
      { label: 'Decoração', href: '#' },
      { label: 'Tecnologia', href: '#' }
    ]
  }
];