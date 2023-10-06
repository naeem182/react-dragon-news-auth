import { useLoaderData } from "react-router-dom"
import LeftsightNav from "../Navbar/LeftsightNav"
import Navbar from "../Navbar/Navbar"
import RightsightNav from "../Navbar/RightsightNav"
import Header from "./Header/Header"
import NewsCard from "./NewsPages/NewsCard"


const Home = () => {

    const news = useLoaderData();
    // console.log(news);

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            {/* <h2 className=" text-4xl font-poppins">Home </h2> */}
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftsightNav></LeftsightNav>
                </div>
                {/* news container */}
                <div className=" col-span-2">
                    {news.map(singleNews => <NewsCard key={singleNews.id} news={singleNews}></NewsCard>)}
                </div>
                <div className=" border">
                    <RightsightNav ></RightsightNav>
                </div>
            </div>
        </div>
    )
}

export default Home
