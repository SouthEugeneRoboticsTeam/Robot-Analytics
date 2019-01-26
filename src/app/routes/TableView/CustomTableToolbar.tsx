import * as React from 'react';
import { Toolbar, Theme, WithStyles, createStyles, withStyles, Typography } from '@material-ui/core';
import { lighten } from '@material-ui/core/styles/colorManipulator';

const styles = (theme: Theme) => createStyles({
    root: {
        paddingRight: theme.spacing.unit,
        width: '100%',
        backgroundColor: 'whitesmoke',
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary
    },
    title: {
        flex: '0 0 auto'
    }
});

const CustomTableToolbar = ({ classes, title }: CustomTableToolbarProps) => (
    <Toolbar className={classes.root}>
        <div className={classes.title}>
            <Typography variant="title" style={{ color: 'grey' }}>{title}</Typography>
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
        </div>
    </Toolbar>
);

interface CustomTableToolbarProps extends WithStyles<typeof styles> {
    title: string
}

export default withStyles(styles)(CustomTableToolbar);
