import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handelAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeletedItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handelToggelItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItem} onDeletedItem={handelDeletedItem} />
      <PackingList
        items={items}
        onDeletedItem={handelDeletedItem}
        update={handelToggelItem}
      />
      <Stats items={items} />
    </div>
  );
}
