import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Order() {
  const router = useRouter();
  const [value, setValue] = useState(1);

  const links = [
    {
      href: "/order-detail",
      label: "Orders",
      element: <Link href="/order-detail">Dashboard</Link>,
    },
    {
      href: "/orders",
      label: "Order List",
      element: <Link href="/orders">Order List</Link>,
    },
    {
      href: "#",
      label: "Order Detail",
      element: <Link href="#">Order Detail</Link>,
    },
    { href: "#", label: "Analytics", element: <Link href="#">Analytics</Link> },
    { href: "#", label: "Reviews", element: <Link href="#">Reviews</Link> },
    { href: "#", label: "Foods", element: <Link href="#">Foods</Link> },
    {
      href: "#",
      label: "Food Detail",
      element: <Link href="#">Food Detail</Link>,
    },
    {
      href: "/orders",
      label: "Customer Detail",
      element: <Link href="#">Customer Detail</Link>,
    },
    { href: "#", label: "Calendar", element: <Link href="#">Calendar</Link> },
    { href: "#", label: "Chat", element: <Link href="#">Chat</Link> },
    { href: "#", label: "Wallet", element: <Link href="#">Wallet</Link> },
  ];

  useEffect(() => {
    setValue(2);
  }, []);

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {links.map(({ href, label }) => (
          <Link key={label} href={href}>
            <div
              style={{
                background: router.pathname === href ? "red" : "transparent",
                padding: "10px",
                textDecoration: "none",
                color: "black",
                marginBottom: "5px",
                cursor: "pointer",
              }}
            >
              {label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
