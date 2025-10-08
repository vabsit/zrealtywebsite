import React, { useEffect, useState } from "react";
import {
    Drawer,
    List,
    ListItemText,
    Collapse,
    Box,
    Typography,
    ListItem,
    ListItemButton,
    Breadcrumbs,
    Link,
    TextField,
    Button,
    Stack,
    InputAdornment,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';


const GetStarted: React.FC<any> = () => {

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Get Started with Zlendo</Typography>
            <Typography variant="body1">
                Follow these steps to get started with Zlendo:
            </Typography>
            <ol>
                <li>Create an account</li>
                <li>Set up your profile</li>
                <li>Start exploring the platform</li>
            </ol>
        </Box>
    );
}


const Login: React.FC<any> = () => {

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Login to Zlendo</Typography>
            <Typography variant="body1">
                Please enter your credentials to log in:
            </Typography>
            <form>
                <TextField label="Email" variant="outlined" fullWidth margin="normal" />
                <TextField label="Password" type="password" variant="outlined" fullWidth margin="normal" />
                <Button type="submit" variant="contained" color="primary">Login</Button>
            </form>
        </Box>
    );
}


const menuData = [
    {
        title: "Introduction",
        SubMenu: [
            {
                title: "Why Zrealty?",
                SubMenu: [
                    {
                        title: "Welcome To Zrealty Community!",
                        url: <GetStarted />,
                    },
                    {
                        title: "Learn with Zrealty",
                        url: <Login />,
                    },
                    {
                        title: "Switch Languages",
                        url: <GetStarted />,
                    },
                    {
                        title: "Login Your Account",
                        url: <Login />,
                    },
                ],
            },
        ],
    },
    {
        title: "Get Started",
        SubMenu: [
            {
                title: "Sign Up & Login",
                SubMenu: [
                    {
                        title: "Sign Up Instructions",
                        url: <GetStarted />,
                    },
                    {
                        title: "Login Instructions",
                        url: <Login />,
                    },
                    {
                        title: "Password Recovery",
                        url: <GetStarted />,
                    },
                    {
                        title: "Two-Factor Authentication",
                        url: <Login />,
                    },
                ],
            },
        ],
    },
];

interface ViewTutorialProps {
    onClose?: () => void;
    data?: any;
    search?: any;
    searchData?: any;
    setSearch?: any;
}


const ViewHelpCenter: React.FC<ViewTutorialProps> = ({
    onClose, data, search, searchData, setSearch,
}) => {

    const navigate = useNavigate();
    const [activeUrl, setActiveUrl] = useState<React.ReactNode>(
        menuData[0].SubMenu[0].SubMenu[0].url
    );
    const [activeTitle, setActiveTitle] = useState<string>(
        menuData[0].SubMenu[0].SubMenu[0].title
    );
    const [content, setContent] = useState<string>("Loading...");
    const [searchFilter, setSearchFilter] = useState("");
    const [searchResults, setSearchResults] = useState<any[]>([]);

    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});


    const closeBasicDetails = () => {
        onClose && onClose();
    };

    const handleClick = (path: string) => {
        navigate(path);
    };

    console.log(data, "data");


    useEffect(() => {
        const openKeys: { [key: string]: boolean } = {};

        const findAndOpen = (items: any[], parentKey = ""): boolean => {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const key = `${parentKey}-${i}`;

                if (item.SubMenu) {
                    if (findAndOpen(item.SubMenu, key)) {
                        openKeys[key] = true;
                        return true;
                    }
                } else if (item.url === activeUrl) {
                    return true;
                }
            }
            return false;
        };

        findAndOpen(menuData);
        setOpenMenus(openKeys);
    }, [activeUrl]);

    useEffect(() => {
        if (!data?.label) return;

        // Find the level 1 menu that matches data.label
        const level1Menu = menuData.find((menu) => menu.title === data.label);
        if (!level1Menu || !level1Menu.SubMenu?.length) return;

        // Recursively find the first deepest submenu item
        const findFirstLeaf = (menu: any): any =>
            menu.SubMenu ? findFirstLeaf(menu.SubMenu[0]) : menu;

        const firstLeaf = findFirstLeaf(level1Menu.SubMenu[0]);

        // Set active states
        setActiveTitle(firstLeaf.title);
        setActiveUrl(firstLeaf.url || null);

        // Build open menu keys (auto expand all parents)
        const expandParents = (menu: any, parentKey = "0"): string[] => {
            const keys: string[] = [];
            if (menu.SubMenu) {
                keys.push(parentKey);
                keys.push(...expandParents(menu.SubMenu[0], `${parentKey}-0`));
            }
            return keys;
        };

        const openKeys = expandParents(level1Menu);
        setOpenMenus((prev: any) => {
            const updated = { ...prev };
            openKeys.forEach((key) => (updated[key] = true));
            return updated;
        });
    }, [data?.label]);


    const toggleMenu = (key: string) => {
        setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const renderMenu = (items: any[], parentKey: string = "", level: number = 0) => (
        <List component="div" disablePadding>
            {items.map((item, index) => {
                const key = `${parentKey}-${index}`;
                if (item.SubMenu) {
                    return (
                        <React.Fragment key={key}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        toggleMenu(key)
                                        if (!openMenus[key] && item.SubMenu.length > 0) {
                                            const firstChild = item.SubMenu[0];

                                            const findFirstLeaf = (menu: any): any =>
                                                menu.SubMenu ? findFirstLeaf(menu.SubMenu[0]) : menu;

                                            const firstLeaf = findFirstLeaf(firstChild);

                                            setActiveTitle(firstLeaf.title);
                                            setActiveUrl(firstLeaf.url || firstLeaf.component || null);
                                        }
                                    }}
                                    sx={{ pl: 2 + level * 2 }}
                                >
                                    <ListItemText primary={item.title} />
                                    {openMenus[key] ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                            </ListItem>
                            <Collapse in={openMenus[key]} timeout="auto" unmountOnExit>
                                {renderMenu(item.SubMenu, key, level + 1)}
                            </Collapse>
                        </React.Fragment>
                    );
                }
                return (
                    <ListItem disablePadding key={key}>
                        <ListItemButton
                            sx={{ pl: 2 + level * 2 }} // <-- same indent for leaf items
                            selected={activeTitle === item.title}
                            onClick={() => {
                                setActiveTitle(item.title);
                                setActiveUrl(item.url);
                            }}
                        >
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );

    useEffect(() => {
        if (searchData.length > 0) {
            setSearchFilter(searchData);
            handleSearch(searchData);
        }

    }, [searchData]);

    const handleSearch = (term: string) => {
        console.log("Search initiated for:", term);

        if (!term.trim()) {
            setSearchResults([]);
            return;
        }

        const lowerTerm = term.toLowerCase();
        const results: any[] = [];

        menuData.forEach((level1) => {
            level1.SubMenu?.forEach((level2) => {
                level2.SubMenu?.forEach((level3) => {
                    if (level3.title.toLowerCase().includes(lowerTerm)) {
                        results.push({
                            breadcrumb: `${level1.title} > ${level2.title} > ${level3.title}`,
                            title: level3.title,
                            url: level3.url,
                        });
                    }
                });
            });
        });

        setSearchResults(results);
    };

    const handleSearchResult = (selectedTitle: string) => {
        // 1️⃣ Find the item in the menuData
        let foundItem: any = null;
        let breadcrumbPath: string[] = [];
        let openKeys: { [key: string]: boolean } = {};

        const findItem = (items: any[], parentKey = "", path: string[] = []): boolean => {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const key = `${parentKey}-${i}`;
                const newPath = [...path, item.title];

                if (item.SubMenu) {
                    if (findItem(item.SubMenu, key, newPath)) {
                        openKeys[key] = true; // auto open this menu
                        return true;
                    }
                } else if (item.title === selectedTitle) {
                    foundItem = item;
                    breadcrumbPath = newPath;
                    return true;
                }
            }
            return false;
        };

        findItem(menuData);

        if (foundItem) {
            // 2️⃣ Set active states
            setActiveTitle(foundItem.title);
            setActiveUrl(foundItem.url || null);

            // 3️⃣ Open all parent menus
            setOpenMenus((prev) => ({ ...prev, ...openKeys }));

            // 4️⃣ Close search screen
            setSearch(false);

            console.log("Breadcrumb Path:", breadcrumbPath.join(" > "));
        }
    };


    return (
        <>
            {!search ? (
                <>

                    <Box sx={{ display: "flex", minHeight: "90vh", boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", borderRadius: 2 }}>
                        {/* Left Drawer */}
                        <Drawer
                            variant="permanent"
                            anchor="left"
                            sx={{
                                width: 280,
                                flexShrink: 0,
                                "& .MuiDrawer-paper": {
                                    width: 280,
                                    boxSizing: "border-box",
                                    position: "static",
                                },
                            }}
                        >
                            <Box sx={{ overflow: "auto" }}>{renderMenu(menuData)}</Box>
                        </Drawer>

                        {/* Right Content */}
                        <Box sx={{ flexGrow: 1, p: 3, overflowY: "auto" }}>
                            <Breadcrumbs
                                separator={
                                    <NavigateNextIcon sx={{ fontSize: "24px", color: "#929292", }} /> // arrow size & color
                                }
                                sx={{ mb: 2 }}
                                aria-label="breadcrumb"
                            >
                                <Link
                                    underline="hover"
                                    sx={{
                                        cursor: "pointer",
                                        color: "#929292",
                                        fontFamily: "Nunito, sans-serif",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        lineHeight: "12px", // 60%
                                        letterSpacing: "0.5px",
                                    }}
                                    onClick={() => handleClick("/")}
                                >
                                    Home
                                </Link>

                                <Link
                                    underline="hover"
                                    sx={{
                                        cursor: "pointer",
                                        color: "#929292",
                                        fontFamily: "Nunito, sans-serif",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        lineHeight: "12px", // 60%
                                        letterSpacing: "0.5px",
                                    }}
                                    onClick={() => closeBasicDetails()}
                                >
                                    Help Center
                                </Link>

                                <Link
                                    underline="none"
                                    sx={{
                                        cursor: "pointer",
                                        color: "#929292",
                                        fontFamily: "Nunito, sans-serif",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        lineHeight: "12px", // 60%
                                        letterSpacing: "0.5px",
                                    }}

                                >
                                    {activeTitle}
                                </Link>

                            </Breadcrumbs>

                            <Typography variant="h4" gutterBottom>
                                {activeTitle}
                            </Typography>

                            {activeUrl}
                        </Box>
                    </Box>
                </>) : (<>
                    <Stack spacing={6} sx={{ mb: 2, }} px={{ xs: 2, sm: 2, lg: 7 }}>
                        <Box sx={{mt:"25px !important",}}>
                            <Breadcrumbs
                                separator={
                                    <NavigateNextIcon sx={{ fontSize: "24px", color: "#929292", }} /> // arrow size & color
                                }
                                sx={{ mb: 2 }}
                                aria-label="breadcrumb"
                            >
                                <Link
                                    underline="hover"
                                    sx={{
                                        cursor: "pointer",
                                        color: "#929292",
                                        fontFamily: "Nunito, sans-serif",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        lineHeight: "12px", // 60%
                                        letterSpacing: "0.5px",
                                    }}
                                    onClick={() => handleClick("/")}
                                >
                                    Home
                                </Link>

                                <Link
                                    underline="hover"
                                    sx={{
                                        cursor: "pointer",
                                        color: "#929292",
                                        fontFamily: "Nunito, sans-serif",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        lineHeight: "12px", // 60%
                                        letterSpacing: "0.5px",
                                    }}
                                    onClick={() => closeBasicDetails()}
                                >
                                    Help Center
                                </Link>

                                <Link
                                    underline="none"
                                    sx={{
                                        cursor: "pointer",
                                        color: "#929292",
                                        fontFamily: "Nunito, sans-serif",
                                        fontSize: "18px",
                                        fontStyle: "normal",
                                        fontWeight: 600,
                                        lineHeight: "12px", // 60%
                                        letterSpacing: "0.5px",
                                    }}

                                >
                                    Search
                                </Link>

                            </Breadcrumbs>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                mt: 2,
                            }}
                        >
                            <TextField
                                placeholder="Search for space you like"
                                variant="outlined"
                                value={searchFilter}
                                onChange={(e) => { setSearchFilter(e.target.value); handleSearch(e.target.value); }}
                                // onKeyDown={(e) => {
                                //     if (e.key === "Enter") {
                                //         console.log("Search triggered:", searchFilter);
                                //         handleSearch(searchFilter);
                                //     }
                                // }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: "gray", fontSize: "25px" }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: searchFilter.length > 0 ? (
                                        <InputAdornment position="end">
                                            <CloseIcon sx={{ color: "gray", fontSize: "25px" }} onClick={() => { setSearchFilter(""); setSearchResults([]); }} />
                                        </InputAdornment>
                                    ) : null,
                                    sx: {
                                        borderRadius: "50px",
                                        height: 50,
                                        backgroundColor: "#fff",
                                        border: "1px solid gray",
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#fff",
                                        },
                                        "&:hover .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#a6a6a6",
                                        },
                                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#00C6A2",
                                        },
                                        "& input::placeholder": {
                                            color: "#3d3d3d",
                                            opacity: 1,
                                        },
                                    },
                                }}
                                sx={{
                                    width: { xs: "100%", sm: 300, md: 560 },
                                }}
                            />
                        </Box>

                        {searchResults.length > 0 && (
                            <Box sx={{ mt: 3 }}>
                                {searchResults.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            p: 2,
                                            mb: 1,
                                            border: "1px solid #ddd",
                                            borderRadius: "10px",
                                            backgroundColor: "#fafafa",
                                            cursor: "pointer",
                                            "&:hover": { backgroundColor: "#f0f0f0" },
                                        }}
                                        onClick={() => {
                                            // setActiveTitle(item.title);
                                            // setActiveUrl(item.url);
                                            // setSearch(false);
                                            handleSearchResult(item.title);
                                        }}
                                    >
                                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.breadcrumb}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        )}

                    </Stack>
                </>)}
        </>
    );
}

export default ViewHelpCenter;
