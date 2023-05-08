import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";

interface NavbarProps {
  handleDrawer: () => void;
}

const Navbar = ({ handleDrawer }: NavbarProps) => {
  return (
    <>
      <div className="w-full bg-white flex flex-row justify-between p-2 items-center shadow-md">
        <div>
          <Bars3Icon
            className="h-6 w-6 text-black cursor-pointer"
            aria-hidden="true"
            onClick={() => handleDrawer()}
          />
        </div>
        {/* searchbar */}

        <div className="flex flex-row items-center gap-3">
          <BellIcon
            className="h-6 w-6 text-black  cursor-pointer"
            aria-hidden="true"
          />
          <p className="text-sm text-black">Alan Rodriguez</p>
          <img
            src={
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
            alt="Alan Rodriguez"
            className="bg-black  rounded-full"
            width={40}
            height={40}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
