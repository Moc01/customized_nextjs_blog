import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left border-4 border-black bg-green-200 rounded-xl px-6 py-2 shadow-neobrutalism text-black drop-shadow-neobrutalism">
      {children}
    </h1>
  );
}
