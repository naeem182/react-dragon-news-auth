import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const LeftsightNav = () => {
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setcategories(data))
    }, [])

    return (
        <div className="space-y-6">
            <h2 className="text-2xl">All Categories</h2>
            {
                categories.map(catego => <Link to={`/category/${catego.id}`} className=" block ml-2 text-xl px-3" key={catego.id}>{catego.name}</Link>)
            }
        </div>
    )
}

export default LeftsightNav
