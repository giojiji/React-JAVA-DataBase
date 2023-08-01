import "./MyPageStyle.css";


export default function UserInfo(props) {
    return( 
    <div className="infobox">
        <div className="info">
        <span>Full name: {props.firstName} {props.lastName}</span>
        <span>personalN: {props.personalNumber}</span>
        <span>mobileN: {props.phoneNumber}</span>
      </div>
  </div>
    )
}