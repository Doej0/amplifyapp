import React from "react";
import emailjs from 'emailjs-com';
import {Form,Input,TextArea,Button} from 'semantic-ui-react';
import Swal from "sweetalert2"; //fancy pop up box
import "./ContactForm.css";


export default function ContactForm() {
    //info needed from personal account on emailjs to recieve messages from form
    const SERVICE_ID = "service_vyish0l";
    const TEMPLATE_ID = "template_9yfns7h";
    const USER_ID = "RE2KAb7CSZVHxym1I";

    const handleOnSubmit = (e) =>{
        //building promise
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully"
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          })
        });
      e.target.reset()
    }
    return(
        <div className="CForm">
            <Form onSubmit={handleOnSubmit}>
            <Form.Field
             id={'form-input-control-email'}
             control={Input}
             label="Email"
             name="user_email"
             placeholder="Email.."
             required
             icon="mail"
             iconPosition="left"
             />
             <Form.Field
             id={'form-input-control-last-name'}
             control={Input}
             label="Name"
             name="user_name"
             placeholder="Name.."
             required
             icon="user circle"
             iconPosition="left"
             />
             <Form.Field
             id={'form-textarea-control-opinion'}
             control={TextArea}
             label="Message"
             name="user_message"
             placeholder="Message.."
             required
             />
            <Button type="submit" color="green">Submit</Button>
            </Form>
        </div>
    );
}
