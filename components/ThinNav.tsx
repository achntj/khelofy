import Link from "next/link";

export default function ThinNav() {
  return (
    <div className="uppercase flex bg-blue-800 space-x-4 text-[#bdd0f2] tracking-widest text-xs p-2">
      <Link href="/">Khelofy.com</Link>
      <Link href="/news/cricket">Cricket</Link>
      <Link href="/news/football">Football</Link>
      <Link href="/news/americanfootball">American Football</Link>
      <Link href="/news/basketball">Basketball</Link>
      <Link href="/news/golf">Golf</Link>
      <Link href="/news/hockey">hockey</Link>
      <Link href="/news/baseball">Baseball</Link>
      <Link href="/news/tennis">Tennis</Link>
      <Link href="/news/badminton">Badminton</Link>
      <Link href="/news/f1">F1</Link>
      <Link href="/news/motogp">MotoGP</Link>
    </div>
  );
}
