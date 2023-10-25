const Navbar = () => {
  return (
    <div className="w-full border-b py-3.5 bg-green-900">
      <div className="w-[85%] mx-auto flex justify-between items-center text-white">
        <div className="flex gap-x-10 items-center">
          <h1 className="font-bold text-4xl">Reeco</h1>
          <p>Store</p>
          <p>Orders</p>
          <p>Analytics</p>
        </div>
        <div className="flex gap-x-16 items-center">
          <div className="mb-3 relative">
            <div className="absolute left-3 top-0">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-green-500 p-2 mt-2 ml-1 text-xs text-white">
                8
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 mt-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div className="flex relative group">
            <p>Hello, James</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 ml-2 mt-1.5 transform group-hover:-rotate-180 transition-transform duration-150"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
