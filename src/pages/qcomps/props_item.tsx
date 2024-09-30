import { ItemProps } from "@/types/item";

function Strikethrough({ text }: { text: string }) {
    return (
        <del>{text}</del>
    );
}

function Item({ name, isPacked }: ItemProps) {
    return (
        <li>
            {isPacked ? <Strikethrough text={name} /> : name}
        </li>
    );
}

export default function PackingList() {
  return (
    <section>
      <h1>My Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Laptop"
        />
        <Item
          isPacked={true}
          name="Chargers"
        />
        <Item
          isPacked={false}
          name="Socks"
        />
      </ul>
    </section>
  );
}
