// components
import ResponsiveAppBar from "../components/ResponsiveAppBar";

// mui
import { color, Container } from "@mui/system";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Checkbox from "@mui/material/Checkbox";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';


// images
import stamp1 from "../images/stamp/stamp1.jpg";
import stamp2 from "../images/stamp/stamp2.jpg";
import stamp3 from "../images/stamp/stamp3.jpg";
import stamp4 from "../images/stamp/stamp4.jpg";
import stamp5 from "../images/stamp/stamp5.jpg";
import stamp6 from "../images/stamp/stamp6.jpg";
import { Button } from "@mui/material";

// 굿즈카드리스트 : 코드짧게 수정할 것
function TitlebarBelowImageList() {
    return (
        <ImageList sx={{ height: "100%" }}>

            <ImageListItem>

                <img
                    src={stamp1}
                    alt='stamp'
                    loading="lazy"
                />
                <ImageListItemBar
                    title="stamp1"
                    subtitle={<span>by: "@iflego30280"</span>}
                    position="below"
                    actionIcon={
                        <IconButton>
                            <Checkbox />
                        </IconButton>
                    }
                    actionPosition="left"
                />

            </ImageListItem>

            <ImageListItem>
                <img

                    src={stamp2}
                    alt='stamp'
                    loading="lazy"
                />
                <ImageListItemBar
                    title="stamp2"
                    subtitle={<span>by: "@iflego30280"</span>}
                    position="below"
                    actionIcon={
                        <IconButton>
                            <Checkbox />
                        </IconButton>
                    }
                    actionPosition="left"
                />
            </ImageListItem>

            <ImageListItem>
                <img

                    src={stamp3}
                    alt='stamp'
                    loading="lazy"
                />
                <ImageListItemBar
                    title="stamp3"
                    subtitle={<span>by: "@iflego30280"</span>}
                    position="below"
                    actionIcon={
                        <IconButton>
                            <Checkbox />
                        </IconButton>
                    }
                    actionPosition="left"
                />
            </ImageListItem>

            <ImageListItem>
                <img

                    src={stamp4}
                    alt='stamp'
                    loading="lazy"
                />
                <ImageListItemBar
                    title="stamp4"
                    subtitle={<span>by: "@iflego30280"</span>}
                    position="below"
                    actionIcon={
                        <IconButton>
                            <Checkbox />
                        </IconButton>
                    }
                    actionPosition="left"
                />
            </ImageListItem>

            <ImageListItem>
                <img

                    src={stamp5}
                    alt='stamp'
                    loading="lazy"
                />
                <ImageListItemBar
                    title="stamp5"
                    subtitle={<span>by: "@iflego30280"</span>}
                    position="below"
                    actionIcon={
                        <IconButton>
                            <Checkbox />
                        </IconButton>
                    }
                    actionPosition="left"
                />
            </ImageListItem>

            <ImageListItem>
                <img

                    src={stamp6}
                    alt='stamp'
                    loading="lazy"
                />
                <ImageListItemBar
                    title="stamp6"
                    subtitle={<span>by: "@iflego30280"</span>}
                    position="below"
                    actionIcon={
                        <IconButton>
                            <Checkbox />
                        </IconButton>
                    }
                    actionPosition="left"
                />
            </ImageListItem>

        </ImageList>
    );
}


function Goods() {
    return (
        <>
            <ResponsiveAppBar />
            <Container>
                <TitlebarBelowImageList />
                <Box width="100%" sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <Button variant="contained" sx={{ display: "block", ml: "auto", mr: "auto" }} fullWidth>
                        장바구니에 담기
                    </Button>
                </Box>
            </Container>
        </>



    );
}

export default Goods;