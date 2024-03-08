import React from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button
} from '@mui/material';
import CreateAccountForm from "./account/CreateAccountForm";

const Dashboard = () => {
    // Example data
    const assetsValue = '$500,000';
    const currencyRate = { USD: 1.22, EUR: 1.08, GBP: 1.38 };
    const indicesRate = { SP500: 4200.35, NASDAQ: 14000.25, DAX: 15500.50 };

    const [isFormOpen, setFormOpen] = useState(false);

    const handleOpenForm = () => {
        setFormOpen(true);
    };

    const handleCloseForm = () => {
        setFormOpen(false);
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                {/* Assets Value Section */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h6">Assets Value</Typography>
                        <Typography variant="h4">{assetsValue}</Typography>
                    </Paper>
                </Grid>

                {/* Currencies Rate Section */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h6">Currencies Rate</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Currency</TableCell>
                                        <TableCell>Rate</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {Object.entries(currencyRate).map(([currency, rate]) => (
                                        <TableRow key={currency}>
                                            <TableCell>{currency}</TableCell>
                                            <TableCell>{rate}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>

                {/* Indices Rate Section */}
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h6">Indices Rate</Typography>
                        <div>
                            {Object.entries(indicesRate).map(([index, rate]) => (
                                <Typography key={index} variant="subtitle1">
                                    {`${index}: ${rate}`}
                                </Typography>
                            ))}
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h6">Indices Rate</Typography>
                        <div>
                            {Object.entries(indicesRate).map(([index, rate]) => (
                                <Typography key={index} variant="subtitle1">
                                    {`${index}: ${rate}`}
                                </Typography>
                            ))}
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Button variant="contained" onClick={handleOpenForm}>
                Create Account
            </Button>
            <CreateAccountForm isOpen={isFormOpen} handleClose={handleCloseForm} />
        </Container>
    );
};

export default Dashboard;