import "./Welcome.css"
import Alert from 'react-bootstrap/Alert';
function Welcome() {
    return (
      <>
        <Alert variant="success">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
      questo è il titolo
      </p>
      
    </Alert>
      </>
    );
  }
  
  export default Welcome;