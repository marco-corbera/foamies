import { Card } from "@/components/molecules/card";
import { PaidBadge, NotPaidBadge } from "../orderStatus";
import { P, H3 } from "@/components/atoms/text";

export interface IRoundItemProps {
  name: string;
  quantity: number;
  price: number;
}

export interface IRoundProps {
  items: IRoundItemProps[];
}

export interface IOrderCardProps {
  title: string;
  subtotal: number;
  taxes: number;
  discounts: number;
  rounds: IRoundProps[];
  paid: boolean;
}

const OrderCard = ({
  title,
  subtotal,
  taxes,
  discounts,
  rounds,
  paid,
}: IOrderCardProps) => {
  const badge = paid ? <PaidBadge /> : <NotPaidBadge />;

  const info = (
    <div>
      <P>Subtotal: ${subtotal}</P>
      <P>Taxes: ${taxes}</P>
      <P>Discounts: ${discounts}</P>
    </div>
  );

  const items = rounds.map((round, index) => (
    <div key={index}>
      <H3>Round {index + 1}</H3>
      <div key={index} style={{ marginBottom: "8px" }}>
        {round.items.map((item, itemIndex) => (
          <div key={itemIndex}>
            <P>
              {item.name} x{item.quantity}
            </P>
            <P>Price per unit: ${item.price.toFixed(2)}</P>
          </div>
        ))}
        <div>
          <P>
            Round Total: $
            {round.items
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </P>
        </div>
      </div>
    </div>
  ));

  const footer = (
    <div>
      <P>Total: ${subtotal + taxes - discounts}</P>
    </div>
  );

  return (
    <Card
      title={title}
      badge={badge}
      info={info}
      items={items}
      footer={footer}
    />
  );
};

export default OrderCard;
