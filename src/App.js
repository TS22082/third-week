import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import FormContainer from "./Components/FormContainer";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Contact from "./Components/Contact";
import ContactContainer from "./Components/ContactContainer";

function App() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [contacts, setContacts] = useState([]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addToContacts = (e) => {
    e.preventDefault();
    const newArray = [...contacts];
    newArray.push(form);
    setContacts(newArray);

    // setContacts([...contacts, form]);
  };

  const deleteContact = (index) => {
    const newArray = [...contacts];
    newArray.splice(index, 1);
    setContacts(newArray);
  };

  const updateContact = (index) => {
    const newArray = [...contacts];
    newArray[index] = form;
    setContacts(newArray);
  };

  const buttonStyle = {
    marginLeft: "5px",
    marginRight: "5px",
  };

  return (
    <div className="App">
      <FormContainer>
        <Form onSubmit={addToContacts}>
          <Input
            onChange={onChange}
            name="name"
            type="text"
            placeholder="name"
          />
          <Input
            onChange={onChange}
            name="phone"
            type="text"
            placeholder="phone number"
          />
          <Input
            onChange={onChange}
            name="email"
            type="text"
            placeholder="email"
          />
          <div>
            <Button>Submit</Button>
          </div>
        </Form>
      </FormContainer>
      <ContactContainer>
        {contacts.map((contact, index) => (
          <Contact key={index}>
            <h1>{contact.name}</h1>
            <h1>{contact.phone}</h1>
            <h1>{contact.email}</h1>

            <Button
              onClick={(e) => {
                e.preventDefault();
                deleteContact(index);
              }}
              style={buttonStyle}
            >
              Delete
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                updateContact(index);
              }}
              style={buttonStyle}
            >
              Update
            </Button>
          </Contact>
        ))}
      </ContactContainer>
    </div>
  );
}

export default App;
