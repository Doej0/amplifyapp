import Heading from "./header";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "./footer";

export default function HomePage() {
  return (
    <>
      <Heading />

      <article className="w3-row-padding w3-center w3-margin-top">
        <div className="w3-third">
          <div
            className="w3-card w3-pale-green w3-container"
            style={{ minHeight: "460px" }}
          >
            <h3 className="w3-padding-24">Trustworthy</h3>
            <br />
            <i
              className="far fa-handshake w3-margin-bottom w3-text-theme"
              style={{ fontSize: "120px" }}
            ></i>
            <p>
              <b>Communication</b> is our top priority, we serve as an extension
              of you{" "}
            </p>
            <p>
              <b>Commitment</b> to our customers, we strive to exceed
              expectations
            </p>
            <p>
              <b>Accountability</b> every step of the way, we go above and
              beyond
            </p>
          </div>
        </div>

        <div className="w3-third">
          <div
            className="w3-card w3-pale-green w3-container"
            style={{ minHeight: "460px" }}
          >
            <h3 className="w3-padding-24">Quick and Reliable</h3>
            <br />
            <i
              className="fas fa-shipping-fast w3-margin-bottom w3-text-theme"
              style={{ fontSize: "120px" }}
            ></i>
            <p>
              <b>Fast</b> and <b>Safe</b> Delivery
            </p>
            <p>
              <b>Transparent</b> and easy-to-track from the moment you place
              your order{" "}
            </p>
            <p>
              <b>Customer-focused</b> process for a great experience
            </p>
          </div>
        </div>

        <div className="w3-third">
          <div
            className="w3-card w3-pale-green w3-container"
            style={{ minHeight: "460px" }}
          >
            <h3 className="w3-padding-24">Professional and Courteous</h3>
            <br />
            <i
              className="fas fa-clipboard-check w3-margin-bottom w3-text-theme"
              style={{ fontSize: "120px" }}
            ></i>
            <p>
              We <b>respect</b> your time
            </p>
            <p>
              We are <b>efficient</b> and <b>friendly</b>,everything doesn't
              always fit in a box
            </p>

            <p>
              We <b>appreciate</b> and <b>value</b> your business
            </p>
          </div>
        </div>
      </article>
      <article className="w3-container w3-padding-48 ">
        <article className="w3-half w3-container w3-center w3-border-left w3-border-right w3-padding-32">
          <h2>About Us</h2>
          <p>MWJ has been providing shipping solutions for over 15 years</p>
          <p>
            Our Drivers are top performers and are dedicated to getting your
            goods delivered safely and on time
          </p>
          <p>We have one dedicated point of contact for all your loads</p>
          <p>
            Whether you need regularly contracted deliveries or a spot shipment
            we are here to help
          </p>
        </article>
        <article className="w3-half w3-container w3-center w3-border-left w3-border-right w3-padding-32">
          <h2>Services Provided</h2>
          <p>We provide Freight courier Services</p>
          <p>
            We currently operate in Georgia with more locations coming soon!
          </p>
          <p>We operate 24/7 except all major US holidays</p>
          <p>Contact us for a quote today!</p>
        </article>
      </article>

      <div className="w3-container">
        <hr />
        <div className="w3-center">
          <h2>Contact us today for your next shipping solution!</h2>

          <ContactForm />

          <hr />
          <h2>Need to get us sooner?</h2>
          <h3>CALL OR EMAIL US NOW!</h3>
          <p>(912) 483-6224</p>
          <p>mwjtrucking.net@gmail.com</p>
          <br />
        </div>
      </div>

      <Footer />
    </>
  );
}
