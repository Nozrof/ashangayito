import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import HeaderMenuSearch from './Header/HeaderMenuSearch';
import HeaderMenuUser from './Header/HeaderMenuUser';
import HeaderMenuOptions from './Header/HeaderMenuOptions';
import DialogThemeChanger from './Header/DialogThemeChanger';
import DialogNotifications from './Header/DialogNotifications';
import Middleproperty from './Middleproperty/Middleproperty';
import useThemeMaker from '../Hooks/useThemeMaker';

export default function Components() {
	const [theme, themeChoice, setThemeChoice] = useThemeMaker();

	const [isNotificationsDialogOpen, setIsNotificationsDialogOpen] = useState(false);
	const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const [isOptionsMenuOpen, setIsOptionsMenuOpen] = useState(false);
	const [isThemeChangerOpen, setIsThemeChangerOpen] = useState(false);
	const headerMenuAnchorPosition = { left: window.innerWidth, top: 40 };

	const [notifications, setNotifications] = useState([]);
	let notificationCount = 0;
	notifications.forEach((notification) => {
		if (!notification.isSeen) notificationCount++;
	});

	const notificationMarkAsSeen = (index) => {
		let seenNotifications = [...notifications];
		seenNotifications[index].isSeen = true;
		setNotifications(seenNotifications);
	};

	const notificationMarkAllAsSeen = () => {
		let seenNotifications = [...notifications];
		seenNotifications.forEach((notification) => (notification.isSeen = true));
		setNotifications(seenNotifications);
	};

	const [userDetails, setUserDetails] = useState({
		firstName: '',
		lastName: '',
		uName: '',
		email: '',
		avatar: '',
	});

	const logOut = () => setUserDetails({});

	const changeLanguage = () => {
		alert('Language changing will be added');
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Header
				userDetails={userDetails}
				notificationCount={notificationCount}
				setIsNotificationsDialogOpen={setIsNotificationsDialogOpen}
				setIsSearchMenuOpen={setIsSearchMenuOpen}
				setIsUserMenuOpen={setIsUserMenuOpen}
				setIsOptionsMenuOpen={setIsOptionsMenuOpen}
			/>

			<Middleproperty />

			<Footer />

			<DialogNotifications
				notifications={notifications}
				notificationMarkAsSeen={notificationMarkAsSeen}
				notificationMarkAllAsSeen={notificationMarkAllAsSeen}
				isNotificationsDialogOpen={isNotificationsDialogOpen}
				setIsNotificationsDialogOpen={setIsNotificationsDialogOpen}
			/>

			<DialogThemeChanger
				background={themeChoice.background}
				primary={themeChoice.primary}
				secondary={themeChoice.secondary}
				isThemeChangerOpen={isThemeChangerOpen}
				setIsThemeChangerOpen={setIsThemeChangerOpen}
				setThemeChoice={setThemeChoice}
			/>

			<HeaderMenuSearch
				isSearchMenuOpen={isSearchMenuOpen}
				setIsSearchMenuOpen={setIsSearchMenuOpen}
			/>

			<HeaderMenuUser
				anchorPosition={headerMenuAnchorPosition}
				userDetails={userDetails}
				isUserMenuOpen={isUserMenuOpen}
				setIsUserMenuOpen={setIsUserMenuOpen}
				logOut={logOut}
			/>

			<HeaderMenuOptions
				anchorPosition={headerMenuAnchorPosition}
				isOptionsMenuOpen={isOptionsMenuOpen}
				setIsOptionsMenuOpen={setIsOptionsMenuOpen}
				setIsThemeChangerOpen={setIsThemeChangerOpen}
				changeLanguage={changeLanguage}
			/>
		</ThemeProvider>
	);
}
