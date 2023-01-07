import { HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
const navigation = [{ name: "Home", href: "/", icon: HomeIcon, current: true }];

function classNames(...classes: {}[]) {
  return classes.filter(Boolean).join(" ");
}
interface Props {
  children: React.ReactElement;
}
const Layout = ({ children }: Props) => {
  const router = useRouter();

  return (
    <>
      <div>
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col"></div>

        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <div
            className="font-medium text-lg px-6 py-5 cursor-pointer"
            onClick={() => router.push("/")}
          >
            {" "}
            Product App
          </div>
        </div>
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
};
export default Layout;
