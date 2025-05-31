import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="border-4 border-black bg-white shadow-neobrutalism p-6 rounded-xl">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug font-extrabold text-black drop-shadow-neobrutalism">
        <Link href={`/posts/${slug}`} className="hover:underline border-b-4 border-black">
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4 bg-yellow-100 border-2 border-black rounded-lg px-2 py-1 inline-block">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4 text-black bg-pink-100 border-2 border-black rounded-lg px-4 py-2">
        {excerpt}
      </p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
