import { Paper,makeStyles } from '@material-ui/core'
import React from 'react'
import UsersForm from './UsersForm'

const useStyles = makeStyles(theme => ({
    pageContent:{
            margin: theme.spacing(5),
            marginTop: theme.spacing(10),
            padding: theme.spacing(3)
        },
}))
export default function Users() {
    const classes = useStyles();
    return (
        <>
        <Paper className={classes.pageContent}>
        <UsersForm/>
        </Paper>
        </>
    )
}
