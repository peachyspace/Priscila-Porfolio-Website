import React, {useState} from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton
} from '@material-ui/core'
import Link from '@material-ui/core/Link'
import menuIcon from '../../public/images/menuIcon.png'

/*   
create a hook that allows us to use a state on the drawer section(component)
*/
const DrawerSection = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href="/">About</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href="/">Projects</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link href="/">Contact</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <img src={menuIcon} alt="menu" />
      </IconButton>
    </>
  )
}
export default DrawerSection
