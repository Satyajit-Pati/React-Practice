import profilePic from '../assets/satyajit_img.jpg';

function Card(){
  return(
    <div className="card">
      <img className='card-img' src={profilePic} alt="Profile Pic" />
      <h2 className='card-title'>Satyajit Pati</h2>
      <p className='card-text'>I am a fresher developer and do coding</p>
    </div>
  );
}

export default Card;