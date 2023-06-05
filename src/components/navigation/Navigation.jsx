import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  NavigationContainer,
  NavigationList,
  HeaderNav,
  NavigationItem,
  NavigationLink,
  ContactsLink,
  UserMenuWrapper,
} from './Navigation.styled';

import { UserMenu } from 'components/userMenu/userMenu';
import { useSelectors } from 'hooks/UseSelector';
import Loader from 'components/Loader/Loader';

export const Navigation = () => {
  const { isLoggedIn } = useSelectors();

  return (
    <>
      <NavigationContainer>
        <HeaderNav>
          <NavigationList>
            {isLoggedIn && (
              <>
                <NavigationItem>
                  <ContactsLink to="/">Home</ContactsLink>
                  <ContactsLink to="/contacts">Contacts</ContactsLink>
                </NavigationItem>
                <NavigationItem>
                  <UserMenu />
                </NavigationItem>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavigationItem>
                  <ContactsLink to="/">Home</ContactsLink>
                </NavigationItem>
                <NavigationItem>
                  <UserMenuWrapper>
                    <NavigationLink to="/register">SignUp</NavigationLink>
                    <NavigationLink to="/login">LogIn</NavigationLink>
                  </UserMenuWrapper>
                </NavigationItem>
              </>
            )}
          </NavigationList>
        </HeaderNav>
      </NavigationContainer>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
