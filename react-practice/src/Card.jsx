import profilePic from './assets/guy.jpg'

function Card() {
    return (
        <div className="card">    
            <img className="card-img" src={profilePic} alt="profile picture"/>
            <h2 className="card-title">Janghun</h2>
            <p className="card-text">I study react and play piano</p>
        </div>
    );
}

export default Card