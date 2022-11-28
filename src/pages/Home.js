import { Link } from "react-router-dom";
import { galleryList } from "../data/mockData";

// components
import BackToTopAppBar from "../components/BackToTopAppBar";
import GalleryList from "../components/GalleryList";
import GoodsList from "../components/GoodsList";
import Profile from "../components/Profile";
import MenuTabs from "../components/MenuTabs";



// mui
import { Box, Container, Typography, Item } from "@mui/material";
import Grid from '@mui/material/Grid';



function Home() {
    return (
        <>
            <BackToTopAppBar />
            <Profile />
            {/* menuTab 자리 */}
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 4 }}>
                <MenuTabs />
            </Grid>


        </>



    );
}

export default Home;