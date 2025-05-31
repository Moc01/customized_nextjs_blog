import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 border-4 border-black bg-yellow-200 shadow-neobrutalism p-8 rounded-xl">
      <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-tight md:pr-8 text-black drop-shadow-neobrutalism">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 text-black bg-white border-2 border-black rounded-lg px-4 py-2 shadow-neobrutalism">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-pink-600 duration-200 transition-colors font-bold"
        >
          Next.js
        </a>{" "}
        and {CMS_NAME}.
      </h4>
    </section>
  );
}
