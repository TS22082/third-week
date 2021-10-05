import styled from "styled-components";

const Contact = styled.div`
  width: 600px;
  border: 0.5px solid #616161;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 10px 10px 30px #bebebe, -20px -20px 60px #ffffff;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export default Contact;
