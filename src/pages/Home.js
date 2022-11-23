import { Link } from "react-router-dom";

// components
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import GalleryList from "../components/GalleryList";
import GoodsList from "../components/GoodsList";



// mui
import { Box, Container, Typography, Item } from "@mui/material";
import Grid from '@mui/material/Grid';


// images : 파일명 특수문자안됨
import mainImg from "../images/etc/mainImg.jpg";


function Home() {
    return (
        <>
            <ResponsiveAppBar />
            <Container>
                <Box height="150px" position="relative" backgroundSize="cover" backgroundPosition="center center" overflow="hidden" sx={{ mt: 1 }}>

                    <img src={mainImg} alt="mainImg" width="100%" height="150px" />
                </Box>

                {/* Gallery자리 */}
                <Link to="/gallery" style={{ textDecoration: 'none' }}>
                    <GalleryList />
                </Link>

                {/* Goods자리 */}
                <Link to="/goods" style={{ textDecoration: 'none' }}>
                    <GoodsList />
                </Link>



            </Container>
        </>



    );
}

export default Home;