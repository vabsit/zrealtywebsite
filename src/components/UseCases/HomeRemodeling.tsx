
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box, Button, Link, Stack, Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import TwoColumnLayout from "../../common/Layouts/TwoColumnLayout";
import React from 'react';
import CtaSection from "../../common/CTASection/CTASection";
import BulletListWithHeading from "../../common/BulletPointList/BulletPointList";
import HomeOwner from '../../assets/HouseModeling/houseOwner.png';
import Interior from '../../assets/HouseModeling/InteriorDesigner.png';
import RealEstate from '../../assets/HouseModeling/RealEstate.png';
import HomeModelingBanner from '../../assets/HouseModeling/HomeModelingBanner.png';
import HouseModelSolution from '../../assets/HouseModeling/HouseModelSolution.png';
import EasySteps from '../../assets/HouseModeling/EasySteps.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CommonCardWithImageandTitle from "../../common/CardWithImage/CommonCardWithImageandTitle";



const HomeRemodeling: React.FC<any> = ({ onClose }) => {


    const firstlistData = [
        {
            description: 'AI-driven room styling suggestions based on your room type and design preference',
        },
        {
            description: 'Drag & drop furniture placement with real product previews',
        },
        {
            description: 'Explore lighting & material combinations with real-time rendering',
        },
        {
            description: 'Save multiple style versions and compare',
        },
        {
            description: 'Export/share designs with professionals or vendors',
        },
    ]

    const audienceData = [
        {
            image: HomeOwner,
            title: 'Homeowners styling a new home',
        },
        {
            image: Interior,
            title: 'Interior designers showcasing layouts to clients',
        },
        {
            image: RealEstate,
            title: 'Real estate professionals staging homes virtually',
        },

    ];

    const accordionData = [
        {
            title: 'Select Your Room & Theme',
            description: 'Instantly transform your 2D floor plans into realistic 3D environments',
            // linkText: 'Get Started',
            // linkHref: '#get-started',
        },
        {
            title: 'Visualize your Layout Instantly',
        },
        {
            title: 'Finalize, Export, or Share Your Design',
        },

    ];

    return (
        <>
            <Stack spacing={6} sx={{ mb: 2 }}>
                <Box
                    sx={{
                        backgroundImage: `url(${HomeModelingBanner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '150vh',
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
                            Design Your Dream Home from Scratch
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
                        >
                            Plan, style, and visualize your entire home in 3D—powered by AI and local design insights
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
                </Box>



                <TwoColumnLayout
                    leftGrid={6}
                    rightGrid={6}
                    leftContent={
                        <>


                            <Box mb={2}>
                                <Typography variant="h5" fontWeight="bold" fontSize={20} gutterBottom>
                                    Problem
                                </Typography>

                                <Typography variant="subtitle1" color="#878787" gutterBottom>
                                    Interior design decisions are overwhelming. Choosing the right furniture, lighting, color palettes, and layouts without seeing the result often leads to costly mistakes or mismatched aesthetics                                </Typography>
                            </Box>

                        </>
                    }
                    rightContent={

                        <img src={HouseModelSolution} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                />

                <TwoColumnLayout
                    leftGrid={6}
                    rightGrid={6}
                    leftContent={
                        <img src={HouseModelSolution} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <BulletListWithHeading title="HouseModelSolution" items={firstlistData} />
                        </Box>
                    }
                />

                <Box width={'100%'}>

                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', textAlign: "center" }}>
                        <Typography variant="h3" fontWeight="bold" color='#3d3d3d' pb={4}>
                            Ideal For
                        </Typography>
                    </Box>

                    <CommonCardWithImageandTitle data={audienceData} />

                </Box>

                <TwoColumnLayout
                    title="The Easy 3 step Process for Home Design"
                    leftGrid={6}
                    rightGrid={6}
                    leftContent={

                        <img src={EasySteps} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                    }
                    rightContent={
                        <>
                            {accordionData.map((item: any, idx: any) => (
                                <Accordion key={idx} disableGutters elevation={0} sx={{ mb: 2 }}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography variant="h5" fontWeight="500">{item.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {item.description && (
                                            <Typography variant="subtitle1" color="text.secondary" mb={1}>
                                                {item.description}
                                            </Typography>
                                        )}
                                        {item.linkText && item.linkHref && (
                                            <Link href={item.linkHref} underline="hover" fontWeight="bold">
                                                {item.linkText}
                                            </Link>
                                        )}
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </>
                    }
                />


                <Box mb={2}>
                    <CtaSection
                        title="Ready to style your dream space?"
                        buttonText="Try a Demo"
                        onButtonClick={() => console.log('Button clicked')}
                    />

                </Box>
            </Stack>
        </>
    );
}

export default HomeRemodeling;