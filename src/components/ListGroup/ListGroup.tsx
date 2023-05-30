import { useState } from "react";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(prop) => {
    return prop.active ? "blue" : "none";
  }};
`;

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(1);

  // const handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item found</p>}
      <List>
        {items.map((item, index) => {
          return (
            <Li
              // className={
              //   selectedIndex === index
              //     ? "list-group-item active"
              //     : "list-group-item"
              // }
              active={index === selectedIndex}
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </Li>
          );
        })}
      </List>
    </>
  );
}
export default ListGroup;
