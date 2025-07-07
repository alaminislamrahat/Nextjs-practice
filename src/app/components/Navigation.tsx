"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const Navigation = () => {
    const path = usePathname()
    return (
        <div>
            <nav className="flex justify-center gap-10">
                <Link className={path === '/' ?"text-xl text-purple-500" : "font-bold"} href="/">Home</Link>
            <Link className={path === '/about' ?"text-xl text-purple-500" : "font-bold"} href="/about">About</Link>
            <Link className={path.startsWith('/products/1')?"text-xl text-purple-500" : "font-bold"} href="/products/1">product</Link>
            </nav>
        </div>
    );
};

export default Navigation;