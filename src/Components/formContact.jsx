import "./style/formcontact.css";
import Paises from "../Paises";
import { useState } from "react";
import { get_contact_form } from "redux/actions/contact";
import { useDispatch } from "react-redux";
import DjangoCSRFToken from "./DjangoCSRFToken";

function Contact(_props) {
  const [name, setName] = useState("");
  const [email_address, setEmail] = useState("");
  const [code_phone, setCode_phone] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(
      get_contact_form({
        name,
        email_address,
        code_phone,
        phone,
        message,
   
        
      })
    );
  
  };

  function myFunction() {
    alert("Su mensaje se envio correctamente");
    window.location.reload(false)
  
  }


  return (
    <div className="App-form">
      <form
        className="form"
        action=""
        onSubmit={submitHandler}
        method="post"
        enctype="multipart/form-data"
      >
        <DjangoCSRFToken />
        <h2>Contáctame</h2>

        <ul className="form-container">
          <li>
            <label htmlFor="id_name">
            Name:
            </label>

            <input
              className="name"
              type="text"
              name="name"
              id="id_name"
              onChange={(e) => setName(e.target.value)}
              maxlength="50"
              value={name}
              required
            ></input>
          </li>
          <li>
            <label htmlFor="id_email_address">E-mail</label>
            <input
              className="email_address"
              type="email"
              name="email_address"
              id="id_email_address"
              maxLength="254"
              pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$"
              value={email_address}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </li>
          <li>
            <label htmlFor="phone" >Telefono</label>
            <div className="telefono">
              <select
                name="code_phone"
                className="code_phone"
                id="id_code_phone"
                value={code_phone}
                onChange={(e) => setCode_phone(e.target.value)}
              >
                {Paises.map((Paises) => (
                  <option key={Paises.iso3}>
                    {Paises.nombre} (+ {Paises.phone_code})
                  </option>
                ))}
              </select>
              <input
                id="id_phone"
                type="tel"
                className="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </li>
          <li>
            <label htmlFor="mensaje">Menssage</label>
            <textarea
              className="message"
              type="text"
              id="id_message"
              name="message"
              placeholder="Escribe tu mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </li>

        </ul>
        <button id="boton1" type="submit" value="Save" className="buttonSend"  onClick={myFunction}>
          Enviar
        </button>
        
      </form>
    </div>
  );
}

export default Contact;
