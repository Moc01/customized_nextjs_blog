import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b-4 border-black bg-yellow-100 shadow-neobrutalism", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-yellow-100 border-black text-black": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm font-extrabold">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-pink-600 duration-200 transition-colors font-bold"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-pink-600 duration-200 transition-colors font-bold"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
