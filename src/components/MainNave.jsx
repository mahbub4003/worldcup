import Link from "next/link";

export default function MainNave() {
  return (
    <nav className="sm:w-[80%] w-[100%] ">
      <ul className="flex w-[60%] sm:w-[20%] space-x-16 m-auto text-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/schedule">Schedule</Link>
        </li>
        <li>
          <Link href="/teams">Teams</Link>
        </li>
      </ul>
    </nav>
  );
}
