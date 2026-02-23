import Sidebar from "../components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="">
        <Sidebar />
      </div>
      <div className="flex-1 p-10">{children}</div>
    </div>
  );
}
