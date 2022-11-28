import React from "react";

// mui
import { Box, Typography, styled } from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


// images : 파일명 특수문자안됨
import stamp1 from "../images/stamp/stamp1.jpg";
import stamp2 from "../images/stamp/stamp2.jpg";
import stamp3 from "../images/stamp/stamp3.jpg";
import stamp4 from "../images/stamp/stamp4.jpg";
import stamp5 from "../images/stamp/stamp5.jpg";
import stamp6 from "../images/stamp/stamp6.jpg";

// Gird Paper Style
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function GoodsList() {
    return (
        <>
            <Box sx={{ width: '100%', mt: 2 }}>
                {/* <Typography variant="h5" >Goods</Typography> */}
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <Item><img src={stamp1} width="100%" /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><img src={stamp2} width="100%" /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><img src={stamp3} width="100%" /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><img src={stamp4} width="100%" /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><img src={stamp5} width="100%" /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><img src={stamp6} width="100%" /></Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default GoodsList;