import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady && router.pathname === "/") {
      router.push("/customers");
    }
  }, [router.isReady]);

  const links = [
    {
      href: "/customers",
      label: "Dashboard",
      element: <Link to="/customers">Dashboard</Link>,
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
      href: "#",
      label: "Customer Detail",
      element: <Link to="#">Customer Detail</Link>,
    },
    { href: "#", label: "Calendar", element: <Link to="#">Calendar</Link> },
    { href: "#", label: "Chat", element: <Link to="#">Chat</Link> },
    { href: "#", label: "Wallet", element: <Link to="#">Wallet</Link> },
  ];

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {links.map(({ href, label }) => (
          <Link key={label} href={href} passHref>
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
