
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box, Button, Link, Stack, Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TwoColumnLayout from "../../common/Layouts/TwoColumnLayout";
import React from 'react';
import AffiliateBanner from '../../assets/Affiliate/AffiliateBanner.png';
import CommonCardWithImageandTitle from "../../common/CardWithImage/CommonCardWithImageandTitle";
import HomeOwner from '../../assets/Affiliate/houseOwner.png';
import Interior from '../../assets/Affiliate/InteriorDesigner.png';
import RealEstate from '../../assets/Affiliate/RealEstate.png';
import AffiliateEarn from '../../assets/Affiliate/AffiliateEarn.png';
import CtaSection from "../../common/CTASection/CTASection";
import Commision from '../../assets/Affiliate/Commision.png';
import Payment from '../../assets/Affiliate/Payment.png';
import Promotion from '../../assets/Affiliate/Promotion.png';
import Team from '../../assets/Affiliate/Team.png';
import RealtimeTracking from '../../assets/Affiliate/RealtimeTracking.png';


const Affiliate: React.FC<any> = ({ onClose }) => {

    const steps = [
        {
            number: "1",
            title: "Sign Up",
            description: "Quick and free registration",
        },
        {
            number: "2",
            title: "Share Your Link",
            description: "Promote across WhatsApp, social media, email, or your website",
        },
        {
            number: "3",
            title: "Earn Commissions",
            description: "Get paid for every qualified lead or conversion",
        },
    ];

    const audienceData = [
        {
            image: HomeOwner,
            title: 'Trusted name in 3D realty and smart property planning',
        },
        {
            image: Interior,
            title: 'Fast-growing user base across India & global markets',
        },
        {
            image: RealEstate,
            title: 'Tools loved by buyers, builders, and design professionals',
        },

    ];

    const data = [
        {
            image: Commision,
            title: "Commission",
            description: "Competitive commission on every referral",
        },
        {
            image: RealtimeTracking,
            title: "Last- Click Attribution",
            description: "Real-time tracking dashboard",
        },
        {
            image: Promotion,
            title: "Promotional Materials",
            description: "Priority access to new Zlendo features",
        },
        {
            image: Team,
            title: "Dedicated Team",
            description: "Co-branded marketing assets",
        },
        {
            image: Payment,
            title: "On-Time Payments",
            description: "Monthly payouts",
        },
    ];


    return (
        <>
            <Stack spacing={6} sx={{ mb: 2 }}>
                <Box
                    sx={{
                        backgroundImage: `url(${AffiliateBanner})`,
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
                            Share. Earn. Grow with Zlendo.
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
                                letterSpacing: '0.1px',
                                textAlign: "center",
                            }}
                            width={"45%"}
                        >
                            Turn your network into revenue. Join our affiliate program and earn for every referral that signs up, books a service, or closes a property.
                        </Typography>

                    </Stack>
                    <Box gap={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 7 }}>
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
                            Start for free
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
                            Book a Demo
                        </Button>
                    </Box>
                </Box>


                <TwoColumnLayout
                    title="How to start  Affiliate To Earn?"
                    leftGrid={6}
                    rightGrid={6}
                    leftContent={
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    maxWidth: 700,
                                    mx: "auto",
                                    position: "relative",
                                    pl: 8, // space for text
                                }}
                            >
                                {/* One Continuous Gradient Vertical Line */}
                                <span
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: "88px", // aligns to circle center
                                        width: "2px",
                                        height: "85%",
                                        background: "linear-gradient(to bottom, #00C6A2, #00B4D8)",
                                        zIndex: 0,
                                    }}
                                />

                                {steps.map((step, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            mb: index !== steps.length - 1 ? 6 : 0,
                                            position: "relative",
                                        }}
                                    >
                                        {/* Circle */}
                                        <Box
                                            sx={{
                                                position: "relative",
                                                zIndex: 1,
                                                width: 50,
                                                height: 50,
                                                borderRadius: "50%",
                                                background: "#fff",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 38,
                                                    height: 38,
                                                    borderRadius: "50%",
                                                    backgroundColor: "#00C6A2",
                                                    color: "#fff",
                                                    fontWeight: "bold",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "16px",
                                                }}
                                            >
                                                {step.number}
                                            </Box>
                                        </Box>

                                        {/* Text */}
                                        <Box sx={{ ml: 3 }}>
                                            <Typography variant="h3" fontWeight="bold" color='#3d3d3d' pb={4}>
                                                {step.title}
                                            </Typography>
                                            <Typography variant="h5" color='#3d3d3d' sx={{ mb: 1 }}>
                                                {step.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>


                        </>
                    }
                    rightContent={

                        <img src={AffiliateEarn} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                />

                <Box sx={{ textAlign: "center", py: 6, }} mb={2}>
                    {/* Heading */}

                    <Typography variant="h3" fontWeight="bold" color='#3d3d3d' pb={4}>
                        What You Get
                    </Typography>

                    {/* Cards Grid */}
                    <Box sx={{ justifyItems: "center", alignItems: "center" }} width={"100%"}>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                    xs: "1fr",
                                    sm: "1fr 1fr",
                                    md: "repeat(3, 1fr)",
                                },
                                gap: 5,
                                justifyItems: "center",
                            }}
                        >
                            {data.map((item, i) => (
                                <Box
                                    key={i}
                                    sx={{
                                        width: 220,
                                        p: 3,
                                        borderRadius: "12px",
                                        background: "#fff",
                                        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                                        textAlign: "center",
                                        transition: "transform 0.2s ease",
                                        "&:hover": {
                                            transform: "translateY(-4px)",
                                            boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                                        },
                                    }}
                                >
                                    {/* <Box
                                    component="img"
                                    src={item.image}
                                    alt={item.title}
                                    sx={{ width: 60, height: 60, mb: 2 }}
                                /> */}
                                    <img src={item.image} alt="Zlendo Realty" style={{ width: '100%', height: "70"}} />

                                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {item.description}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>

                <Box mb={2}>

                    <Box width={'100%'}>

                        <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', textAlign: "center" }}>
                            <Typography variant="h3" fontWeight="bold" color='#3d3d3d' pb={4}>
                                Why Partner with Zlendo?
                            </Typography>
                        </Box>

                        <CommonCardWithImageandTitle data={audienceData} />

                    </Box>

                </Box>

                <Box mb={2}>
                    <CtaSection
                        title="Ready to Partner?"
                        subtitle="Join  and start earning today."
                        buttonText="Get Started"
                        onButtonClick={() => console.log('Button clicked')}
                    />
                </Box>
            </Stack>
        </>
    );
}

export default Affiliate;