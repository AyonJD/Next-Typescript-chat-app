import {
   IconLayoutDashboard
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Chats',
  },

  {
    id: uniqueId(),
    title: 'Targeted User',
    icon: IconLayoutDashboard,
    href: '/',
  },
];

export default Menuitems;
