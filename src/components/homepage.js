import Heading from "./header";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./footer";

export default function HomePage() {
  return (
    <>
      <Heading />

      <article className="w3-row-padding w3-center w3-margin-top">
        <div className="w3-third">
          <div className="w3-card w3-container" style={{ minHeight: "460px" }}>
            <h3>Trustworthy</h3><br/>
            <i
              className="far fa-handshake w3-margin-bottom w3-text-theme"
              style={{ fontSize: "120px" }}
            ></i>
            <p>Gonna put something here</p>
            <p>Probably in the am</p>
            <p>Cuz Im uber sleepy</p>
            <p>Energy drank aint working dog</p>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card w3-container" style={{ minHeight: "460px" }}>
            <h3>Quick and Reliable</h3><br/>
            <i className="fas fa-shipping-fast w3-margin-bottom w3-text-theme"
            style={{ fontSize: "120px" }}></i>
            <p>Gonna put something here</p>
            <p>Probably in the am</p>
            <p>Cuz Im uber sleepy</p>
            <p>Energy drank aint working dog</p>
          </div>
        </div>

        <div className="w3-third">
          <div className="w3-card w3-container" style={{ minHeight: "460px" }}>
            <h3>Professional and Courteous</h3><br/>
            <i className="fas fa-clipboard-check w3-margin-bottom w3-text-theme"
            style={{ fontSize: "120px" }}></i>
            <p>Gonna put something here</p>
            <p>Probably in the am</p>
            <p>Cuz Im uber sleepy</p>
            <p>Energy drank aint working dog</p>
          </div>
        </div> 
      </article>

        <div className="w3-container">
        <hr/>
        <div className="w3-center">
        <h2>Contact us today for your next shipping solution!</h2>

        <ContactForm/>

        <hr/>
        <h2>Need to get us sooner?</h2>
        <h3>CALL US NOW!</h3>
        <p>(912) 483-6224</p><br/>
        </div>
        </div>

        <Footer/>
    </>
  );
}
