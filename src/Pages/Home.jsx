import LeftsightNav from "../Navbar/LeftsightNav"
import Navbar from "../Navbar/Navbar"
import RightsightNav from "../Navbar/RightsightNav"
import Header from "./Header/Header"


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            {/* <h2 className=" text-4xl font-poppins">Home </h2> */}
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftsightNav></LeftsightNav>
                </div>
                <div className=" col-span-2">
                    News comming soon
                </div>
                <div className=" border">
                    <RightsightNav ></RightsightNav>
                </div>
            </div>
        </div>
    )
}

export default Home
