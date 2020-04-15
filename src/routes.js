import Home from "./pages/home/Home";
import Coffees from "./pages/coffees/Coffees";

const routes = [
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/coffees",
        component:Coffees,
        exact:true
    }
];

export default routes;