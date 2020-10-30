import Home from "@/pages/Home.vue";
import NonExistingPage from "@/pages/NonExistingPage";
import Tutorial1 from "@/pages/Tutorial1";
import Background from "@/pages/Background";
import Intro from "@/pages/IntroToGemicai";
import Tutorial2 from "@/pages/Tutorial2";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
	{
        path: "/intro",
        name: "intro",
        component: Intro
    },
	{
        path: "/tutorial1",
        name: "tutorial1",
        component: Tutorial1
    },
	{
        path: "/tutorial2",
        name: "tutorial2",
        component: Tutorial2
    },
	{
        path: "/background",
        name: "background",
        component: Background
    },
    {
        path: '*',
        component: NonExistingPage,
        meta: {title: "404 | " + process.env.VUE_APP_TITLE}
    },
]

export default routes
