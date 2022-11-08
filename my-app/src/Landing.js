import { Button, Typography } from "@mui/material";
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import { Box } from "@mui/system";
import React, { useState } from "react";

const Auth = () => {
    return (
        <div>
            <Box
                display = "flex"
                flexDirection = {"column"} 
                maxWidth={400} alignItems = {"center"} 
                justifyContent = {"center"} 
                margin = "auto"
                marginTop = {5}
                padding = {3}
                borderRadius = {5}
                sx = {{":hover": {
                    boxShadow:"10px 10px 20px #ccc",
                    },
                }}
            >
                <Typography 
                    variant = "h1" 
                    padding = {3} 
                    textAlign = "center"
                >
                    Welcome to UShop!
                </Typography>
                <Typography 
                    variant = "h3" 
                    padding = {3} 
                    textAlign = "center"
                >
                    Please use your university email when registering. 
                </Typography>
                <Button 
                    type = "submit"
                    sx = {{marginTop:3, borderRadius:3}} 
                    variant = "contained" 
                    color = "green"
                >
                    <AssignmentIndOutlinedIcon/>
                    Enter
                </Button>
            </Box>
        </div>
    );
};

export default Auth;