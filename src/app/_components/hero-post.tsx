import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section className="border-4 border-black bg-pink-200 shadow-neobrutalism p-8 rounded-xl">
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight font-extrabold text-black drop-shadow-neobrutalism">
            <Link href={`/posts/${slug}`} className="hover:underline border-b-4 border-black">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg bg-white border-2 border-black rounded-lg px-2 py-1 inline-block shadow-neobrutalism">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4 text-black bg-white border-2 border-black rounded-lg px-4 py-2 shadow-neobrutalism">
            {excerpt}
          </p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
