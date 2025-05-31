import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center border-4 border-black bg-pink-200 rounded-xl px-6 py-2 shadow-neobrutalism">
      <Link href="/" className="hover:underline border-b-4 border-black">
        Blog
      </Link>
      .
    </h2>
  );
};

export default Header;
