
import FrontLayout from "@/components/Layout/FrontLayout";
import MainLayout from "@/components/Layout/MainLayout";
import ContactPage from "@/PageSection/contact-02";
import FeaturesPage from "@/PageSection/MoreBlog";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: FrontLayout,
        children: [
            {
                index: true,
                Component: MainLayout,
            },
            {
                path: "/about",
                Component: FeaturesPage,
            },
            {
                path: "/contact",
                Component: ContactPage
            },
        ]
    }
])

export default router;