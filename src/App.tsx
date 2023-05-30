import Alert from "./components/Alert.tsx";
// import Button from "./components/Button.tsx";
import { useState } from "react";
import Button from "./components/Button/Button.tsx";
import Message from "./Message.tsx";
import ListGroup from "./components/ListGroup/ListGroup.tsx";
import "./App.css";
function App() {
  const items = ["New York", "san fran", "london", "china"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisitble, setAlert] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading={"cities"}
        onSelectItem={handleSelectItem}
      />
      <Message></Message>
      <Button
        color="primary"
        onClick={() => {
          setAlert(true);
        }}
      >
        my button
      </Button>
      {alertVisitble && <Alert setAlert={setAlert}> my alert</Alert>}
      {/* {
        <Alert>
          hello <span>eeee</span>
        </Alert>
      } */}
      {/* <Button
        onClick={() => {
          setAlert(true);
        }}
        color="secondary"
      >
        my button
      </Button>
      {alertVisitble && <Alert setAlert={setAlert}> my alert</Alert>} */}
    </div>
  );
}

export default App;
