
import {
    Box, Button, Stack, Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TwoColumnLayout from "../../common/Layouts/TwoColumnLayout";
import React from 'react';
import CtaSection from "../../common/CTASection/CTASection";
import BulletListWithHeading from "../../common/BulletPointList/BulletPointList";
import AudienceCard from "../../common/CardWithImage/CardWithImage";
import HomeOwner from '../../assets/AiRoomInspiration/HouseOwner.jpg';
import Students from '../../assets/AiRoomInspiration/Students.jpg';
import RealEstate from '../../assets/AiRoomInspiration/RealEstate.png';
import Architect from '../../assets/AiRoomInspiration/Architect.jpg';
import AiRoomBanner from '../../assets/AiRoomInspiration/AiRoomBanner.png';
import AIPower from '../../assets/AiRoomInspiration/AIPower.png';
import SmartDesign from '../../assets/AiRoomInspiration/SmartDesign.png';



const AiRoomInspiration: React.FC<any> = ({ onClose }) => {








    const firstlistData = [
        {
            description: 'Your Style, Your Way – AI designs that match your taste.',
        },
        {
            description: 'Click to 3D – Turn ideas into editable 3D instantly.',
        },
        {
            description: 'Made for You – Styles tailored to your culture & region.',
        },
        {
            description: 'Perfectly Matched – Colors, lighting & furniture in harmony.',
        },
    ]

    const audienceData = [
        {
            image: HomeOwner,
            title: 'Homeowners',
            description: 'Homeowners looking for a starting point',
        },
        {
            image: Students,
            title: 'Students & Learners',
            description: 'Students and learners practicing with inspiration-based design',
        },
        {
            image: RealEstate,
            title: 'Real Estate',
            description: 'Real estate professionals showcasing furnished looks',
        },
        {
            image: Architect,
            title: 'Architects',
            description: 'Architects and designers needing concept ideas',
        },
    ];
    return (
        <>
            <Stack spacing={6} sx={{mb:2}}>
                <Box
                    sx={{
                        backgroundImage: `url(${AiRoomBanner})`,
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
                                    Design Smarter. Dream Bigger. Powered by AI.
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
                                    Instantly visualize room styles and design ideas curated by AI — tailored to your taste, space, and budget.
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
                        <img src={SmartDesign} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={
                        <Box sx={{display:"flex", justifyContent:"center"}}>
                            <BulletListWithHeading title="Design Smarter, Style Better, Live Beautifully" items={firstlistData} />
                        </Box>
                    }
                />

                <TwoColumnLayout
                    title="AI‑Powered Interior Inspiration"
                    leftGrid={6}
                    rightGrid={6}
                    leftContent={
                        <img src={AIPower} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={

                        <>
                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Personalized Design Curation
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Get AI-generated room inspirations based on your selected themes, preferences, and layout — no guesswork, just style
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Style-to-Design in One Click
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Love a look? Convert it instantly into a Zlendo 3D design with editable elements and real-world product matches
                                </Typography>
                            </Box>

                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Smart Style Matching
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Zlendo AI analyzes colors, lighting, and furniture compatibility — so you get cohesive, ready-to-use inspiration boards.
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
                        title="Ready to Get Inspired? "
                        subtitle="Upload a floor plan or describe your room — and let Zlendo AI spark your imagination."
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
                            Try AI Room Inspiration
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
                            Watch How It Works
                        </Button>
                    </Box>
                </Box>
            </Stack>
        </>
    );
}

export default AiRoomInspiration;