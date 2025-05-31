import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-yellow-200 border-t-4 border-black shadow-neobrutalism">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-extrabold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 text-black drop-shadow-neobrutalism">
            Statically Generated with Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates"
              className="mx-3 bg-black hover:bg-white hover:text-black border-4 border-black text-white font-extrabold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0 rounded-lg shadow-neobrutalism"
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className="mx-3 font-extrabold hover:underline text-black"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
