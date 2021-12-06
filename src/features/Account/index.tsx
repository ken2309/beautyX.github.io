// import {React} from 'react';
// import { BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from 'react-router-dom';
//import { RouteComponentProps } from '@reach/router';
import Header from '../Header/index';
import "./Account.css";
import SideBar from './components/MenuSideBar';
// const routes = [
//     {
//       path: "/",
//       exact: true,
//       sidebar: () => <div>home!</div>,
//       main: () => <h2>Home</h2>
//     },
//     {
//       path: "/bubblegum",
//       sidebar: () => <div>bubblegum!</div>,
//       main: () => <h2>Bubblegum</h2>
//     },
//     {
//       path: "/shoelaces",
//       sidebar: () => <div>shoelaces!</div>,
//       main: () => <h2>Shoelaces</h2>
//     }
//   ];
function Account() {
    // const RouterPage = (
    //     props: { pageComponent: JSX.Element } & RouteComponentProps
    // ) => props.pageComponent;
    return (
        <>
            <Header />

            <div className="wrapper">
                <SideBar
                />
                <div className="display_section">
                    {/* <Router>
                    <Switch>
                            {routes.map((item, index) => (
                                <RouterPage key={index} path={`${item.path}`} pageComponent={item.component} />
                            ))}
                    </Switch>
                </Router> */}
                </div>
            </div>

        </>
    )
}
export default Account;