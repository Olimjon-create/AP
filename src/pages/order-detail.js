import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Order() {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady && router.pathname === "/") {
      router.push("/order-detail");
    }
  }, [router.isReady]);

  const links = [
    {
      href: "/order-detail",
      label: "Orders",
      element: <Link to="/order-detail">Dashboard</Link>,
    },
    {
      href: "/orders",
      label: "Order List",
      element: <Link to="/orders">Order List</Link>,
    },
    {
      href: "#",
      label: "Order Detail",
      element: <Link to="#">Order Detail</Link>,
    },
    { href: "#", label: "Analytics", element: <Link to="#">Analytics</Link> },
    { href: "#", label: "Reviews", element: <Link to="#">Reviews</Link> },
    { href: "#", label: "Foods", element: <Link to="#">Foods</Link> },
    {
      href: "#",
      label: "Food Detail",
      element: <Link to="#">Food Detail</Link>,
    },
    {
      href: "/orders",
      label: "Customer Detail",
      element: <Link to="#">Customer Detail</Link>,
    },

    { href: "#", label: "Calendar", element: <Link to="#">Calendar</Link> },
    { href: "#", label: "Chat", element: <Link to="#">Chat</Link> },
    { href: "#", label: "Wallet", element: <Link to="#">Wallet</Link> },
  ];

  function OrdersList() {
    const [value, setValue] = useState(1);
  }

  // componentDidMount

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
