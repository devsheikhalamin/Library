import IslamicBook from "@/PageSection/islamicBook";
import BestBook from "../../PageSection/BestBook";
import HeaderPage from "../../PageSection/Header";
import IslamicLibrary from "../../PageSection/BookData";
import NewBooks from "@/PageSection/BanglaBook";

function MainLayout() {
    return (
        <>
            <HeaderPage />
            <IslamicBook />
            <IslamicLibrary />
            <BestBook />
            <NewBooks />


        </>
    );
}

export default MainLayout;