export default function NewsCard({
  title,
  content,
  link,
}: {
  title: string;
  content: string;
  link: string;
}) {
  return (
    <div className="border bg-white p-5 rounded-md flex flex-col justify-between">
      <div>
        <h2 className="text-base font-semibold text-black">{title}</h2>
        <p className="text-neutral-700 font-light">{content}</p>
      </div>
      <a href={link} target="_blank" className="text-blue-400 underline">
        Read more
      </a>
    </div>
  );
}
