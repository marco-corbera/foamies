import { Card } from "@/components/molecules/card";
import { PaidBadge, NotPaidBadge } from "../orderStatus";
import { P, H3 } from "@/components/atoms/text";

export interface IRoundProps {
  name: string;
  quantity: number;
  price: number;
}

interface OrderCardProps {
  title: string;
  subtotal: number;
  taxes: number;
  discounts: number;
  roundItems: IRoundProps[];
  paid: boolean;
}

const OrderCard = ({
  title,
  subtotal,
  taxes,
  discounts,
  roundItems,
  paid,
}: OrderCardProps) => {
  const badge = paid ? <PaidBadge /> : <NotPaidBadge />;

  const info = (
    <div>
      <P>Subtotal: ${subtotal}</P>
      <P>Taxes: ${taxes}</P>
      <P>Discounts: ${discounts}</P>
    </div>
  );

  const items = roundItems.map((item, index) => (
    <div key={index}>
      <H3>Round {index + 1}</H3>
      <div key={index}>
        <P>
          {item.name} x{item.quantity}
        </P>
        {item.price && <P>Price: ${item.price}</P>}
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
