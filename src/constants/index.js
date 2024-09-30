import { meta, shopify, starbucks, tesla ,probus, mkt, o2Saver} from "../assets/images";
import { faUsers, faChartLine, faHandshake, faProjectDiagram, faComments } from '@fortawesome/free-solid-svg-icons';

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: faUsers, // Store the icon object itself
        name: "CRM Management",
        type: "Business Development",
    },
    {
        imageUrl: faChartLine,
        name: "Market Research",
        type: "Research",
    },
    {
        imageUrl: faHandshake,
        name: "Negotiation",
        type: "Sales",
    },
    {
        imageUrl: faProjectDiagram,
        name: "Strategic Planning",
        type: "Business Development",
    },
    {
        imageUrl: faComments,
        name: "Communications",
        type: "Soft Skills",
    },
];
export const experiences = [
    {
        title: "Business Development Executive",
        company_name: "Probus Software Private Limited",
        icon: probus,
        iconBg: "#accbe1",
        date: "June 2024 - Present",
        points: [
            "Conducting market research to identify new business opportunities and trends.",
            "Generating and qualifying leads through various channels and networking events.",
            "Building and maintaining relationships with key clients and partners.",
            "Collaborating with internal teams to align business development efforts with company goals.",
            "Tracking and reporting on sales performance and market insights.",
        ],
    },
    {
        title: "Inside Sales Specialist",
        company_name: "Market Intelligence and Tech Consulting Pvt Ltd",
        icon: mkt,
        iconBg: "#b7e4c7",
        date: "2022 - June 2024",
        points: [
            "Generating leads through cold calling, email campaigns, and social media outreach.",
            "Building and maintaining strong client relationships.",
            "Using LinkedIn Sales Navigator to connect with potential clients and generate qualified leads.",
            "Collaborating with marketing and technical teams to enhance sales efforts.",
        ],
    },
    {
        title: "Business Development District Manager (Intern)",
        company_name: "O2 Saver Private Limited",
        icon: o2Saver,
        iconBg: "#fbc3bc",
        date: "Sept 2022 - Nov 2022",
        points: [
            "Generated leads for pathology laboratories in the Pune division.",
            "Managed leads using CRM software, ensuring efficient follow-up.",
            "Conducted cold calls to potential leads and secured appointments.",
        ],
    },
];

// export const experiences = [
//     {
//         title: "React.js Developer",
//         company_name: "Starbucks",
//         icon: starbucks,
//         iconBg: "#accbe1",
//         date: "March 2020 - April 2021",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "React Native Developer",
//         company_name: "Tesla",
//         icon: tesla,
//         iconBg: "#fbc3bc",
//         date: "Jan 2021 - Feb 2022",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Web Developer",
//         company_name: "Shopify",
//         icon: shopify,
//         iconBg: "#b7e4c7",
//         date: "Jan 2022 - Jan 2023",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
//     {
//         title: "Full stack Developer",
//         company_name: "Meta",
//         icon: meta,
//         iconBg: "#a2d2ff",
//         date: "Jan 2023 - Present",
//         points: [
//             "Developing and maintaining web applications using React.js and other related technologies.",
//             "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//             "Implementing responsive design and ensuring cross-browser compatibility.",
//             "Participating in code reviews and providing constructive feedback to other developers.",
//         ],
//     },
// ];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mansi-makane-981155247',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];