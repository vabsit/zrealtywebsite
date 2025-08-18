
import {
    Box, Button, Grid, Stack, Typography, Accordion,
    AccordionSummary,
    AccordionDetails,
    Link,
} from "@mui/material";
import { useState } from "react";
import TwoColumnLayout from "../../common/Layouts/TwoColumnLayout";
import zlendoLogo from '../../assets/Frame.png';
import vastu from '../../assets/Landing/vastu.png';
import dimansionto3d from '../../assets/Landing/2dto3d.png';
import ownplatform from '../../assets/Landing/ownplatform.png';
import walkthrough from '../../assets/Landing/walkthrough.png';
import walk from '../../assets/Landing/360walk.png';
import aistyleroom from '../../assets/Landing/aistyleroom.png';
import budget from '../../assets/Landing/budget.png';
import designrefcul from '../../assets/Landing/designrefcul.png';
import exportImage from '../../assets/Landing/export.png';
import Dimension from '../../assets/Landing/Dimension.png';
import LandingBanner from '../../assets/Landing/LandingBanner.png';
import InfoTextBlock from "../../common/CommonInfoTextBlock/InfoTextBlock";
import React from 'react';
import FaqItem from "../../common/CommonFAQ/FAQBlock";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CtaSection from "../../common/CTASection/CTASection";



const LandingScreen: React.FC<any> = ({ onClose }) => {

    const [openIndex, setOpenIndex] = useState<number | null>(1); // default open 2nd item

    const handleToggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };
    const faqData = [
        {
            question: 'Do I need design skills?',
            answer: 'No, you don’t. Our tool is built for everyone — no design background required.',
        },
        {
            question: 'Can I use it on mobile?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum...',
        },
        {
            question: 'How do I share the designs?',
            answer: 'You can share your designs via a link or export them as images or 3D files.',
        },
        {
            question: 'What does it cost?',
            answer: 'We offer both free and premium plans based on your project needs.',
        },
    ];

    const accordionData = [
        {
            title: 'AI Powered 2D to 3D',
            description: 'Instantly transform your 2D floor plans into realistic 3D environments',
            linkText: 'Get Started',
            linkHref: '#get-started',
        },
        {
            title: '360 Degree & 4K Immersive Walkthroughs',
        },
        {
            title: 'Localized Design Libraries',
        },
        {
            title: 'Real-Time Cost Estimation',
        },
        {
            title: 'Exportable 3D Formats',
        },
        {
            title: 'White-Label & API Integrations',
        },
        {
            title: 'AI Room Inspiration',
        },
        {
            title: 'AR/MR/VR',
        },
        {
            title: 'Vastu Recommendations',
        },
    ];
    return (

        <Stack spacing={5} sx={{mb:2}} >

            <TwoColumnLayout
                leftGrid={6}
                rightGrid={6}
                leftContent={
                    <Stack spacing={3} sx={{ alignItems: "start" }}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: '#29B0A1',
                                fontFeatureSettings: "'liga' off, 'clig' off",
                                fontFamily: "'Nunito', sans-serif !important",
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
                            See your space styled before it’s built.
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
                            Zlendo transforms your rough layout into a 3D styled room with AI-powered visuals, cost breakdowns, and customization.
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

                    <img src={LandingBanner} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />
                }
            />

            <TwoColumnLayout
                title="9 Dimension of Smart Living"
                leftGrid={6}
                rightGrid={6}
                leftContent={

                    <img src={Dimension} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

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

            <TwoColumnLayout
                title="Transform Every Step of Your Project with Zlendo Realty"
                leftGrid={4}
                rightGrid={8}
                leftContent={
                    <InfoTextBlock
                        label="From Flat to Fabulous"
                        title="Convert Your 2D Plan to 3D Instantly"
                        description="Instantly transform your 2D floor plans into realistic 3D environments"
                        buttonText="Learn More"
                        onButtonClick={() => console.log("Button clicked")}
                    />
                }
                rightContent={

                    <img src={dimansionto3d} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />
                }
            />

            <TwoColumnLayout
                leftGrid={7}
                rightGrid={5}
                leftContent={
                    <img src={walk} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                }
                rightContent={

                    <InfoTextBlock
                        label="See Every Angle in Style"
                        title="Walk Through Every Room Without Stepping In"
                        description="Give clients or family a 360° walkthrough and 4K render of your space. No site visits, no imagination needed—just immersive design clarity."
                        buttonText="Learn More"
                        onButtonClick={() => console.log("Button clicked")}
                    />
                }
            />

            <TwoColumnLayout
                leftGrid={4}
                rightGrid={8}
                leftContent={
                    <InfoTextBlock
                        label="Designs That Speak Your Culture"
                        title="Designs That Reflect Your Culture"
                        description="Choose from localized libraries with traditional elements like South Indian décor or regional motifs to make your home feel truly yours."
                        buttonText="Learn More"
                        onButtonClick={() => console.log("Button clicked")}
                    />
                }
                rightContent={
                    <img src={designrefcul} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                }
            />

            <TwoColumnLayout
                leftGrid={7}
                rightGrid={5}
                leftContent={
                    <img src={budget} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                }
                rightContent={

                    <InfoTextBlock
                        label="Know the Cost Before You Build"
                        title="Know Your Budget Before You Build"
                        description="Stop guessing. Zlendo gives real-time cost estimation and BoQ—perfect for builders and homeowners looking to stay on budget."
                        buttonText="Learn More"
                        onButtonClick={() => console.log("Button clicked")}
                    />
                }
            />

            <TwoColumnLayout
                leftGrid={4}
                rightGrid={8}
                leftContent={
                    <InfoTextBlock
                        label="Take Your Space Anywhere"
                        title="Export Your Designs in Clicks"
                        description="Whether you're creating a virtual tour, showcasing in games, or handing over to vendors—export your 3D room in GLB, FBX, or other formats."
                        buttonText="Learn More"
                        onButtonClick={() => console.log("Button clicked")}
                    />
                }
                rightContent={
                    <img src={exportImage} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                }
            />

             <TwoColumnLayout
                leftGrid={7}
                rightGrid={5}
                leftContent={
                    <img src={ownplatform} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                }
                rightContent={

                    <InfoTextBlock
                        label="Plug into Possibility"
                        title="Integrate Zlendo in Your Own Platform"
                        description="Integrate seamlessly with your own platform or apps"
                        buttonText="Learn More"
                        onButtonClick={() => console.log("Button clicked")}
                    />
                }
            />

            <TwoColumnLayout
                leftGrid={4}
                rightGrid={8}
                leftContent={
                    <InfoTextBlock
                        label="Inspired by You, Styled by AI"
                        title="Let AI Style Your Rooms, Your Way"
                        description="Get smart, curated room designs based on your preferences and layout."
                        buttonText="Learn More"
                        onButtonClick={() => console.log("Button clicked")}
                    />
                }
                rightContent={
                    <img src={aistyleroom} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                }
            />

            <TwoColumnLayout
                leftGrid={7}
                rightGrid={5}
                leftContent={
                    <img src={walkthrough} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                }
                rightContent={

                    <InfoTextBlock
                        label="Step Inside Your Future"
                        title="Walk Through Your Future—From Anywhere"
                        description="Augmented Reality and Mixed Reality to preview and present your space"
                        buttonText="Learn More"
                        onButtonClick={() => console.log("Button clicked")}
                    />
                }
            />

             <TwoColumnLayout
                leftGrid={4}
                rightGrid={8}
                leftContent={
                    <InfoTextBlock
                        label="Built with Balance"
                        title="Style Your Space the Vastu Way"
                        description="Traditional Indian architectural wisdom blended with modern design."
                        buttonText="Learn More"
                        onButtonClick={() => console.log("Button clicked")}
                    />
                }
                rightContent={
                    <img src={vastu} alt="Zlendo Realty" style={{ width: '100%', borderRadius: 12 }} />

                }
            />

            <CtaSection
                title="Start Your First Project in Under 2 Minutes"
                subtitle="No credit card required. Just pick a template and go."
                buttonText="Get Started"
                onButtonClick={() => console.log('Button clicked')}
            />

            <Box sx={{ p: 3 }} >

                <Typography variant="h4" fontWeight="bold"
                    sx={{
                        color: '#3D3D3D',
                        fontFeatureSettings: "'liga' off, 'clig' off",
                        fontFamily: "'Nunito', sans-serif !important",
                        fontSize: '36px',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: '46px',
                    }}
                >
                    FAQs
                </Typography>

                {faqData.map((faq: any, index: any) => (
                    <FaqItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </Box>
            <Box mb={2}>
                <CtaSection
                    title="Create your account today and get started for free!"
                    buttonText="Get Started"
                    onButtonClick={() => console.log('Button clicked')}
                />

            </Box>

        </Stack>


    );
};

export default LandingScreen;


