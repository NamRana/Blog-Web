import pc from "./pc.jpg"

import "./Sidebar.scss"

const Sidebar = (props) => {
    return <div className={`sidebar ${props.className}`}>
        <div className="sidebar__titleBox">
            <h2 className="sidebar__title">About me</h2>
        </div>

        {/* <img src={pc} alt="" className="sidebar__image" /> */}

        <p className="sidebar__paragraph">Hello, I am Naman Rana a full stack web developer.</p>
    </div>;
}

export default Sidebar;