function ProfilePicture(){
  const imgUrl = './src/assets/profile.jpg';

  const handleClick = () => alert("Ouch!");

  return(
    <img onClick={handleClick} src={imgUrl} alt="img" />
  )
}

export default ProfilePicture;