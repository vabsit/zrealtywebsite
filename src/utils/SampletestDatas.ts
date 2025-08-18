
import HomeOwner from '../assets/HouseModeling/houseOwner.png';
import Interior from '../assets/HouseModeling/InteriorDesigner.png';
import RealEstate from '../assets/HouseModeling/RealEstate.png';
import HomeModelingBanner from '../assets/HouseModeling/HomeModelingBanner.png';
import HouseModelSolution from '../assets/HouseModeling/HouseModelSolution.png';
import EasySteps from '../assets/HouseModeling/EasySteps.png';

const homemenuItems: any[] = [
    { text: "Dashboard", icon: "home", url: "/dashboard" },
    {
      text: "People",
      icon: "people",
      url: null,
      subMenu: [
        { text: "Employees", icon: "person", url: "/people/employee" },
        { text: "Teams", icon: "group", url: "/people/teams" },
      ],
    },
    {
      text: "Payroll",
      icon: "payroll",
      url: null,
      subMenu: [
        { text: "Salaries", icon: "payments", url: "/payroll/salaries" },
        { text: "Reports", icon: "report", url: "/payroll/reports" },
        { text: "Pay Runs", icon: "report", url: "/payroll/payrun" },
      ],
    },
    {
      text: "Shift",
      icon: "payroll",
      url: null,
      subMenu: [
        { text: "Schedule", icon: "payments", url: "/shifts/schedule" },
        { text: "Reports", icon: "report", url: "/shifts/reports" },
      ],
    },
    {
      text: "Health Care",
      icon: "payroll",
      url: null,
      subMenu: [
        { text: "Patient", icon: "payments", url: "/healthcare/patient" },
        { text: "Appointment", icon: "report", url: "/healthcare/appointment" },
      ],
    },
    {
      text: "Settings",
      icon: "settings",
      url: null,
      subMenu: [
    {
        text: "Organisation Profile",
        icon: "orgsettings",
        url: "/settings/orgSettings",
        subMenu: null,
      },
    {
      text: "Masters",
      icon: "payroll",
      url: null,
      subMenu: [
        { text: "Work Location", icon: "payments", url: "/settings/worklocation" },
        { text: "Departments", icon: "report", url: "/settings/departments" },
        { text: "Designations", icon: "report", url: "/settings/designations" },
      ],
    },
    ],
    },

  ];

  const projects = [
          {
              Design_type: "Kitchen",
              userName: "Loosiya",
              image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800",
              userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
              views: "12K",
              images: [
                  { src: HomeOwner, thumb: HomeModelingBanner },
                  { src: HomeModelingBanner, thumb: EasySteps },
                  { src: HouseModelSolution, thumb: HomeModelingBanner },
                  { src: RealEstate, thumb: RealEstate },
                  { src: Interior, thumb: EasySteps },
                  { src: EasySteps, thumb: RealEstate },
                  { src: EasySteps, thumb: RealEstate },
                  { src: EasySteps, thumb: RealEstate },
                  { src: EasySteps, thumb: RealEstate },
              ],
              moreCount: 42,
              description: "This modern, minimalist apartment in an urban setting combines the living area and kitchen into one large open space, creating a social and interactive environment. The bedrooms are separated for privacy. The design emphasizes functionality and simplicity, with a focus on creating a serene and uncluttered environment. The color scheme uses a combination of light and dark tones, with the living area and kitchen in a light beige or off-white color, and the bedrooms in a slightly darker shade. The use of light and dark contrasts, along with the careful selection of materials and colors, contributes to a sophisticated and inviting atmosphere."
          },
          { Design_type: "Bedroom", userName: "Loosiya", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800", userAvatar: "https://randomuser.me/api/portraits/women/44.jpg", views: "12K", moreCount: 42 },
          { Design_type: "Living", userName: "Loosiya", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800", userAvatar: "https://randomuser.me/api/portraits/women/44.jpg", views: "12K", moreCount: 42 },
          { Design_type: "Kitchen", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
          { Design_type: "Bedroom", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
          { Design_type: "Living Room", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
          { Design_type: "Kitchen", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
          { Design_type: "Bedroom", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
          { Design_type: "Kitchen", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
          { Design_type: "Living Room", userName: "Loosiya", image: "...", userAvatar: "...", views: "12K", moreCount: 42 },
      ];


export const loginresponse = {

   mainMenus  : homemenuItems ,
    projects: projects,

}