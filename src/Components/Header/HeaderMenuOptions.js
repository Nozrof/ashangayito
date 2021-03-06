import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import LanguageIcon from '@material-ui/icons/Language';
import PaletteIcon from '@material-ui/icons/Palette';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PolicyIcon from '@material-ui/icons/Policy';
import BugReportIcon from '@material-ui/icons/BugReport';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';

const OptionsMenu = ({
	anchorPosition,
	isOptionsMenuOpen,
	setIsOptionsMenuOpen,
	setIsThemeChangerOpen,
	changeLanguage,
}) => {
	const handleMenuClose = () => {
		setIsOptionsMenuOpen(false);
	};
	const handleThemeChangerOpen = () => {
		setIsThemeChangerOpen(true);
		setIsOptionsMenuOpen(false);
	};
	const handleLanguageChange = () => {
		changeLanguage();
		setIsOptionsMenuOpen(false);
	};
	return (
		<Menu
			open={isOptionsMenuOpen}
			onClose={handleMenuClose}
			anchorReference='anchorPosition'
			anchorPosition={anchorPosition}
			id='header-more-options-menu'>
			<MenuItem disabled dense>
				<ListItemText secondary='Options' />
			</MenuItem>

			<MenuItem dense button onClick={handleLanguageChange}>
				<ListItemIcon>
					<LanguageIcon />
				</ListItemIcon>

				<ListItemText primary='English / বাংলা' />
			</MenuItem>

			<MenuItem dense divider button onClick={handleThemeChangerOpen}>
				<ListItemIcon>
					<PaletteIcon />
				</ListItemIcon>

				<ListItemText primary='Change Theme' />
			</MenuItem>

			<MenuItem disabled dense>
				<ListItemText secondary='Important Links' />
			</MenuItem>

			<MenuItem dense component={Link} to={'/'} onClick={handleMenuClose}>
				<ListItemIcon>
					<SupervisorAccountIcon />
				</ListItemIcon>

				<ListItemText primary='Become An Instructor' />
			</MenuItem>

			<MenuItem dense component={Link} to={'/'} onClick={handleMenuClose}>
				<ListItemIcon>
					<PolicyIcon />
				</ListItemIcon>

				<ListItemText primary='Privacy &amp; Policy' />
			</MenuItem>

			<MenuItem dense component={Link} to={'/'} onClick={handleMenuClose}>
				<ListItemIcon>
					<BugReportIcon />
				</ListItemIcon>

				<ListItemText primary='Report A Problem' />
			</MenuItem>

			<MenuItem dense component={Link} to={'/'} onClick={handleMenuClose}>
				<ListItemIcon>
					<InfoIcon />
				</ListItemIcon>

				<ListItemText primary='About Us' />
			</MenuItem>
		</Menu>
	);
};

export default OptionsMenu;
