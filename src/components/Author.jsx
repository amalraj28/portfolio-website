import AuthorName from "./AuthorName";
import { aboutMe } from "../constants/exports";

function Author({ selfRef }) {
  return (
    <section className="author" ref={selfRef}>
      <div className="row author-details">
      <AuthorName /> 
       <div className="image col-lg-7">
          <img
            src="src\assets\Amal Raj.jpg"
           
            alt="Picture of author"
          />
        </div>
      <div className="author-description ">
          <p className="about-me">{aboutMe}</p>
        </div>
      </div>
       
      
    </section>
  );
}

export default Author;
