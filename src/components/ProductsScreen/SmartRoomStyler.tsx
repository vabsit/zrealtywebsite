
import {
    Box, Button, Stack, Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TwoColumnLayout from "../../common/Layouts/TwoColumnLayout";
import React from 'react';
import CtaSection from "../../common/CTASection/CTASection";
import BulletListWithHeading from "../../common/BulletPointList/BulletPointList";
import AudienceCard from "../../common/CardWithImage/CardWithImage";
import Realtors from '../../assets/SmartRoomStyler/Realtors.jpg';
import HomeOwner from '../../assets/SmartRoomStyler/Homeowners.jpg';
import InteriorDesigners from '../../assets/SmartRoomStyler/InteriorDesigners.png';
import FurnitureBrands from '../../assets/SmartRoomStyler/FurnitureBrands.jpg';
import SmartRoom from '../../assets/SmartRoomStyler/SmartRoom.png';
import SmartRoomBanner from '../../assets/SmartRoomStyler/SmartRoomBanner.png';
import Realtyai from '../../assets/SmartRoomStyler/RealtyAI.png';



const SmartRoomStyler: React.FC<any> = ({ onClose }) => {


    const firstlistData = [
        {
            heading: 'Zlendo 2D-to-3D Planner',
            description: 'Style rooms on top of your custom floor plans with ease.',
        },
        {
            heading: 'Zlendo Product Library',
            description: 'Access a rich catalog of furniture, textures, and accessories.',
        },
        {
            heading: 'AR/VR Room Preview',
            description: 'Experience your design in immersive augmented or virtual reality.',
        },
        {
            heading: 'Smart Measurement Tools',
            description: 'Auto-adjust dimensions and scale for accuracy and realism.',
        },
    ]

    const audienceData = [
        {
            image: HomeOwner,
            title: 'Homeowners',
            description: 'Quickly explore interior design ideas without hiring a professional.',
        },
        {
            image: InteriorDesigners,
            title: 'Interior Designers',
            description: 'Present polished room mockups to clients within minutes.',
        },
        {
            image: Realtors,
            title: 'Realtors',
            description: 'Stage and showcase properties digitally for better buyer engagement.',
        },
        {
            image: FurnitureBrands,
            title: 'Furniture Brands',
            description: 'Let customers preview how products look in their own space.',
        },
    ];
    return (
        <>
            <Stack spacing={6} sx={{mb:2}}>
                <Box
                    sx={{
                        backgroundImage: `url(${SmartRoomBanner})`,
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
                                    Style. Simulate. See It Come Alive.
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
                                    Transform your space in minutes with a powerful visual styling tool that lets you design rooms in real time
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
                        <img src={SmartRoom} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={

                        <BulletListWithHeading title="Works Seamlessly With" items={firstlistData} />
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

                <TwoColumnLayout
                    title="What You Can Do"
                    leftGrid={6}
                    rightGrid={6}
                    leftContent={
                        <img src={Realtyai} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={

                        <>
                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Drag & Style Instantly
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Easily add and arrange furniture, lighting, and décor with simple drag-and-drop controls.
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Real-Time 3D Visualization
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Instantly view your styled room in lifelike 3D as you make changes.
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    AI-Driven Recommendations
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Get smart design suggestions tailored to your space and style preferences.
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Try Before You Buy
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Visualize actual furniture pieces in your room before purchasing, using 3D and AR.
                                </Typography>
                            </Box>
                        </>
                    }
                />

                <Box mb={2}>
                    <CtaSection
                        title="Get Started Now"
                        subtitle="Zlendo — Making Space Real, Before It's Built."
                    // buttonText="Get Started"
                    // onButtonClick={() => console.log('Button clicked')}
                    />
                    <Box gap={4} sx={{display:"flex", justifyContent: "center", alignItems:"center"}}>
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
                            Start Styling
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

export default SmartRoomStyler;