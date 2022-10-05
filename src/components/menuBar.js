import '../styles/menuBar.css'

function MenuBar({sideBar, setSideBar}) {

    return (
        <div className={`menuBar ${sideBar? 'open': 'closed'}`} onClick={({target}) => setSideBar(!sideBar)}>
            <div className=" bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )
}

export default MenuBar