
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box, Button, Card, CardContent, CardMedia, Divider, IconButton, InputAdornment, Link, Pagination, Stack, TextField, Typography,
} from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import React from 'react';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DynamicScreenService from "../../store/master/services/DynamicScreenServices";


const Pricing: React.FC<any> = ({ onClose }) => {

    const [selected, setSelected] = useState("monthly");
    const [activeIndex, setActiveIndex] = useState<number | null>(2);
    const [plans, setPlans] = useState<any>({});


    // const plans = {
    //     month: [{
    //         price: "₹299",
    //         period: "/month",
    //         title: "Intro",
    //         popular: false,
    //         featureName: [
    //             "All limited links",
    //             "Own analytics platform",
    //             "Chat support",
    //             "Optimize hashtags",
    //             "Unlimited users",
    //         ],
    //     },
    //     {
    //         price: "₹599",
    //         period: "/month",
    //         title: "Base",
    //         popular: false,
    //         featureName: [
    //             "All limited links",
    //             "Own analytics platform",
    //             "Chat support",
    //             "Optimize hashtags",
    //             "Unlimited users",
    //         ],
    //     },
    //     {
    //         price: "₹1,999",
    //         period: "/month",
    //         title: "Pro",
    //         popular: true,
    //         featureName: [
    //             "All limited links",
    //             "Own analytics platform",
    //             "Chat support",
    //             "Optimize hashtags",
    //             "Unlimited users",
    //         ],
    //     },
    //     {
    //         price: "₹2,999",
    //         period: "/month",
    //         title: "Enterprise",
    //         popular: false,
    //         featureName: [
    //             "All limited links",
    //             "Own analytics platform",
    //             "Chat support",
    //             "Optimize hashtags",
    //             "Unlimited users",
    //         ],
    //     },
    //     ],

    //     year: [{
    //         price: "₹2,999",
    //         period: "/year",
    //         title: "Intro",
    //         popular: false,
    //         featureName: [
    //             "All limited links",
    //             "Own analytics platform",
    //             "Chat support",
    //             "Optimize hashtags",
    //             "Unlimited users",
    //         ],
    //     },
    //     {
    //         price: "₹5,999",
    //         period: "/year",
    //         title: "Base",
    //         popular: false,
    //         featureName: [
    //             "All limited links",
    //             "Own analytics platform",
    //             "Chat support",
    //             "Optimize hashtags",
    //             "Unlimited users",
    //         ],
    //     },
    //     {
    //         price: "₹19,999",
    //         period: "/year",
    //         title: "Pro",
    //         popular: true,
    //         featureName: [
    //             "All limited links",
    //             "Own analytics platform",
    //             "Chat support",
    //             "Optimize hashtags",
    //             "Unlimited users",
    //         ],
    //     },
    //     {
    //         price: "₹29,999",
    //         period: "/year",
    //         popular: false,
    //         title: "Enterprise",
    //         featureName: [
    //             "All limited links",
    //             "Own analytics platform",
    //             "Chat support",
    //             "Optimize hashtags",
    //             "Unlimited users",
    //         ],
    //     },
    //     ],
    // };

    useEffect(() => {
        const fetchData = async () => {
            const res = await DynamicScreenService.getPricingList();
            console.log("res", res.data);
            setPlans(res.data);
        };
        fetchData();
    }, []);

    const plansToDisplay = selected === "monthly" ? plans.month : plans.year;



    return (
        <Box sx={{ width: "100%" }}>
            <Stack spacing={3} sx={{ alignItems: "center", mt: "6%", mb: "5%", }} px={{ xs: 2, sm: 2, lg: 10 }}>

                <Typography
                    variant="h2"
                    sx={{
                        color: '#3D3D3D',
                        fontFeatureSettings: "'liga' off, 'clig' off",
                        fontFamily: "'Nunito', sans-serif !important",
                        fontSize: '36px !important',
                        fontStyle: 'normal',
                        fontWeight: "600 !important",
                        lineHeight: '50px',
                        textAlign: "center"
                    }}
                    mb={4}
                    mt={2}
                >
                    Simple, transparent pricing.
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: 'gray',
                        fontFamily: "'Nunito', sans-serif !important",
                        fontSize: '18px !important',
                        fontStyle: 'normal',
                        fontWeight: "500 !important",
                        lineHeight: '24px', // 120%
                        letterSpacing: '0.1px', // You can’t use CSS vars like `var(...)` here directly
                        textAlign: "center"
                    }}
                >
                    No contracts. No surprise fees.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 4,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            bgcolor: "#f6f6fa",
                            borderRadius: "30px",
                            p: "4px",
                            width: "240px",
                            position: "relative",
                        }}
                    >
                        {/* Highlight Background */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: 4,
                                left: selected === "monthly" ? 4 : "50%",
                                width: "48%",
                                height: "80%",
                                borderRadius: "30px",
                                background: "linear-gradient(to right, #00C6A2, #00B4D8)",
                                transition: "all 0.3s ease",
                                boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                            }}
                        />

                        {/* Monthly */}
                        <Box
                            onClick={() => setSelected("monthly")}
                            sx={{
                                flex: 1,
                                textAlign: "center",
                                cursor: "pointer",
                                zIndex: 1,
                                py: 1.5,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "'Nunito', sans-serif !important",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: selected === "monthly" ? "#fff" : "#3D3D3D",
                                    transition: "color 0.3s ease",
                                }}
                            >
                                MONTHLY
                            </Typography>
                        </Box>

                        {/* Yearly */}
                        <Box
                            onClick={() => setSelected("yearly")}
                            sx={{
                                flex: 1,
                                textAlign: "center",
                                cursor: "pointer",
                                zIndex: 1,
                                py: 1.5,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "'Nunito', sans-serif !important",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    color: selected === "yearly" ? "#fff" : "#3D3D3D",
                                    transition: "color 0.3s ease",
                                }}
                            >
                                YEARLY
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 1,
                        flexWrap: "wrap",
                        mt: 5,
                        borderRadius: "20px",
                        border: "1px solid #eee",
                        backgroundColor: "#fff",
                    }}
                >
                    {plansToDisplay?.map((plan:any, index:any) => {
                        const isActive = activeIndex === index;

                        return (
                            // <Box
                            //     key={index}
                            //     onClick={() => setActiveIndex(index)}
                            //     sx={{
                            //         flex: "1 1 260px",
                            //         maxWidth: 280,
                            //         p: 4,
                            //         borderRadius: "20px",
                            //         color: "#000",
                            //         // boxShadow: "0px 4px 10px rgba(0,0,0,0.08)",
                            //         position: "relative",
                            //         textAlign: "center",
                            //         cursor: "pointer",
                            //         transition: "all 0.3s ease",
                            //         "&:hover": {
                            //             bgcolor: "linear-gradient(135deg, #2AB7A9, #30C9A1)",
                            //             background: "linear-gradient(to right, #00C6A2, #00B4D8)",
                            //             color: "#fff",
                            //             transform: "translateY(-8px)",
                            //             boxShadow: "0px 12px 40px rgba(0,0,0,0.2)",
                            //             "& .MuiSvgIcon-root": { color: "#fff" },
                            //             "& .feature-text": { color: "#fff" },
                            //             "& .choose-price": { color: "#fff" },
                            //             "& .popular-price": { display: "block",},
                            //             "& .choose-btn": {
                            //                 bgcolor: "#fff",
                            //                 color: "#30C9A1",
                            //             },
                            //         },
                            //     }}
                            // >

                            <Box
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                sx={{
                                    flex: "1 1 260px",
                                    maxWidth: 280,
                                    p: 4,
                                    borderRadius: "20px",
                                    position: "relative",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    background: isActive
                                        ? "linear-gradient(135deg, #2AB7A9, #30C9A1)"
                                        : "#fff",
                                    color: isActive ? "#fff" : "#000",
                                    transform: isActive ? "translateY(-10px)" : "none",
                                    boxShadow: isActive
                                        ? "0px 12px 40px rgba(0,0,0,0.2)"
                                        : "0px 4px 10px rgba(0,0,0,0.08)",

                                    "& .MuiSvgIcon-root": {
                                        color: isActive ? "#fff" : "#30C9A1",
                                    },
                                    "& .feature-text": {
                                        color: isActive ? "#fff" : "#000",
                                    },
                                    "& .choose-price": {
                                        color: isActive ? "#fff" : "#3d3d3d",
                                    },
                                    "& .popular-price": { display: isActive ? "block" : "none" },
                                    "& .choose-btn": {
                                        bgcolor: isActive ? "#fff" : "#30C9A1",
                                        color: isActive ? "#30C9A1" : "#fff",
                                    },
                                }}
                            >

                                {plan.popular && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 16,
                                            right: 16,
                                            bgcolor: "#fff",
                                            color: "#30C9A1",
                                            px: 1,
                                            py: 0.5,
                                            borderRadius: "30px",
                                            fontSize: "10px",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            display: "none",
                                            boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
                                            fontFamily: "'Nunito', sans-serif !important",
                                        }}
                                        className="popular-price"
                                    >
                                        MOST POPULAR
                                    </Box>
                                )}

                                <Box sx={{ textAlign: "left", mt: 2, }}>
                                    {/* Title */}
                                    <Typography variant="h4" className="choose-price" sx={{ mt: 1, fontWeight: 600, color: '#3d3d3d', fontFamily: "'Nunito', sans-serif !important", }}>
                                        {plan.title}
                                    </Typography>
                                </Box>


                                {/* Price */}
                                <Typography variant="h3" fontWeight={600} sx={{
                                    color: '#3d3d3d', fontFamily: "'Nunito', sans-serif !important", fontSize: '30px !important', fontStyle: 'normal', lineHeight: '44px',
                                    textAlign: "left", marginTop: "13px",
                                }}
                                    className="choose-price"
                                >
                                    {plan.price}
                                    <Typography
                                        component="span"
                                        variant="subtitle1"
                                        sx={{
                                            fontSize: "15px", fontWeight: 400, ml: 0.5, fontFamily: "'Nunito', sans-serif !important", color: "gray",
                                            textAlign: "left",
                                        }}
                                        className="choose-price"
                                    >
                                        /{plan.period}
                                    </Typography>
                                </Typography>

                                <Box sx={{ textAlign: "left", mt: 2, }}>

                                    {/* Description */}
                                    <Typography
                                        variant="subtitle2"
                                        className="choose-price"
                                        sx={{ mt: 1, mb: 2, color: 'gray', fontFamily: "'Nunito', sans-serif !important", }}
                                    >
                                        {plan.description}
                                    </Typography>
                                </Box>

                                {/* Button */}
                                <Button
                                    fullWidth
                                    className="choose-btn"
                                    sx={{
                                        borderRadius: "30px",
                                        py: 1,
                                        bgcolor: "#e6f6f4",
                                        color: "#30C9A1",
                                        mb: 2,
                                        fontWeight: 600,
                                        "&:hover": {
                                            // bgcolor: isActive ? "#f2f2f2" : "#fff",
                                            // color: isActive ? "#fff" : "#30C9A1",
                                        },
                                    }}
                                >
                                    Choose plan
                                </Button>

                                {/* Features */}
                                <Box sx={{ textAlign: "left", mb: 3 }}>
                                    {plan.featureName?.map((feature:any, i:any) => (
                                        <Box
                                            key={i}
                                            sx={{ display: "flex", alignItems: "center", mb: 1, gap: 1 }}
                                        >
                                            <CheckCircleIcon
                                                sx={{
                                                    fontSize: 18,
                                                    color: "#30C9A1",
                                                    transition: "color 0.3s ease",
                                                }}
                                            />
                                            <Typography
                                                variant="subtitle2"
                                                className="choose-price"
                                                sx={{ color: 'gray', fontFamily: "'Nunito', sans-serif !important", }}
                                            >
                                                {feature}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>

                            </Box>
                        );
                    })}
                </Box>

            </Stack>
        </Box>
    );
}

export default Pricing;