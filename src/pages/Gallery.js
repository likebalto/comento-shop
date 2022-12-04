import { galleryList } from "../data/mockData";

// components
import BackToTopAppBar from "../components/BackToTopAppBar";

// mui
import { Container } from "@mui/system";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Card, Grid } from "@mui/material";

function TitlebarBelowImageList() {
    return (
        <ImageList fullWidth cols={3} >
            {galleryList.map((item) => (
                <Card sx={{ m: 2 }}>
                    <ImageListItem key={item.img} sx={{ p: 2 }}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>@ {item.author}</span>}
                            position="below"
                        />

                    </ImageListItem>


                </Card>
            ))}
        </ImageList>
    );
}

function Gallery() {
    return (
        <>
            <BackToTopAppBar />
            <Container>
                <TitlebarBelowImageList />
            </Container>

        </>

    );
}

export default Gallery;