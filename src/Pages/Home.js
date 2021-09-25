import React from 'react';
import AllItems from '../Components/Middleproperty/AllItems/AllItems';
import { makeStyles } from '@material-ui/core/styles';
import Offer from '../Components/Middleproperty/Offer';
import { Typography, Container } from '@material-ui/core';
import SpecialItems from '../Components/Middleproperty/SpecialItems/SpecialItems';

const useStyles = makeStyles((theme) => ({
	measured: {
		width: '100%',
		background: '#fff',
	},
	allitems: {
		marginTop: theme.spacing(2),
	},
	title: {
		margin: theme.spacing(2),
	},
}));

export default function Home() {
	const styles = useStyles();
	return (
		<>
			<div className={styles.measured}>
				<Offer />
			</div>

			<Container>
				<Typography className={styles.title} variant='h4' component='h1'>
					Special Items
				</Typography>
				<SpecialItems />
			</Container>
			<Container className={styles.allitems}>
				<Typography className={styles.title} variant='h4' component='h1'>
					Ashongayito Store
				</Typography>
				<AllItems />
				<Typography className={styles.title} variant='h4' component='h1'>
					Reviews
				</Typography>
			</Container>
		</>
	);
}
