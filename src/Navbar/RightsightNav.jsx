
import { FaGooglePlusG, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import Qzone1 from '../assets/asset/qZone1.png'
import Qzone2 from '../assets/asset/qZone2.png'
import Qzone3 from '../assets/asset/qZone3.png'

const RightsightNav = () => {
    return (
        <div>
            <div className=' p-4 space-y-3 mb-3'>
                <h2 className="text-2xl"> Login with</h2>

                <button className="btn btn-outline w-full">
                    <FaGooglePlusG></FaGooglePlusG>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>

            </div>
            <div className=' p-4  mb-3'>
                <h2 className="text-2xl"> Find Us On</h2>

                <a className=' p-4 flex text-lg border rounded-t-lg items-center justify-center' href="
                    ">
                    <FaFacebook></FaFacebook>
                    Facebook
                </a>
                <a className=' p-4 flex text-lg border rounded-t-lg items-center justify-center' href="
                    ">
                    <FaTwitter></FaTwitter>
                    Twitter
                </a>
                <a className=' p-4 flex text-lg border rounded-t-lg items-center justify-center' href="
                    ">
                    <FaInstagram></FaInstagram>
                    Instagram
                </a>

            </div>

            <div className=' p-4  mt-3'>
                <h2 className="text-2xl"> Q-Zone</h2>

                <img src={Qzone1} alt="" />
                <img src={Qzone2} alt="" />
                <img src={Qzone3} alt="" />

            </div>
        </div>
    )
}

export default RightsightNav
