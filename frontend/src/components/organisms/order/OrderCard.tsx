import { FaBeer, FaClock, FaReceipt } from "react-icons/fa";
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
    <div className="rounded-lg bg-slate-200 p-4 grid grid-cols-3 gap-4">
      <div className="flex flex-col">
        <P>Subtotal:</P>
        <P weight="semibold" size="xl">
          ${subtotal}
        </P>
      </div>
      <div className="flex flex-col">
        <P>Taxes:</P>
        <P weight="semibold" size="xl">
          ${taxes}
        </P>
      </div>
      <div className="flex flex-col">
        <P>Discounts:</P>
        <P weight="semibold" size="xl" className="text-green-600">
          ${discounts}
        </P>
      </div>
    </div>
  );

  const items = rounds.map((round, index) => (
    <div key={index} className="rounded-lg border p-4 my-8">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center gap-2">
          <FaClock className="h-5 w-5 text-muted-foreground" />
          <H3>Round {index + 1}</H3>
        </div>
        <P weight="semibold">
          $
          {round.items
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
        </P>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          {round.items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <FaBeer className="h-4 w-4" />
                <span>
                  {item.name} x{item.quantity}
                </span>
              </div>
              <p>${item.price.toFixed(2)} c/u</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ));

  const footer = (
    <div className="flex items-center justify-between pb-4 mx-2">
      <div className="flex items-center gap-2">
        <FaReceipt className="h-5 w-5 text-muted-foreground" />
        <P weight="bold" size="2xl">
          Total
        </P>
      </div>
      <P weight="bold" size="2xl">
        ${subtotal + taxes - discounts}
      </P>
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
