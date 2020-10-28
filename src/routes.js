import Home from "@/pages/Home.vue";
import NonExistingPage from "@/pages/NonExistingPage";
import Tutorials from "@/pages/Tutorials";
import Background from "@/pages/Background";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
	{
        path: "/tutorials",
        name: "tutorials",
        component: Tutorials
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
