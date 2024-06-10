export function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>start adding element in your list</em>
      </p>
    );
  }
  const numitem = items.length;
  const numPcaked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPcaked / numitem) * 100);
  return (
    <footer className="stats">
      <em>
        You Have {numitem} Items In Your List , And You Already Packed{" "}
        {numPcaked} ({percentage}%)
      </em>
    </footer>
  );
}
