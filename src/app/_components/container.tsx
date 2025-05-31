type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5 border-4 border-black rounded-2xl bg-white shadow-neobrutalism">{children}</div>;
};

export default Container;
