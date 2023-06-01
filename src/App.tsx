import Alert from "./components/Alert.tsx";
// import Button from "./components/Button.tsx";
import { useState } from "react";
import Button from "./components/Button/Button.tsx";
import Message from "./Message.tsx";
import ListGroup from "./components/ListGroup/ListGroup.tsx";
import "./App.css";
import ExpandableText from "./ExpandableText.tsx";
import Form from "./Form.tsx";
function App() {
  const items = ["New York", "san fran", "london", "china"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisitble, setAlert] = useState(false);
  return (
    <div>
      <Form></Form>
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
      <ExpandableText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        convallis lacus ut mauris tincidunt, vel cursus velit eleifend. Aliquam
        ultricies metus sit amet sollicitudin fermentum. Quisque accumsan dictum
        elit ac interdum. Nullam posuere faucibus purus in euismod. Curabitur
        nec lectus vitae felis volutpat laoreet. Vestibulum eu nibh enim. Sed ut
        nulla at enim gravida pellentesque vitae in purus. Phasellus tristique
        gravida nisl, a fringilla nisi viverra eu. Aliquam a massa quis nisi
        interdum eleifend. Donec dignissim urna et fringilla vehicula. Nunc
        lobortis sem a felis venenatis commodo. Integer non sem at dolor
        sagittis tristique eu in dui. Vivamus ullamcorper venenatis est, at
        fringilla elit rhoncus eu. Sed volutpat ex et dolor pharetra tristique.
        Aliquam erat volutpat. Ut commodo arcu et consectetur sagittis.
        Pellentesque interdum cursus lacinia. Phasellus consequat fringilla
        felis, ac eleifend arcu commodo non. Curabitur convallis augue in mauris
        cursus viverra. Integer quis nunc vestibulum, tempus justo ac, hendrerit
        nisl. Sed malesuada turpis risus, ac cursus enim congue at. Vestibulum
        eu tellus non justo ullamcorper eleifend eu in lectus. Nunc non ultrices
        diam. Suspendisse et leo commodo, cursus
      </ExpandableText>
    </div>
  );
}

export default App;
