

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


export const loginresponse = {

   mainMenus  : homemenuItems ,

}