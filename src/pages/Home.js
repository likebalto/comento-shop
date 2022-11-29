import { Link } from "react-router-dom";

// components
import BackToTopAppBar from "../components/BackToTopAppBar";
import Profile from "../components/Profile";
import MenuTabs from "../components/MenuTabs";



// mui
import Grid from '@mui/material/Grid';



function Home() {
    return (
        <>
            {/* AppBar자리 */}
            <BackToTopAppBar />
            {/* profile자리 */}
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