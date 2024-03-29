import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import {
    FaDev,
    FaDiscord,
    FaEye,
    FaFacebookF,
    FaRegListAlt,
    FaRegNewspaper,
    FaRegUser,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdComputer, MdDashboard } from "react-icons/md";
import {
    SiFigma,
    SiFirebase,
    SiFiverr,
    SiNextdotjs,
    SiNodedotjs,
} from "react-icons/si";
import About from "./components/aboutPage/About";
import Blogs from "./components/blogsPage/Blogs";
import DevBlogs from "./components/blogsPage/DevBlogs";
import Contact from "./components/contactPage/Contact";
import GuestBook from "./components/guestbookPage/GuestBook";
import Resume from "./components/resumePage/Resume";
import Stats from "./components/statistics/Stats";
import Works from "./components/worksPage/Works";
import {
    ClientData,
    MenuData,
    ServiceData,
    SocialMedia,
    StatisticsData,
    TestimonialData,
} from "./types";

export const menus: MenuData[] = [
    {
        id: 1,
        label: "درباره من",
        Icon: FaRegUser,
        Component: About,
    },
    {
        id: 2,
        label: "رزومه",
        Icon: FaRegListAlt,
        Component: Resume,
    },
    {
        id: 3,
        label: "کارها",
        Icon: FaEye,
        Component: Works,
    },
    {
        id: 4,
        label: "وبلاگ",
        Icon: FaRegNewspaper,
        Component: DevBlogs,
    },
    {
        id: 5,
        label: "آمار",
        Icon: MdDashboard,
        Component: Stats,
    },
    {
        id: 6,
        label: "تماس با من",
        Icon: FiSend,
        Component: Contact,
    },
    {
        id: 7,
        label: "نظر مهمان‌ها",
        Icon: MdComputer,
        Component: GuestBook,
    },
];

export const socialMedia: SocialMedia[] = [
    {
        id: 1,
        Icon: FaDev,
        label: "توسعه دهنده‌گان",
        logoColor: "black",
        mediaUrl: "https://www.dev.to/abbasjafari-vu",
        info: "من را دنبال کنید و مقالات من را در Dev.to بخوانید",
    },
    {
        id: 2,
        Icon: FaFacebookF,
        label: "فیسبوک",
        logoColor: "#3b5998",
        mediaUrl: "https://www.facebook.com/abbasjafari.vu",
        info: "من را در Facebook دنبال کنید",
    },
    {
        id: 3,
        Icon: AiOutlineGithub,
        label: "گیت‌هاب",
        logoColor: "#171515",
        mediaUrl: "https://www.github.com/abbasjafari-vu",
        info: "پروژه های من را در Github ستاره دار کنید",
    },
    {
        id: 4,
        Icon: AiFillLinkedin,
        label: "لینکدین",
        logoColor: "#0072b1",
        mediaUrl: "https://www.linkedin.com/in/abbasjafari-vu",
        info: "بیایید در Linkedin وصل شویم",
    },
    {
        id: 5,
        Icon: FaDiscord,
        label: "دیسکورد",
        logoColor: "#5865f2",
        mediaUrl: "https://www.discord.com",
        info: "بیایید در Discord چت کنیم. نام کاربری من - abbasjafari_vu",
    },
    {
        id: 6,
        Icon: SiFiverr,
        label: "فایور",
        logoColor: "#00b22d",
        mediaUrl: "https://www.fiverr.com/m_jafari",
        info: "من را در Fiverr به عنوان فریلنسر استخدام کنید",
    },
];

export const services: ServiceData[] = [
    {
        id: 1,
        title: "فرانت اند",
        Icon: SiNextdotjs,
        description:
            "وب سایت مدرن و آماده برای موبایل که به شما کمک می کند تا به تمام بازاریابی خود برسید.",
    },
    {
        id: 2,
        title: "بک اند",
        Icon: SiNodedotjs,
        description:
            "بک‌اند با NoSQL DB و API نوشته شده در روتر اکسپرس استاندارد یا tRPC.",
    },
    {
        id: 3,
        title: "طراحی UI/UX",
        Icon: SiFigma,
        description:
            "گرایش های رابط کاربری مدرن با طراحی بسیار حرفه ای و منحصر به فرد.",
    },
    {
        id: 4,
        title: "فایربیس",
        Icon: SiFirebase,
        description:
            "برنامه Firebase کاملا کاربردی با احراز هویت، فایر استور، ذخیره سازی و غیره.",
    },
];

export const clients: ClientData[] = [
    {
        id: 1,
        linkLocation: "https://www.linkedin.com/",
        imgLocation: "/images/lin.png",
    },
    {
        id: 2,
        linkLocation: "https://www.freelancer.com/",
        imgLocation: "/images/freelancer.png",
    },
    {
        id: 3,
        linkLocation: "https://www.upwork.com/",
        imgLocation: "/images/upwork.png",
    },
    {
        id: 4,
        linkLocation: "https://www.envato.com/",
        imgLocation: "/images/envato.png",
    },
];

export const quoteData: TestimonialData = {
    id: "quote",
    quote: "هر کسی می تواند کدی بنویسد که کامپیوتر آن را بفهمد. برنامه نویسان خوب کدی را می نویسند که انسان بتواند آن را درک کند.",
    userName: "مارتین فاولر",
    userProfession: "توسعه دهنده نرم افزار",
    userImage: { url: "/images/martin.jpg" },
};

export const statisticsData: StatisticsData[] = [
    {
        title: "استک",
        info: "MERN or T3",
    },
    {
        title: "پروژه‌ها",
        info: "70+",
    },
    {
        title: "مشتریان",
        info: "40+",
    },
];
