import * as React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import InfoIcon from '@material-ui/icons/Info';
import SchoolIcon from '@material-ui/icons/School';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import FeedbackIcon from '@material-ui/icons/Feedback';
import CodeIcon from '@material-ui/icons/Code';

interface item {
  name: string;
  icon: JSX.Element;
  path: string;
}

const itemsTop: Array<item> = [
  {
    name: 'Inicio',
    icon: <HomeIcon />,
    path: '/',
  },
  {
    name: 'Extintores',
    icon: <AppsIcon />,
    path: '/extinguisher',
  },
  {
    name: 'Informacion extintor',
    icon: <InfoIcon />,
    path: '/info-extinguisher',
  },
  {
    name: 'Informacion del colegio',
    icon: <SchoolIcon />,
    path: '/info-school',
  },
  {
    name: 'Feedback',
    icon: <FeedbackIcon />,
    path: '/feedback',
  },
];

const itemsButtom: Array<item> = [
  //TODO arreglar el mailto.
  {
    name: 'Contactar admin',
    icon: <SupervisorAccountIcon />,
    path: 'mailto:pablobagliere2@gmail.com',
  },
  {
    name: 'Codigo fuente',
    icon: <CodeIcon />,
    path: 'https://github.com/PabloBagliere/extinguisher',
  },
];

export { itemsTop, itemsButtom };
export type { item };
