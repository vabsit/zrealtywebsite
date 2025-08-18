
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box, Button, Link, Stack, Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TwoColumnLayout from "../../common/Layouts/TwoColumnLayout";
import React from 'react';
import BulletListWithHeading from "../../common/BulletPointList/BulletPointList";
import IndianPartnerBanner from '../../assets/IndianPartner/PartnerFrame.png';
import Grow from '../../assets/IndianPartner/Grow.jpg';
import Partner from '../../assets/IndianPartner/Partner.jpg';


const IndianPartner: React.FC<any> = ({ onClose }) => {

    const firstlistData = [
        {
            description: 'Reseller Opportunities in Tier 1–3 Cities',
        },
        {
            description: 'Exclusive Regional Rights (Optional)',
        },
        {
            description: 'Training & Certification',
        },
        {
            description: 'Co-branded Events and Campaigns',
        },
        {
            description: 'Lucrative Revenue Share Models',
        },
        {
            description: 'Marketing & Technical Support',
        },
    ]

    return (
        <>
            <Stack spacing={6} sx={{ mb: 2 }}>
                <Box
                    sx={{
                        backgroundImage: `url(${IndianPartnerBanner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '70vh',
                        width: '100%',
                        // display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 3,
                    }}
                >
                    <Stack spacing={3} sx={{ alignItems: "center", mt: 7 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: '#10FAE0',
                                fontSize: '24px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '24px',
                            }}
                        >
                            No more guesswork in design
                        </Typography>
                        <Typography
                            variant="h2"
                            sx={{
                                color: '#fff',
                                fontFeatureSettings: "'liga' off, 'clig' off",
                                fontFamily: "'Nunito', sans-serif !important",
                                fontSize: '54px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '66px',
                            }}
                            mb={4}
                            mt={2}
                        >
                            Join India’s Most Innovative Home Tech Network.
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: '#fff',
                                fontFamily: "'Nunito', sans-serif !important",
                                fontSize: '20px',
                                fontStyle: 'normal',
                                fontWeight: 500,
                                lineHeight: '24px', // 120%
                                letterSpacing: '0.1px', // You can’t use CSS vars like `var(...)` here directly
                            }}
                            width={"75%"}
                        >
                            Become an official Zlendo Realty partner to represent and resell a powerful AI-powered platform designed for home designers, architects, and property builders. Grow with us while helping others digitize their spaces.
                        </Typography>

                    </Stack>
                    <Box gap={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt:7 }}>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: '30px',
                                background: ' #29B0A1',
                                textTransform: 'none',
                                color: '#fff',
                                fontWeight: 500,
                            }}
                        >
                            Apply to Become a Partner
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: '30px',
                                background: ' #29B0A1',
                                textTransform: 'none',
                                color: '#fff',
                                fontWeight: 500,
                                px: 3,
                            }}
                        >
                            Download Partner Deck
                        </Button>
                    </Box>
                </Box>



                <TwoColumnLayout
                    leftGrid={6}
                    rightGrid={6}
                    leftContent={
                        <>


                            <Box mb={3}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Let’s Grow Together
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Whether you're an agency, solo design consultant, or product retailer, Zlendo gives you the tools, support, and reach to build your business in the digital-first construction and interiors world.
                                </Typography>
                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        borderRadius: '30px',
                                        background: ' #29B0A1',
                                        textTransform: 'none',
                                        color: '#fff',
                                        fontWeight: 500,
                                    }}
                                >
                                    Apply to Become a Partner
                                </Button>
                            </Box>

                        </>
                    }
                    rightContent={

                        <img src={Grow} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                />

                <TwoColumnLayout
                    leftGrid={6}
                    rightGrid={6}
                    leftContent={
                        <img src={Partner} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={
                        <>
                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <BulletListWithHeading title="Why Partner With Zlendo?" items={firstlistData} />
                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        borderRadius: '30px',
                                        background: ' #29B0A1',
                                        textTransform: 'none',
                                        color: '#fff',
                                        fontWeight: 500,
                                    }}
                                >
                                    Apply to Become a Partner
                                </Button>
                            </Box>
                        </>
                    }
                />

                <Box mb={2}>

                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', textAlign: "center" }}>
                        <Typography variant="h3" fontWeight="bold" color='#3d3d3d' pb={4} width={"75%"} lineHeight={1.5}>
                            Take the first step to join the smart design revolution. Apply now to become a certified Zlendo partner.
                        </Typography>
                    </Box>

                    <Box gap={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: '30px',
                                background: ' #29B0A1',
                                textTransform: 'none',
                                color: '#fff',
                                fontWeight: 500,
                                px: 2,
                            }}
                        >
                            Apply Now
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: '30px',
                                background: ' #29B0A1',
                                textTransform: 'none',
                                color: '#fff',
                                fontWeight: 500,
                                px: 2,
                            }}
                        >
                            Download Partner Deck
                        </Button>
                    </Box>

                </Box>
            </Stack>
        </>
    );
}

export default IndianPartner;