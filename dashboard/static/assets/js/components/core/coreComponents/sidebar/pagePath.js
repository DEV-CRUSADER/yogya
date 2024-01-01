import Sidebar from "./components/sidebar";
// import { Browser, Router as Router, Switch, Route } from "react-router-dom";
import { AboutUs, OurAims } from "./pages/AboutUs";
import { Services, ServicesOne } from "./pages/Services";
import Contact from "./pages/ContactUs";

function pagePath() {
    return (
        <Router>
            <Sidebar />
            <Switch>
                <Route path="/about-us" exact component={AboutUs} />
                <Route path="/about-us/aim" exact component={OurAim} />
                <Route path="/services" exact component={Services} />
                <Route path="/services/services1" exact component={ServicesOne} />
                <Route path="/contact" exact component={Contact} />
            </Switch>
        </Router>
    );
}

export default pagePath;