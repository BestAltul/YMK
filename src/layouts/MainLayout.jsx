import Header from "@components/header/Header";
import Footer from "@components/header/Footer";
export default function MainLayout({children}){
    return(
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-grow">{children}</main>
            <Footer/>
        </div>
    );

}