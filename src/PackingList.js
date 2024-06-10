import { Item } from "./Item";

export function PackingList({ items, onDeletedItem, update }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeletedItem={onDeletedItem}
            update={update}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
