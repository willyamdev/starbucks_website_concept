import Home from "./pages/home/Home";
import Contato from "./pages/contato/Contato";

const routes = [
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/contato",
        component:Contato,
        exact:true
    }
];

export default routes;