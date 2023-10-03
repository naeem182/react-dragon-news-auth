import logo from '../../assets/asset/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className=' items-center text-center mx-auto justify-center'>
            <img className=' items-center text-center mx-auto justify-center' src={logo} alt="" />
            <p className=' my-2 font-poppins text-md'>Journalism Without Fear or Favour</p>
            <h2 className=' text-xl'>{moment().format("dddd, MMMM D, YYYY")}</h2>
        </div>
    )
}

export default Header
