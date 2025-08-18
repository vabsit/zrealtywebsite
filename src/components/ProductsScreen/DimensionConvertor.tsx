
import {
    Box, Button, Stack, Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TwoColumnLayout from "../../common/Layouts/TwoColumnLayout";
import student from '../../assets/DimensionCovertor/student.jpg';
import React from 'react';
import CtaSection from "../../common/CTASection/CTASection";
import BulletListWithHeading from "../../common/BulletPointList/BulletPointList";
import AudienceCard from "../../common/CardWithImage/CardWithImage";
import offer from '../../assets/DimensionCovertor/Offer.png';
import HomeOwner from '../../assets/DimensionCovertor/HomeOwner.jpg';
import Architects from '../../assets/DimensionCovertor/Architects.png';
import Builders from '../../assets/DimensionCovertor/Builders.png';
import DimensionHeader from '../../assets/DimensionCovertor/Frame.png';
import pro2d from '../../assets/DimensionCovertor/pro2d.png';



const DimensionConvertor: React.FC<any> = ({ onClose }) => {


    const firstlistData = [
        {
            description: 'Fast and accurate results',
        },
        {
            description: 'AI-powered spatial intelligence',
        },
        {
            description: 'Customizable with real products & textures',
        },
        {
            description: 'Easy sharing and export for presentations',
        },
    ]

    const secondlistData = [
        {
            description: 'One-Click 3D Conversion from floor plans, PDFs, images',
        },
        {
            description: 'Smart Room Detection – Automatic walls, doors, zones, and furniture alignment',
        },
        {
            description: 'High-Fidelity 3D Rendering with realistic materials and lighting',
        },
        {
            description: 'Interactive Walkthroughs – Explore your space in real-time',
        },
        {
            description: 'Editable Output – Fine-tune layouts, interiors, and dimensions effortlessly',
        },
    ]

    const audienceData = [
        {
            image: HomeOwner,
            title: 'Homeowners',
            description: 'Homeowners & Buyers',
        },
        {
            image: student,
            title: 'Students',
            description: 'Students & Project Planners',
        },
        {
            image: Builders,
            title: 'Builders',
            description: 'Builders & Real Estate Agents',
        },
        {
            image: Architects,
            title: 'Architects',
            description: 'Architects & Interior Designers',
        },
    ];
    return (
        <>
            <Stack spacing={6} sx={{mb:2}}>
                <Box
                    sx={{
                        backgroundImage: `url(${DimensionHeader})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '100vh',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius:3,
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
                                    From Blueprints to Beautiful Spaces
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
                                    Upload your 2D drawings. Get immersive 3D walkthroughs, layouts, and design-ready environments — all in a few clicks.
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
                        <img src={pro2d} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={

                        <BulletListWithHeading title="Why Choose Zlendo?" items={firstlistData} />
                    }
                />

                <Box width={'100%'}>

                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', textAlign: "center" }}>
                        <Typography variant="h3" fontWeight="bold" color='#3d3d3d' pb={4}>
                            Who It's For
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

                <TwoColumnLayout
                    title="What We Offer "
                    leftGrid={6}
                    rightGrid={6}
                    leftContent={
                        <img src={offer} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={

                        <BulletListWithHeading title="Why Choose Zlendo?" items={secondlistData} />
                    }
                />

                <Box mb={2}>
                    <CtaSection
                        title="Get Started Now"
                        subtitle="Zlendo — Making Space Real, Before It's Built."
                        buttonText="Get Started"
                        onButtonClick={() => console.log('Button clicked')}
                    />
                </Box>
            </Stack>
        </>
    );
}

export default DimensionConvertor;