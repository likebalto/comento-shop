import React from "react";

// mui
import { Button, Grid, Typography } from "@mui/material";
import Avatar from '@mui/material/Avatar';

// 이미지
import profileImg from "../images/etc/profileImg.jpg";


function Profile() {
    return (
        <>

            <Grid container spacing={2}
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                sx={{ mt: 2 }} >

                {/* 프로필이미지 자리 */}
                {/* 이미지 동그랗게 수정할 것 */}
                <Grid item xs={1}>

                </Grid>
                <Grid item xs={3} >
                    <Avatar
                        alt="Remy Sharp"
                        src={profileImg}
                        sx={{ width: 180, height: 180 }}
                        variant="rounded"
                    />

                </Grid>
                {/* 프로필내용 자리 */}
                <Grid item xs={8}>
                    <Grid container spacing={3}
                        direction="column"
                        justifyContent="space-evenly"
                        alignItems="flex-start">
                        <Grid item xs={4}>
                            <Grid container spacing={2}
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center" >
                                <Grid item>
                                    <Typography variant="h4">iflego30280</Typography>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined">Edit</Button>
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Although it seems awful at first,
                                it will be better day by day, and
                                finally it will be AWESOME!</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="h6">GitHub : https://github.com/likebalto</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>

    )

}
export default Profile;



