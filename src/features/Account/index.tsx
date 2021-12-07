import { RouteComponentProps } from '@reach/router';
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import CheckNoti from "./components/CheckNotification";
import PaymentMethod from "./components/PaymentMethod/index";
import Information from "./components/Information/index";
import Header from '../Header/index';
import "./Account.css";
import SideBar from './components/MenuSideBar';
const routes = [
    {
        path: `/tai-khoan/phuong-thuc-thanh-toan`,
        component: <PaymentMethod />,
    },
    {
        path: `/tai-khoan/thong-tin-ca-nhan`,
        component: <Information />,
    },
]
function Account() {
    const RouterPage = (
        props: { pageComponent: JSX.Element } & RouteComponentProps
    ) => props.pageComponent;
    return (
        <>
            <Header />
            <div className="wrapper account_section">
                <SideBar
                />
                <div className="display_section">
                    <Switch>
                        {routes.map((item, index) => (
                            <RouterPage
                                key={index}
                                path={`${item.path}`}
                                pageComponent={item.component}
                            />
                        ))}
                    </Switch>
                </div>
            </div>

        </>
    )
}
export default Account;