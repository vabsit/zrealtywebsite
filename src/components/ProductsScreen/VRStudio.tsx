
import {
    Box, Button, Stack, Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TwoColumnLayout from "../../common/Layouts/TwoColumnLayout";
import React from 'react';
import CtaSection from "../../common/CTASection/CTASection";
import BulletListWithHeading from "../../common/BulletPointList/BulletPointList";
import AudienceCard from "../../common/CardWithImage/CardWithImage";
import HomeOwner from '../../assets/VRStudio/HouseOwner.png';
import Interior from '../../assets/VRStudio/Interior.jpg';
import Buliders from '../../assets/VRStudio/Buliders.png';
import Architect from '../../assets/VRStudio/Architects.jpg';
import VRStudioBanner from '../../assets/VRStudio/VRStudioBanner.png';
import VRDesign from '../../assets/VRStudio/VRDesign.png';
import VRPreview from '../../assets/VRStudio/VRPreview.png';



const VRStudio: React.FC<any> = ({ onClose }) => {



    const firstlistData = [
        {
            description: 'Cut guesswork and rework',
        },
        {
            description: 'Impress clients with real-time virtual walkthroughs',
        },
        {
            description: 'Make faster, more confident decisions',
        },
        {
            description: 'Sell properties faster with immersive experiences',
        },
        {
            description: 'Edit with Ease – Make instant tweaks in 3D mode',
        },
    ]

    const audienceData = [
        {
            image: HomeOwner,
            title: 'Homeowners',
            description: 'Understand your floor plan clearly',
        },
        {
            image: Interior,
            title: 'Interior Designers',
            description: 'Present concepts visually to clients',
        },
        {
            image: Buliders,
            title: 'Builders & Contractors',
            description: 'Communicate effectively with clients',
        },
        {
            image: Architect,
            title: 'Architects',
            description: 'Validate design feasibility before execution',
        },
    ];
    return (
        <>
            <Stack spacing={6} sx={{mb:2}}>
                <Box
                    sx={{
                        backgroundImage: `url(${VRStudioBanner})`,
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
                                        fontSize: '24px !important',
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
                                        fontSize: '54px !important',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        lineHeight: '66px',
                                    }}
                                    mb={4}
                                    mt={2}
                                >
                                    Step Inside Your Dream Space Before It’s Built.
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
                                    Bring your designs to life with immersive Virtual Reality walkthroughs powered by Zlendo.
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
                        <img src={VRPreview} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <BulletListWithHeading title="Why Zlendo VR Studio? " items={firstlistData} />
                        </Box>
                    }
                />

                <TwoColumnLayout
                    title="How It Works"
                    leftGrid={6}
                    rightGrid={6}
                    leftContent={
                        <img src={VRDesign} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={

                        <>
                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Walk Through, Not Just Look At
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Experience your rooms at human scale — walk through hallways, open doors, and feel spatial flow like never before.
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Accurate to Your 3D Designs
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Convert Zlendo 3D Planner files directly into VR-ready formats with zero rework or modeling effort
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Realistic Interiors in Full Scale
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Visualize materials, lighting, textures, and furniture in VR — just as they’ll appear in the real world.
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Perfect for Professionals
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Architects, interior designers, realtors, and developers can now deliver jaw-dropping client presentations with immersive tech.
                                </Typography>
                            </Box>
                        </>
                    }
                />

                <Box width={'100%'}>

                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', textAlign: "center" }}>
                        <Typography variant="h3" fontWeight="bold" color='#3d3d3d' pb={4}>
                            Who Is It For?
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
                        title="Ready to Step In?"
                        subtitle="Turn your project vision into a walkthrough reality — with Zlendo VR Studio."
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
                            Launch VR Studio
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
                           Try a Demo
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </>
    );
}

export default VRStudio;