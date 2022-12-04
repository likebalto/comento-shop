import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { goodsList } from "../data/mockData";

// storage전체를 import해오는 방법 (외부에서 불러온거라는 걸 인지하기 위해 쓰면 좋음)
import * as storage from "../utils/storage";


// components
import BackToTopAppBar from "../components/BackToTopAppBar";

// pages
import Basket from "./Basket";

// mui
import { Container } from "@mui/system";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Checkbox from "@mui/material/Checkbox";
import { Card, Grid } from "@mui/material";




function TitlebarBelowImageList() {
    return (
        <ImageList fullWidth cols={3} >
            {goodsList.map((item) => (
                <Card sx={{ m: 2 }}>
                    <ImageListItem key={item.img} sx={{ p: 2 }}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <Grid container>
                            <Grid item xs={11}>
                                <ImageListItemBar
                                    title={item.title}
                                    subtitle={<span>$ {item.price}</span>}
                                    position="below"
                                />
                            </Grid>
                            <Grid item xs={1}>
                                <Checkbox />
                            </Grid>


                        </Grid>
                    </ImageListItem>


                </Card>
            ))}
        </ImageList>
    );
}


function Goods() {
    const [product, setProduct] = useState();
    const navigate = useNavigate();
    const onClickAddBasketButton = (product) => {
        // 장바구니에 굿즈 담기
        storage.addItemtoBasket(product);

        // 장바구니 페이지로 이동
        // navigate뒤에 이동하고 싶은 페이지를 넣어주면 되는데, goods페이지 다음으로 basket을 가는게 아니라 그냥 basket으로 바로 가고 싶은거니까 앞에 슬래시/붙일것
        navigate("/basket");
    }

    return (
        <>
            <BackToTopAppBar />
            <Container>
                <TitlebarBelowImageList />
            </Container>
        </>



    );
}

export default Goods;