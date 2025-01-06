import { createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import MyCampaign from "../pages/MyCampaign";
import AddNewCampaign from "../pages/AddNewCampaign";
import MyDonation from "../pages/MyDonation";
import AllCampaign from "../pages/AllCampaign";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";
import DetailsPage from "../pages/DetailsPage";
import UpdateCampaignPage from "../pages/UpdateCampaignPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>,
                loader: ()=> fetch('https://crowdcube-server-five.vercel.app/runningCampaigns'),
            },
            {
                path: 'MyCampaign',
                element: <PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>,
                loader: ()=> fetch('https://crowdcube-server-five.vercel.app/addCampaign')
            },
            {
                path: "detailsPage/:id",
                element:<DetailsPage></DetailsPage>,
                loader:({params})=>fetch(`https://crowdcube-server-five.vercel.app/campaignInfo/${params.id}`),
                
            },
            {
                path: 'updateCampaign/:id',
                element: <PrivateRoute><UpdateCampaignPage></UpdateCampaignPage></PrivateRoute>,
                loader: ({params})=>fetch(`https://crowdcube-server-five.vercel.app/addCampaign/${params.id}`),
            },
            {
                path: 'login',
                element: <LoginPage></LoginPage>
            },
            {
                path: 'Register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path : 'AddNewCampaign',
                element: <PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>
            },
            {
                path: 'MyDonation',
                element: <PrivateRoute><MyDonation></MyDonation></PrivateRoute>,
                loader: ()=> fetch('https://crowdcube-server-five.vercel.app/donateCampaign'),
            },
            {
                path: 'AllCampaign',
                element: <AllCampaign></AllCampaign>,
                loader: ()=> fetch('https://crowdcube-server-five.vercel.app/addCampaign')
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
]);

export default router;