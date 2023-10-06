import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../../Navbar/Navbar";
import RightsightNav from "../../Navbar/RightsightNav";


const NewsDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-5xl">News Detail</h2>
                    <p>{id}</p>

                </div>
                <div>
                    <RightsightNav></RightsightNav>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails
