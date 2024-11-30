import LinkedIn, { GitHub, GMail, Telegram, Resume } from "../components/Icons";
// import {  Discord, Twitter } from "../components/Icons";
// import ResumeLink from "../assets/resume.pdf"
const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/yad-qabato-148787259",
        icon: <LinkedIn />,
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/yaadiOroko430",
        icon: <GitHub />,
    },
    {
        id: 3,
        name: "Mail",
        link: "https://yaadiqaabato@gmail.com",
        icon: <GMail />,
    },

    {
        id: 4,
        name: "Telegram",
        link: "https://t.me/YadDhugaa",
        icon: <Telegram />,
    },
    // {
    //     id: 5,
    //     name: "Resume",
    //     link: ResumeLink,
    //     icon: <Resume />,
    //     download: true
    // }
    // {
    //   id: 6,
    //   name: "Twitter",
    //   link: "twitter.com",
    //   icon: <Twitter />,
    // },
    // {
    //   id: 7,
    //   name: "Discord",
    //   link: "discord.com",
    //   icon: <Discord />,
    // },
];

export default contactInfo;