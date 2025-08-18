
import {
    Box, Button, Stack, Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TwoColumnLayout from "../../common/Layouts/TwoColumnLayout";
import React from 'react';
import CtaSection from "../../common/CTASection/CTASection";
import BulletListWithHeading from "../../common/BulletPointList/BulletPointList";
import AudienceCard from "../../common/CardWithImage/CardWithImage";
import HomeOwner from '../../assets/CostEstimator/homeOwner.jpg';
import Students from '../../assets/CostEstimator/Student.jpg';
import Bulider from '../../assets/CostEstimator/Bulider.png';
import Architect from '../../assets/CostEstimator/Architects.png';
import CostPlaner from '../../assets/CostEstimator/CostPlaner.png';
import CostEngin from '../../assets/CostEstimator/CostEngin.png';
import ZlenoApiBanner from '../../assets/ZlendoApiSuite/ZlenoApiBanner.png';
import PowerInterier from '../../assets/ZlendoApiSuite/PowerInterier.png';
import ZlendoApi from '../../assets/ZlendoApiSuite/ZlendoApi.png';



const ZlendoApiSuite: React.FC<any> = ({ onClose }) => {

    const firstlistData = [
        {
            description: 'Seamlessly integrate 3D design, visualization, and cost estimation into your own platform',
        },
        {
            description: 'Enhance user engagement with interactive tools that turn ideas into actionable designs.',
        },
        {
            description: 'Streamline the journey from concept to purchase, backed by real-time vendor data.',
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
                        backgroundImage: `url(${ZlenoApiBanner})`,
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
                                    Seamless. Scalable. Design Driven Integration
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: '#3D3D3D',
                                        fontFamily: "'Nunito', sans-serif !important",
                                        fontSize: '20px',
                                        fontStyle: 'normal',
                                        fontWeight: 500,
                                        lineHeight: '24px',
                                        letterSpacing: '0.1px',
                                    }}
                                >
                                    Integrate Zlendo’s powerful 3D design and visualization tools directly into your platform for an elevated user experience.
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
                        <img src={ZlendoApi} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <BulletListWithHeading title="Why Choose the Zlendo Realty API Suite?" items={firstlistData} />
                        </Box>
                    }
                />

                <TwoColumnLayout
                    title="AI‑Powered Interior Inspiration"
                    leftGrid={6}
                    rightGrid={6}
                    leftContent={
                        <>
                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Embedded Floor Plan Creation
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Enable users to generate 2D and 3D floor plans within your website or app with just a few lines of code.
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Parametric Estimation & Design Linking
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Connect real-time parametric cost estimates to layouts so users can instantly see design and budget in sync.
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Interactive 3D Model Viewer
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Embed a smooth, high-fidelity 3D viewer to showcase realistic interior scenes, textures, and lighting.
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Direct Vendor Library Access
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Pull accurate product pricing and availability from verified suppliers for assisted design-to-purchase workflows.
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Who Should Build with Zlendo APIs
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Ideal for real estate platforms, interior design software, furniture ecommerce, and architecture firms.
                                </Typography>
                            </Box>
                        </>
                    }
                    rightContent={
                        <img src={PowerInterier} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                />

                 <Box mb={2}>
                    <CtaSection
                        title="Get Started Now"
                        subtitle="Sign up, grab your API key, and embed vetted design and cost tools in under an hour (SDK & docs included)."
                        buttonText="Get Started"
                        onButtonClick={() => console.log('Button clicked')}
                    />
                </Box>
            </Stack>
        </>
    );
}

export default ZlendoApiSuite;