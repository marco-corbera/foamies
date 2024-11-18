import { twMerge } from "tailwind-merge";
import type { Size } from "@/types";

type Type = "h1" | "h2" | "h3" | "h4" | "p" | "span";
type Weight = "light" | "normal" | "semibold" | "bold" | "extrabold" | "black";

interface Props {
  weight?: Weight;
  uppercase?: boolean;
  italic?: boolean;
  size?: Size;
  type?: Type;
  children: string | React.ReactNode;
  className?: string;
}

const types: Record<Type, string> = {
  h1: "font-bold text-3xl md:text-4xl leading-10 md:leading-11",
  h2: "font-extrabold text-2xl md:text-3xl leading-7 md:leading-9",
  h3: "font-semibold text-xl md:text-2xl leading-5 md:leading-8",
  h4: "font-semibold text-xl md:text-2xl md:leading-8 leading-6 tracking-[0.35rem] md:tracking-[0.5rem]",
  p: "leading-normal text-md",
  span: "leading-none",
};

const fontWeight: Record<Weight, string> = {
  light: "font-light",
  normal: "font-normal",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

const textSize: Record<Size, string> = {
  xs: "text-xs leading-1",
  sm: "text-sm leading-2",
  md: "text-md leading-3",
  lg: "text-lg leading-4",
  xl: "text-xl leading-4",
  "2xl": "text-2xl leading-7",
  "3xl": "text-3xl leading-10",
  "4xl": "text-4xl leading-11",
};

const Text = ({
  weight,
  uppercase = false,
  italic = false,
  size,
  children,
  type = "p",
  className = "",
}: Props) => {
  const Tag = type;

  const classes = twMerge(
    types[type],
    weight ? fontWeight[weight] : "",
    size && textSize[size],
    uppercase ? "uppercase" : "",
    italic ? "italic" : "",
    "col-span-full",
    "text-left",
    className,
  );
  return <Tag className={classes}>{children}</Tag>;
};

export const H1 = (props: Props) => <Text {...props} type="h1" />;
export const H2 = (props: Props) => <Text {...props} type="h2" />;
export const H3 = (props: Props) => <Text {...props} type="h3" />;
export const H4 = (props: Props) => <Text {...props} type="h4" />;
export const P = (props: Props) => <Text {...props} type="p" />;
export const Span = (props: Props) => <Text {...props} type="span" />;

export default Text;
