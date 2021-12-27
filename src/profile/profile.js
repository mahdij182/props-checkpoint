import React from "react"
import  ReactPropTypes  from "prop-types";


const Profile = (props) => {
    const handleName = () => {
        alert(props.fullname)
    }
    return (
        <div>
            {props.children}
            <h1>{props.fullName}</h1>
            <h3>{props.profession}</h3>
            <p>{props.bio}</p>
            <button onClick={handleName}>joinUs</button>
        </div>
    )
}

Profile.defaultProps = {
    fullName: "mahdi Jenhani",
    bio:"xxXla fata illa aliXxx",
    proffesion: "DJ",
}
Profile.proptypes = {
    fullName: proptypes.string,
    bio: proptypes.string,
    proffesion: proptypes.string,
};
export default Profile;