
import BanglaStoryBooks from "@/PageSection/islamicBook";
import HeaderPage from "../../PageSection/Header";
import NewBooks from "@/PageSection/BanglaBook";
import NewBooks2 from "../../PageSection/BestBook";
import IslamicLibrary2 from "@/PageSection/BookData";
function MainLayout() {
    return (
        <>
            <HeaderPage />
            <BanglaStoryBooks />
            <NewBooks2 />
            <NewBooks />
            <IslamicLibrary2 />



        </>
    );
}

export default MainLayout;