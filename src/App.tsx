import Alert from "./components/Alert.tsx";
// import Button from "./components/Button.tsx";
import { useState } from "react";
import Button from "./components/Button/Button.tsx";
import Message from "./Message.tsx";
import ListGroup from "./components/ListGroup/ListGroup.tsx";
import "./App.css";
import ExpandableText from "./ExpandableText.tsx";
import Form from "./Form.tsx";
import categories from "./expense-tracker/categories.ts";

import ExpenseFilter from "./expense-tracker/components/ExpenseFilter.tsx";
import ExpenseList from "./expense-tracker/components/ExpenseList.tsx";
import ExpenseForm from "./expense-tracker/components/ExpenseForm.tsx";

function App() {
  // const items = ["New York", "san fran", "london", "china"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  // const [alertVisitble, setAlert] = useState(false);

  const [expenses, setExpenses] = useState([
    { id: 1, description: "saa", amount: 10, category: "utility" },
    { id: 2, description: "sada", amount: 20, category: "groceries" },
    { id: 3, description: "sda", amount: 30, category: "utility" },
    { id: 4, description: "sadaa", amount: 40, category: "utility" },
  ]);

  const [selectCategory, SetSelectCategory] = useState("");

  const visibleExpenses = selectCategory
    ? expenses.filter((e) => e.category === selectCategory)
    : expenses;

  return (
    <div>
      <div>
        <ExpenseForm
          mb-5
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>
      <br></br>
      <ExpenseFilter
        onSelectCategory={(e) => {
          SetSelectCategory(e);
        }}
      ></ExpenseFilter>
      {/* <Form></Form>
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
      {alertVisitble && <Alert setAlert={setAlert}> my alert</Alert>} */}
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
      {/* <ExpandableText>
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
      </ExpandableText> */}
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => {
          setExpenses(expenses.filter((e) => e.id !== id));
        }}
      ></ExpenseList>
    </div>
  );
}

export default App;
