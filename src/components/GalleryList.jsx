import React from "react";
import { Link } from "react-router-dom";

// mui
import { Box, Typography, styled } from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


// images : 파일명 특수문자안됨
import poster1 from "../images/poster/poster1.jpg";
import poster2 from "../images/poster/poster2.jpg";
import poster3 from "../images/poster/poster3.jpg";
import poster4 from "../images/poster/poster4.jpg";
import poster5 from "../images/poster/poster5.jpg";
import poster6 from "../images/poster/poster6.jpg";

// Gird Paper Style
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function GalleryList() {
    return (
        <>
            <Box sx={{ width: '100%', mt: 2 }}>
                <Typography variant="h5" >Gallery</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <Item><img src={poster1} width="100%" /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><img src={poster2} width="100%" /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><img src={poster3} width="100%" /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><img src={poster4} width="100%" /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><img src={poster5} width="100%" /></Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item><img src={poster6} width="100%" /></Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default GalleryList;