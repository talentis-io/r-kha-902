/* eslint-disable react/prop-types */
import Alert from "react-bootstrap/Alert";
import "./Alert.css";
function AlertMessage({ openalert, content, variant }) {
  console.log(content);
  return (
    <Alert show={true} variant={variant}>
      hell
    </Alert>
  );
}

export default AlertMessage;
