import React, { useEffect } from 'react';
import Menuitems from './MenuItems';
import { useRouter } from 'next/router';
import { Box, List } from '@mui/material';
import NavItem from './NavItem';
import NavGroup from './NavGroup/NavGroup';
import { IUserResponse } from '../../../../Interface/user.interface';
import { excludeCurrentUser, loggedInUser } from '../../../../Api/user.api';

const SidebarItems = ({toggleMobileSidebar}: any) => {
  const { pathname } = useRouter();
  const pathDirect = pathname;
  const [usersData, setUsersData] = React.useState<IUserResponse | null>(null);
  const [loader, setLoader] = React.useState<boolean>(true);

  const _retriveData = async () => {
    setLoader(false)
    const storedToken = localStorage.getItem('chat_app_token');
    if (storedToken) {
      const loggedInUserResult: IUserResponse = await loggedInUser(storedToken);

      if (loggedInUserResult.success) {
        const excludeCurrentUserResult = await excludeCurrentUser(loggedInUserResult.result._id as string);
        setUsersData(excludeCurrentUserResult);
      }
    }
    setLoader(true)
  };

  useEffect(() => {
    _retriveData();
  }, []);

  if (!loader) {
    return <div>Loading...</div>
  }

  const NavItemArray = usersData?.result.map((item: any) => { 
    return {
      id: item._id,
      title: item.username,
      icon: 'item.avatar',
      href: `/chat/${item._id}`,
    }
  });

  console.log(NavItemArray)

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {NavItemArray?.map((item: any) => {
          // {/********SubHeader**********/}
          if (item.subheader) {
            return <NavGroup item={item} key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else {
            return (
              <NavItem item={item} key={item.id} pathDirect={pathDirect}  onClick={toggleMobileSidebar}/>
            );
          }
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
