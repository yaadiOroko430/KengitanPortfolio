import Digitalclock from "../assets/Projects/DigitalClock.png";
import todo from "../assets/Projects/todo.png";
import Feedback from "../assets/Projects/Feedback.png"
import ClientPortfolio from "../assets/Projects/client.png"
import yaadFolio from "../assets/Projects/portfolio.png"
import Spam_Detector from "../assets/Projects/Spam_Detector.png"
import FAC from "../assets/Projects/FAC.png"
import Simon_Game from "../assets/Projects/Simon_Game.png"
import Todo_App from "../assets/Projects/Todo_App.png"
import ECF from "../assets/Projects/ECF.png"
import CLI_TMA from "../assets/Projects/CLI_TMA.png"





const projects = [
    {
        img: Digitalclock,
        name: "DidgitalClock",
        demo: "https://ecommerce-dashboard-793.vercel.app/",
        code: "https://github.com/yaadiOroko430/digital-clock",
        description: "A Digital Clock application built with React that displays the current time in hours, minutes, and seconds in a digital format. The clock will update every second to reflect the real-time system time and can optionally show the current date. This project demonstrates state management in React using hooks like useState and useEffect",
        style: {
            shadow: "shadow-[#3498AB]",
            cover: "from-[#3498AB]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: todo,
        name: "ToDo List",
        demo: "https://dev-store-793.vercel.app/",
        code: "https://github.com/yaadiOroko430/ToDoList",
        description: "A To-Do List application built with React allows users to add, edit, delete, and mark tasks as complete. ",
        style: {
            shadow: "shadow-[#5E4746]",
            cover: "from-[#5E4746]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Feedback,
        name: "Feedback Management System",
        demo: "https://feedback-website.onrender.com/",
        code: "https://github.com/yaadiOroko430/feedback-system.git",
        description: "A simple digital platform where users can submit feedback, report corruption, and suggest improvements. It supports anonymous submissions, secure data handling, and helps organizations review and act on reports to improve transparency and service quality.",
        style: {
            shadow: "shadow-[#FB923C]",
            cover: "from-[#FB923C]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: ClientPortfolio,
        name: "Client personal website",
        demo: "https://personal-client-portfolio-n5l9.vercel.app/",
        code: "https://github.com/dhawal-793/Dev_Notes",
        description: "DevNotes is a Simple Notes App Created using MERN Stack with complete user Authentication.",
        style: {
            shadow: "shadow-[#F8FAFC]",
            cover: "from-[#F8FAFC]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: yaadFolio,
        name: "Yad's portfolio",
        demo: "https://kengitan-portfolio.vercel.app/",
        code: "https://github.com/yaadiOroko430/KengitanPortfolio",
        description: "Kengitan Qabato Personal portfolio built with React Js, Tailwind CSS and Vite Js",
        style: {
            shadow: "shadow-[#23CEEE]",
            cover: "from-[#23CEEE]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Spam_Detector,
        name: "Spam Detector",
        demo: "https://spam-detector-793.vercel.app",
        code: "https://github.com/dhawal-793/spam-detection-next",
        description: "Spam Detector is a Hack-A-Vishkar hackathon project organised in Geetanjali Collage of Technical Studies, on spam email detection system using custom ml models.",
        style: {
            shadow: "shadow-[#277AF8]",
            cover: "from-[#277AF8]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: FAC,
        name: "FontAwesome Clone",
        demo: "https://dhawal-793.github.io/Font-Awesome-Clone/",
        code: "https://github.com/dhawal-793/Font-Awesome-Clone",
        description: "FontAwesome Clone is a Project based on Fontawesome.com, created using React Js and Tailwind CSS.",
        style: {
            shadow: "shadow-[#FFD43B]",
            cover: "from-[#FFD43B]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Simon_Game,
        name: "Simon Game",
        demo: "https://dhawal-793.github.io/Simon-Game/",
        code: "https://github.com/dhawal-793/Simon-Game",
        description: "Simon Game is a very simple game created using React Js and Tailwind CSS.",
        style: {
            shadow: "shadow-[#011F3F]",
            cover: "from-[#011F3F]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Todo_App,
        name: "TODO APP",
        demo: "https://meen-to-do-app.onrender.com/",
        code: "https://github.com/dhawal-793/MEEN-TODO-APP",
        description: "MEEN ToDO App is a very simple Todo App created using MongoDb,Express Js EJs and Node Js.",
        style: {
            shadow: "shadow-[#A582E2]",
            cover: "from-[#A582E2]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: ECF,
        name: "Ecommerce Frontend",
        demo: "https://dhawal-793.github.io/E-Commerce-Website-Front-End-Design/",
        code: "https://github.com/dhawal-793/E-Commerce-Website-Front-End-Design",
        description: "Frontend Design of an Ecommerce Website created using HTML CSS JS and Bootstrap.",
        style: {
            shadow: "shadow-[#CEC3FB]",
            cover: "from-[#CEC3FB]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: CLI_TMA,
        name: "Task Manager CLI",
        demo: "https://github.com/dhawal-793/Command-line-application-for-Task-Management",
        code: "https://github.com/dhawal-793/Command-line-application-for-Task-Management",
        description: "This is a Task Management CLI App created using C++, here user can create, read, Update and delete tasks.",
        style: {
            shadow: "shadow-[#763145]",
            cover: "from-[#763145]",
            display: " hidden group-hover:flex"
        }
    },
    // {
    //     img: "",
    //     name: "WordCloud Generator",
    //     demo: "https://github.com/dhawal-793/Wordcloud-maker",
    //     code: "https://github.com/dhawal-793/Wordcloud-maker",
    //     description: "This is a WordCloud Maker, Created using Python. User can create WordCloud by giving paragraph of text as Input.   ",
    //     style: {
    //         shadow: "shadow-emerald-500",
    //         cover: "from-emerald-500",
    // display:" hidden group-hover:flex"
    //     }
    // },
]
export default projects;