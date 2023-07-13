import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-blue-600 sticky top-0">
      <div className="uppercase flex justify-between text-white tracking-widest text-lg px-2 py-4">
        <div>
          <Link href="/">Khelofy.com</Link>
        </div>
        <div className="space-x-4 flex">
          <Link href="/news/hockey">Home</Link>
          <Link href="/news/cricket">Schedule</Link>
          <Link href="/news/football">Coaching</Link>
          <Link href="/news/americanfootball">Shop</Link>
          <Link href="/news/basketball">Fantasy</Link>
          <Link href="/news/golf">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
