import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  w-full flex-col  justify-start  bg-[#050614] min-h-screen ">
      <div className=" w-full pt-5 pb-8 px-8">
        <h2 className=" text-white tracking-wider text-2xl font-bold ">
          WEE<span className=" text-primary-50">G</span>O
        </h2>
      </div>
      {children}
    </div>
  );
};

export default Layout;
