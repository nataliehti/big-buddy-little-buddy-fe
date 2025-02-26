import { useState, useEffect } from 'react';
import { useMantineTheme, Transition, Box, Burger } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import {
  IconChartPie3,
  IconClipboardText,
  IconFileText,
  IconSchool,
  IconFriends,
  IconSettings,
  IconLogout,
} from '@tabler/icons-react';
import classes from './MenteeNavBar.module.css';
import Link from 'next/link';
import router, { useRouter } from 'next/router';


//items in the menu 
const data = [
  { link: '/mentee-dashboard', label: 'Dashboard', icon: IconChartPie3 },
  { link: '/mentee-mentor-info', label: 'My Mentor', icon: IconSchool },
  { link: '/mentee-tasks', label: 'My Tasks', icon: IconClipboardText },
  { link: '/mentee-resources', label: 'Resources', icon: IconFileText },
  { link: '/mentee-network', label: 'Mentee Network', icon: IconFriends },
  { link: '/mentee-settings', label: 'Settings', icon: IconSettings },
];


export function MenteeNavBar() {
  const theme = useMantineTheme();
  const isDesktop = useMediaQuery(`(min-width: ${768}px)`);
  const [opened, setOpened] = useState(false);

  const router = useRouter();
  // Use a state that initially is an empty string
  const [active, setActive] = useState('');

  // Update the active state based on the current path
  useEffect(() => {
    const current = data.find((item) => item.link === router.pathname);
    if (current) {
      setActive(current.label);
    } else {
      setActive('');
    }
  }, [router.pathname]);

  // to close mobile menu when window is desktop
  useEffect(() => {
    if (isDesktop) {
      setOpened(false);
    }
  }, [isDesktop]);

  //for setting active states when a specific item is clicked 
  const links = data.map((item) => (
    <Link href={item.link} key={item.label} legacyBehavior>
      <a
        className={classes.link}
        data-active={item.label === active || undefined}
        onClick={(event) => {
          event.preventDefault();
          setActive(item.label);
          router.push(item.link);
        }}
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </a>
    </Link>
  ));

  return (
    <>
      {/* for the desktop sidebar */}
      <Transition transition="slide-right" duration={300} mounted={isDesktop ?? false}>
        {(styles) => (
          <nav style={styles} className={classes.sidebar}>
            <div className={classes.sidebarMain}>
              <div className={classes.desktopHeader}>
                <img
                  src="/saigonchildren full logo - blue 2.svg"
                  alt="SaigonChildren Blue Logo"
                  className={classes.logo}
                />
              </div>
              {links}
            </div>
            <div className={classes.footer}>
              <a
                href="#"
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <IconLogout className={classes.linkIcon} stroke={1.5} />
                <span>Logout</span>
              </a>
            </div>
          </nav>
        )}
      </Transition>

      {/* the mobile header (hamburger and logo) */}
      <Transition transition="slide-down" duration={300} mounted={!isDesktop}>
        {(styles) => (
          <Box
            style={{ ...styles, position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1010 }}
            className={classes.mobileHeader}
          >
            <div className={classes.headerContent}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                className={classes.mobileBurger}
              />
              <img
                src="/saigonchildren full logo - blue 2.svg"
                alt="SaigonChildren Blue Logo"
                className={classes.logo}
              />
            </div>
          </Box>
        )}
      </Transition>

      {/*overlay when hamburger is clicked*/}
      <Transition transition="slide-down" duration={300} mounted={!isDesktop && opened}>
        {(styles) => (
          <nav style={styles} className={classes.sidebarMobile}>
            <div className={classes.sidebarMain}>
              {links}
            </div>
            <div className={classes.footer}>
              <a
                href="#"
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <IconLogout className={classes.linkIcon} stroke={1.5} />
                <span>Logout</span>
              </a>
            </div>
          </nav>
        )}
      </Transition>
    </>
  );
}
