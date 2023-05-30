// import Alert from "./components/Alert.tsx";
// import Button from "./components/Button.tsx";
// import { useState } from "react";
import ListGroup from "./components/ListGroup/ListGroup.tsx";
import "./App.css";
function App() {
  const items = ["New York", "san fran", "london", "china"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  // const [alertVisitble, setAlert] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading={"cities"}
        onSelectItem={handleSelectItem}
      />
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
