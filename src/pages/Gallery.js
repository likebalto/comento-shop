// components
import BackToTopAppBar from "../components/BackToTopAppBar";

// mui
import { Container } from "@mui/system";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// images
import poster1 from "../images/poster/poster1.jpg";
import poster2 from "../images/poster/poster2.jpg";
import poster3 from "../images/poster/poster3.jpg";
import poster4 from "../images/poster/poster4.jpg";
import poster5 from "../images/poster/poster5.jpg";
import poster6 from "../images/poster/poster6.jpg";

function TitlebarBelowImageList() {
    return (
        <ImageList sx={{ height: "100%" }}>

            <ImageListItem>
                <img
                    src={poster1}
                    alt='poster'
                    loading="lazy"
                />
                <ImageListItemBar
                    title="poster1"
                    subtitle={<span>by: "@iflego30280"</span>}
                    position="below"
                />

            </ImageListItem>

            <ImageListItem>
                <img

                    src={poster2}
                    alt='poster'
                    loading="lazy"
                />
                <ImageListItemBar
                    title="poster2"
                    subtitle={<span>by: "@iflego30280"</span>}
                    position="below"
                />
            </ImageListItem>

            <ImageListItem>
                <img

                    src={poster3}
                    alt='poster'
                    loading="lazy"
                />
                <ImageListItemBar
                    title="poster3"
                    subtitle={<span>by: "@iflego30280"</span>}
                    position="below"
                />
            </ImageListItem>

            <ImageListItem>
                <img

                    src={poster4}
                    alt='poster'
                    loading="lazy"
                />
                <ImageListItemBar
                    title="poster4"
                    subtitle={<span>by: "@iflego30280"</span>}
                    position="below"
                />
            </ImageListItem>

            <ImageListItem>
                <img

                    src={poster5}
                    alt='poster'
                    loading="lazy"
                />
                <ImageListItemBar
                    title="poster5"
                    subtitle={<span>by: "@iflego30280"</span>}
                    position="below"
                />
            </ImageListItem>

            <ImageListItem>
                <img

                    src={poster6}
                    alt='poster'
                    loading="lazy"
                />
                <ImageListItemBar
                    title="poster6"
                    subtitle={<span>by: "@iflego30280"</span>}
                    position="below"
                />
            </ImageListItem>

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