import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();

  const links = [
    { href: "/customers", label: "Dashboard" },
    { href: "/orders", label: "Order List" },
    { href: "#", label: "Order Detail" },
    { href: "#", label: "Analytics" },
    { href: "#", label: "Reviews" },
    { href: "#", label: "Foods" },
    { href: "#", label: "Food Detail" },
    { href: "#", label: "Customer Detail" },
    { href: "#", label: "Calendar" },
    { href: "#", label: "Chat" },
    { href: "#", label: "Wallet" },
  ];

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {links.map(({ href, label }) => (
          <Link key={label} href={href} passHref={href !== "#"}>
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
