
import {
    Box, Button, Stack, Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TwoColumnLayout from "../../common/Layouts/TwoColumnLayout";
import React from 'react';
import CtaSection from "../../common/CTASection/CTASection";
import BulletListWithHeading from "../../common/BulletPointList/BulletPointList";
import AudienceCard from "../../common/CardWithImage/CardWithImage";
import CostEstimatorBanner from '../../assets/CostEstimator/CostEstimatorBanner.png';
import HomeOwner from '../../assets/CostEstimator/homeOwner.jpg';
import Students from '../../assets/CostEstimator/Student.jpg';
import Bulider from '../../assets/CostEstimator/Bulider.png';
import Architect from '../../assets/CostEstimator/Architects.png';
import CostPlaner from '../../assets/CostEstimator/CostPlaner.png';
import CostEngin from '../../assets/CostEstimator/CostEngin.png';



const SmartCostEstimator: React.FC<any> = ({ onClose }) => {





    const firstlistData = [
        {
            description: 'Zlendo 3D Planner',
        },
        {
            description: 'Zlendo Product & Vendor Library',
        },
        {
            description: 'Zlendo Smart Room Styler',
        },
        {
            description: 'AR/VR for Material Preview',
        },
    ]

    const audienceData = [
        {
            image: HomeOwner,
            title: 'Homeowners',
            description: 'Homeowners planning renovations or new builds',
        },
        {
            image: Students,
            title: 'Students & Learners',
            description: 'Realtors offering packaged estimates for property staging',
        },
        {
            image: Bulider,
            title: 'Builders',
            description: 'Builders sourcing cost-effective options across vendors',
        },
        {
            image: Architect,
            title: 'Architects',
            description: 'Architects and designers managing project budgets',
        },
    ];
    return (
        <>
            <Stack spacing={6} sx={{mb:2}}>
                <Box
                    sx={{
                        backgroundImage: `url(${CostEstimatorBanner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100vh',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 3,
                    }}
                >
                    <TwoColumnLayout
                        leftGrid={6}
                        rightGrid={6}
                        leftContent={
                            <Stack spacing={3} sx={{ alignItems: "start" }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        color: '#29B0A1',
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
                                        color: '#3D3D3D',
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
                                    Transparent. Intelligent. Vendor-Aware.
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: '#3D3D3D',
                                        fontFamily: "'Nunito', sans-serif !important",
                                        fontSize: '20px',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        lineHeight: '24px', // 120%
                                        letterSpacing: '0.1px', // You can’t use CSS vars like `var(...)` here directly
                                    }}
                                >
                                    Plan your project budget with precision using a dynamic cost estimator that blends real-time vendor data, parametric logic, and AI insights.
                                </Typography>
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
                                    Get Started
                                </Button>
                            </Stack>
                        }
                        rightContent={

                            // <img src={zlendoLogo} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />
                            <></>
                        }
                    />
                </Box>

                <TwoColumnLayout
                    leftGrid={6}
                    rightGrid={6}
                    leftContent={
                        <img src={CostPlaner} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={
                        <Box sx={{display:"flex", justifyContent:"center"}}>
                            <BulletListWithHeading title="Works Seamlessly With " items={firstlistData} />
                        </Box>
                    }
                />

                <TwoColumnLayout
                    title="What Makes It Smart? "
                    leftGrid={6}
                    rightGrid={6}
                    leftContent={
                        <img src={CostEngin} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={

                        <>
                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Parametric Costing Engine
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Estimates costs based on room size, material type, usage intensity, and design style — not just square footage.
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    One-Click Vendor Connect
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Contact the vendors whose pricing fits your needs — no middlemen, no confusion.
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    AI Forecasting for Budget Control
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Smart alerts and trend predictions keep you informed about cost overruns or savings potential.
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Design-Integrated Estimates
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Automatically updates cost projections as you style or reconfigure your layout in the Zlendo 3D Planner.
                                </Typography>
                            </Box>
                        </>
                    }
                />

                <Box width={'100%'}>

                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', textAlign: "center" }}>
                        <Typography variant="h3" fontWeight="bold" color='#3d3d3d' pb={4}>
                            Perfect For
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: 0, // Adjust spacing between cards (theme spacing unit = 8px)
                        }}
                    >
                        {audienceData.map((item, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    width: {
                                        xs: '100%',   // Full width on mobile
                                        sm: '48%',     // Two per row on small screens
                                        md: '23%',     // Four per row from medium up
                                    },
                                }}
                            >
                                <AudienceCard {...item} />
                            </Box>
                        ))}
                    </Box>

                </Box>



                <Box mb={2}>
                    <CtaSection
                        title="Start Estimating Smarter"
                        subtitle="Build with clarity, control, and confidence — backed by real-world pricing."
                    // buttonText="Get Started"
                    // onButtonClick={() => console.log('Button clicked')}
                    />
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
                            Estimate Your Project
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
                            Watch Demo
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </>
    );
}

export default SmartCostEstimator;