import photo from "../utils/photo.jpg";

function About() {
  return (
    <div>
      <h1 className="about-header">About Me</h1>
      <div className="photo">
        <img className="photo" src={photo} alt="My photo"></img>
      </div>

      <h2>Name: 魏三雅 Kathy Wei</h2>
      <h2>學號：r10521519</h2>
    </div>
  );
}

export default About;
