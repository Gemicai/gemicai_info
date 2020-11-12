import Home from "@/pages/Home.vue";
import NonExistingPage from "@/pages/NonExistingPage";
import Documentation from "@/pages/Documentation";
import Tutorials from "@/pages/Tutorials";
import Research from "@/pages/Research";
import AboutUs from "@/pages/AboutUs";
import Tutorial from "./pages/Tutorial";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta: {title: "Gemicai"}
    },
	{
        path: "/documentation",
        name: "documentation",
        component: Documentation,
        meta: {title: "Documentation | Gemicai"}
    },
	{
        path: "/tutorials",
        name: "tutorials",
        component: Tutorials,
        meta: {title: "Tutorials | Gemicai"}
    },
	{
        path: "/tutorials/:id",
        name: "tutorial",
        component: Tutorial,
        meta: {title: "Tutorials | Gemicai"}
    },
	{
        path: "/research",
        name: "research",
        component: Research,
        meta: {title: "Research | Gemicai"}
    },
	{
        path: "/about-us",
        name: "about-us",
        component: AboutUs,
        meta: {title: "About Us | Gemicai"}
    },
    {
        path: '*',
        component: NonExistingPage,
        meta: {title: "404 | " + process.env.VUE_APP_TITLE}
    },
]

export default routes
