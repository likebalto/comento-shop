import { Link } from "react-router-dom";
import * as storage from "../utils/storage";
import { useState, useEffect } from "react";


// components
import BackToTopAppBar from "../components/BackToTopAppBar";

// mui
import { Container } from "@mui/system";
import { Typography, Button, Box } from "@mui/material";

// images
import basket from "../images/etc/basket.jpg";

function Basket() {

    const [basketItems, setBasketItems] = useState();

    useEffect(() => {
        const items = storage.getBasketItems();
        setBasketItems(items);
        console.log(items);
    }, []);


    return (
        <>
            <BackToTopAppBar />
            <Container>
                <Typography variant="h6" sx={{ textAlign: "center", mt: 20 }}>장바구니가 비어있네요!</Typography>
                <Typography variant="h4" sx={{ textAlign: "center", mt: 1 }}>쇼핑하러가볼까요?</Typography>

                {/* 가운데정렬로 수정할 것 */}
                <Box sx={{ mt: 1 }}>
                    <Link to="/goods" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" sx={{ display: "block", ml: "auto", mr: "auto" }}>쇼핑하러가기</Button>
                    </Link>
                </Box>



                <img src={basket} width="100%" />
            </Container>

        </>

    );
}

export default Basket;