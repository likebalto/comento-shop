import { Link } from "react-router-dom";
import { galleryList } from "../data/mockData";

// components
import BackToTopAppBar from "../components/BackToTopAppBar";
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
            <BackToTopAppBar />
            <Container>
                <Box height="150px" position="relative" backgroundSize="cover" backgroundPosition="center center" overflow="hidden" sx={{ mt: 1 }}>

                    <img src={mainImg} alt="mainImg" width="100%" height="150px" />
                </Box>

                {/* Gallery자리 */}
                <Link to="/goods" style={{ textDecoration: 'none' }}>
                    {/* <Typography variant="h5">Gallery</Typography>

                    {galleryList.map((gallery) => (
                        <>
                            <div>{gallery.id}</div>
                            <div>{gallery.name}</div>
                            <div>{gallery.copyright}</div>
                            <div>{gallery.thumbnail}</div>
                        </>
                    ))} */}

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