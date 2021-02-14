import * as React from 'react';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Link } from 'wouter';

import { itemsButtom, itemsTop, item } from './items';

const ListItems: React.FC = () => {
  return (
    <>
      <List>
        {itemsTop.map((item: item, index: number) => (
          <Link key={index} href={item.path}>
            <ListItem button component="a">
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {itemsButtom.map((item: item, index: number) => (
          <ListItem key={index} button component="a" href={item.path} target="_blank">
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListItems;
