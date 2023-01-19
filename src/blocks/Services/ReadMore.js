import {useState} from "react";

const ReadMoreReadless = ({limit, children}) => {
    const [isReadShown, setShown] = useState(false)

    const toggleBtn = () => {
        setShown(prevState => !prevState)
    }

    return(
        <div className="card-text-block">
            <p className="card-text">{isReadShown? children : children. substring(0, limit)}</p>
            <button className="btn-card" onClick={toggleBtn}>{isReadShown ? 'сховати' : 'читати більше'}</button>
        </div>
    )
}

export default ReadMoreReadless;
