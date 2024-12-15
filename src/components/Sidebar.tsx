import React from "react";

// Sidebar functional component definition
export default function Sidebar() {
  return (
    <>
      {/* Sidebar container */}
      <aside
        className="hidden bg-white border-r-2 top-0 left-0 w-full max-w-[300px] lg:flex flex-col py-6 px-4 overflow-auto"
      >
        {/* 
        This is a hidden sidebar for smaller screens (using "hidden" class), 
        but visible for large screens (using "lg:flex"). 
        It has a white background, a border on the right, 
        and a max width of 300px with padding for inner spacing. 
        The "overflow-auto" ensures scrollability if the content exceeds the sidebar height.
        */}

        {/* Sidebar content starts here */}
        <div className="mt-4">
          {/* 
          Adds a top margin to create space between the top of the sidebar 
          and the first element inside this container.
          */}
          <ul className="mt-2 flex flex-col gap-4 p-2">
            {/* 
            A vertical list container ("flex flex-col") with margin at the top, 
            gap between items, and padding around the entire list.
            */}

            {/* Section for "Type" filters */}
            <label htmlFor="" className="text-gray-500">
              Type
            </label>
            {/* 
            Label for the "Type" category of filters, styled with a gray color.
            */}

            {/* List item for the "Sports" checkbox filter */}
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px]  rounded transition-all"
              >
                <input type="checkbox" name="" id="" />Sports
              </a>
            </li>
            {/* Similar list items for other car types */}
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px]  rounded transition-all"
              >
                <input type="checkbox" name="" id="" />SUV
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px]  rounded transition-all"
              >
                <input type="checkbox" name="" id="" />MPV
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px]  rounded transition-all"
              >
                <input type="checkbox" name="" id="" />Home & Lifestyle
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px]  rounded transition-all"
              >
                <input type="checkbox" name="" id="" />Sedan
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px]  rounded transition-all"
              >
                <input type="checkbox" name="" id="" />Coupe
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px]  rounded transition-all"
              >
                <input type="checkbox" name="" id="" />Hatchback
              </a>
            </li>

            {/* Section for "Capacity" filters */}
            <label htmlFor="" className="text-gray-500">
              Capacity
            </label>
            {/* Label for the "Capacity" category */}
            <li>
              <a
                href="#"
                className="flex gap-2 text-gray-600 hover:text-black text-[15px]  rounded transition-all"
              >
                <input type="checkbox" name="" id="" />Groceries & Pets
              </a>
            </li>

            {/* Section for "Price" filter */}
            <label htmlFor="" className="text-gray-500">
              Price
            </label>
            {/* Label for the "Price" category */}
            <li>
              <input type="range" name="" id="" step={20} />
              {/* 
              A range slider input to allow users to adjust the price range, 
              stepping in increments of 20.
              */}
            </li>
            <span className="text-gray-500">Max. $100.00</span>
            {/* 
            Displays the maximum price value for the slider.
            */}
          </ul>
        </div>
      </aside>
    </>
  );
}
