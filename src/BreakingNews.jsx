import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className=" flex">
            <button className=" btn btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={90}>
                <Link to={''}>I can be a React component, multiple React components</Link>
                <Link className=" mx-3" to={''}>I can be a React component, multiple React components</Link>
                <Link to={''}>I can be a React component, multiple React components</Link>
            </Marquee>

        </div>
    )
}

export default BreakingNews
