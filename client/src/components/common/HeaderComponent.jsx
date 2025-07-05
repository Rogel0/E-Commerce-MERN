import React from "react";
import { Input } from "@/components/ui/input";
import { ShoppingCart, CircleUserRound } from "lucide-react";

const HeaderComponent = () => {
  return (
    <header className="w-full flex justify-between items-center pt-8 px-46">
      <div className="flex items-center">
        <h1 className="font-extrabold text-5xl ">SHOP.CO</h1>
      </div>
      <nav>
        <ul className="flex justify-between items-center space-x-14 text-lg">
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="#">On Sale</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="/contact">Brand</a>
          </li>
        </ul>
      </nav>
      <div>
        <Input className="border-2 border-blue-500 rounded-lg w-140 h-12" />
      </div>
      <div className="flex items-center space-x-8">
        <ShoppingCart size={32} />
        <CircleUserRound size={32} />
      </div>
    </header>
  );
};

export default HeaderComponent;
