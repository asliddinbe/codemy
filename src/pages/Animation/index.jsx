import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Button,
    TextField,
    Container
} from "@mui/material";
import React from "react";


const currencies = [
    {
        value: '',
        label: 'Action',
    },
    {
        value: '',
        label: 'Another action',
    },
    {
        value: '',
        label: 'Something else here',
    },
];


export default () => {

    const [currency, setCurrency] = React.useState('EUR');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    }
    return (
        <Box className="card" sx={{ bgcolor: '#F8F9FC' }}>
            <Typography variant="h5" sx={{ ml: 3 }}>Animation Utilities</Typography>
            <Typography  sx={{ fontSize: 15, color: "#8C879C", mb: 3, ml: 3 }}>
                Bootstrap's default utility classes can be found on the  official
                Bootstrap Documentation page. The custom utilities below were created to
                extend this<br /> theme past the default utility classes built into
                Bootstrap's framework.
            </Typography>
            <Grid container columns={12} spacing={3}>
                <Grid item xs={12} lg={6} md={6}>
                    <Container maxWidth="sm">
                        <Card sx={{boxShadow: 4, minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ color: "#4E73DF", fontWeight: 'bold' }}>
                                    Grow In Animation Utilty
                                </Typography>
                                <hr />
                                <Typography sx={{ fontSize: 13, color: '#E83E8C' }}>.animated--grow-in</Typography> <br />
                                <Typography sx={{ fontSize: 13, color: '#858796' }}>Navbar Dropdown Example:</Typography>
                                <br />
                                <Typography sx={{ mb: 1.5 }} > Navbar</Typography>
                                <Typography sx={{ color: '#858796' }}>
                                    Note: This utility animates the CSS transform property, meaning
                                    it will override any existing transforms on an element being
                                    animated! In this theme, the grow in animation is only being
                                    used on dropdowns within the navbar.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Container>
                </Grid>
                <Grid item xs={12} lg={6} md={6}>
                <Container maxWidth="sm">
                    <Card sx={{boxShadow: 4, minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ color: "#4E73DF", fontWeight: 'bold' }}>
                                Fade In Animation Utilty
                            </Typography>
                            <hr />
                            <Typography sx={{ fontSize: 13, color: '#E83E8C' }}>.animated--grow-in</Typography> <br />
                            <Typography sx={{ fontSize: 13, color: '#858796' }}>Navbar Dropdown Example:</Typography>
                            <br />
                            <Typography sx={{ mb: 1.5 }} > Navbar</Typography>
                            <Typography sx={{ mb: 1.5, color: '#858796' }} >Dropdown Button Example:</Typography>
                            <Typography sx={{ color: '#858796' }}>
                                Note: This utility animates the CSS transform property, meaning
                                it will override any existing transforms on an element being
                                animated! In this theme, the grow in animation is only being
                                used on dropdowns within the navbar.
                            </Typography>
                        </CardContent>
                    </Card>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    )
}