import { NavItem } from "@/interfaces/Navitems.interface";


export const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'Inspiration',
      children: [
        {
          label: 'Explore Design Work',
          subLabel: 'Trending Design to inspire you',
          href: '#',
        },
        {
          label: 'New & Noteworthy',
          subLabel: 'Up-and-coming Designers',
          href: '#',
        },
      ],
    },
    {
      label: 'Product',
      children: [
        {
          label: 'Industrial ',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Projects Management',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
      label: 'Pricing',
      href: '#',
    },
    {
      label: 'Help & Support',
      href: '#',
    },
  ];