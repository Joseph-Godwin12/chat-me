import {Link,NavLink,Outlet} from 'react-router-dom'

export default function Work(){
    return(
        <>
            <div className="header">
                <h2 className="header-text">Chat Me</h2>
                <ul className="header-list">
                   <li><NavLink to={'/chat'} style={((isactive)=>{isactive?'activestyle':''})} className="chat" >Chat</NavLink></li>
                    <li><NavLink to={'/room'} className="room">Room</NavLink></li>
                    <li><NavLink to={'/group'} className="group">Group</NavLink></li>
                </ul>
            </div>
            <Outlet/>
        </>
    )
}