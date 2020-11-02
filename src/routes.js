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
        component: Home
    },
	{
        path: "/docs",
        name: "docs",
        component: Documentation
    },
	{
        path: "/tutorials",
        name: "tutorials",
        component: Tutorials
    },
	{
        path: "/tutorials/:id",
        name: "tutorial",
        component: Tutorial
    },
	{
        path: "/research",
        name: "research",
        component: Research
    },
	{
        path: "/about-us",
        name: "about-us",
        component: AboutUs
    },
    {
        path: '*',
        component: NonExistingPage,
        meta: {title: "404 | " + process.env.VUE_APP_TITLE}
    },
]

export default routes
