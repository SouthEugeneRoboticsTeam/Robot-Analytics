import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';
import { TableSettingsModal } from '../components/TableSettingsModal';
import Table from '@material-ui/core/Table';
import { Paper, TableHead, TableRow, TableCell } from '@material-ui/core';
import { has } from 'lodash';

export class TableView extends React.Component<React.Props<any>, TableViewState> {
    state: TableViewState = {
        isModalOpen: false,
        gameName: '',
        calculationSettings: []
    };

    configureTable = (gameName: string, calculationSettings: Array<CalculationSetting>) => {
        this.setState({ gameName, calculationSettings });
    };

    handleModalOpen = () => {
        this.setState({ isModalOpen: true });
    };

    handleModalClose = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        const { isModalOpen } = this.state;
        return (
            <div>
                <Typography variant="display2">Table View</Typography>
                <TableSettingsModal
                    configureTable={this.configureTable}
                    isModalOpen={isModalOpen}
                    handleModalClose={this.handleModalClose}
                />
                <IconButton onClick={this.handleModalOpen}>
                    <SettingsIcon/>
                </IconButton>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Team Name</TableCell>
                                <TableCell>Team Number</TableCell>
                                {...this.state.calculationSettings.map(setting => (
                                    <TableCell key={`${setting.metricName}-${setting.calculationName}`}>
                                        {`${setting.metricName} (${setting.calculationName})`}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                    </Table>
                </Paper>
            </div>
        );
    }
}

interface TableViewState {
    isModalOpen: boolean
    gameName: string
    calculationSettings: Array<CalculationSetting>
}

export interface CalculationSetting {
    metricName: string,
    calculationName: string
}
