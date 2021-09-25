import React from 'react';
//Material UI core
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//Material UI icons
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreOptionsIcon from '@material-ui/icons/MoreVert';

const Header = ({
	userDetails,
	notificationCount,
	setIsNotificationsDialogOpen,
	setIsSearchMenuOpen,
	setIsUserMenuOpen,
	setIsOptionsMenuOpen,
}) => {
	const isLoggedIn = Boolean(userDetails.firstName);

	const classes = useStyles();

	return (
		<React.Fragment>
			<AppBar color='inherit'>
				<Toolbar variant='dense'>
					Logo here
					<div className={classes.headerIconsContainer}>
						<Tooltip title='Search'>
							<IconButton
								onClick={() => setIsSearchMenuOpen(true)}
								aria-label='Search'>
								<SearchIcon />
							</IconButton>
						</Tooltip>

						<Tooltip title='Notifications'>
							<IconButton
								onClick={() => setIsNotificationsDialogOpen(true)}
								aria-label='Show Notifications'>
								<Badge color='secondary' badgeContent={notificationCount}>
									<NotificationsIcon />
								</Badge>
							</IconButton>
						</Tooltip>

						<Tooltip
							title={
								isLoggedIn
									? `Profile of ${userDetails.firstName} ${userDetails.lastName}`
									: 'Sign up or Log in'
							}>
							<IconButton
								onClick={() => setIsUserMenuOpen(true)}
								size='small'
								aria-label='User Profile'
								className={classes.headerProfileIconButton}>
								<Avatar
									alt='User Profile Picture'
									src={isLoggedIn ? userDetails.avatar : undefined}
									className={classes.headerAvatar}
								/>
							</IconButton>
						</Tooltip>

						<Tooltip title='More options'>
							<IconButton
								onClick={() => setIsOptionsMenuOpen(true)}
								size='small'
								edge='end'
								aria-label='Show More Options'>
								<MoreOptionsIcon />
							</IconButton>
						</Tooltip>
					</div>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
};

const useStyles = makeStyles((theme) => ({
	headerLogo: {
		marginRight: theme.spacing(1.5),
		'@media (max-width: 400px)': {
			display: 'none',
		},
	},
	headerTitle: {
		'@media (max-width: 320px)': {
			display: 'none',
		},
	},
	headerIconsContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 'auto',
	},
	headerProfileIconButton: {
		margin: theme.spacing(0, 1),
	},
	headerAvatar: {
		height: theme.spacing(4),
		width: theme.spacing(4),
	},
}));

export default Header;
