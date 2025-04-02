import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const router = useRouter();

  const links = [
    {
      href: "/customers",
      label: "Dashboard",
      image: "home1.png",
    },
    {
      href: "/orders",
      label: "Order List",
      image: "threo.png",
    },
    {
      href: "#",
      label: "Order Detail",
      image: "Detail.png",
    },
    { href: "#", label: "Customer", image: "CustomerContanct.png" },
    { href: "#", label: "Analytics", image: "Analistik.png" },
    { href: "#", label: "Reviews", image: "CustomerPen.png" },
    { href: "#", label: "Foods", image: "cupboard.png" },
    {
      href: "#",
      label: "Food Detail",
      image: "Details.png",
    },
    { href: "#", label: "Customer Detail", image: "small-contact.png" },
    { href: "#", label: "Calendar", image: "Calendar.png" },
    { href: "#", label: "Chat", image: "Chat.png" },
    { href: "#", label: "Walllet", image: "other-icon.png" },
  ];

  return (
    <div>
      <div style={{ padding: "10px 20px," }}>
        <h1 style={{ fontSize: "48px", color: "#000" }}>Sedap.</h1>
        <h3 style={{ fontSize: "18px", color: "#B9BBBD" }}>
          Modern Admin Dashboard
        </h3>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {links.map(({ href, label, image }) => (
          <Link key={label} href={href} passHref={href !== "#"}>
            <div
              style={{
                background: router.pathname === href ? "red" : "transparent",
                padding: "10px",
                textDecoration: "none",
                color: "black",
                marginBottom: "5px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={image}
                alt={label}
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                }}
              />
              {label}
            </div>
          </Link>
        ))}
      </div>

      <div className="named" style={{ marginTop: "20px" }}>
        <h2 style={{ fontSize: "13px", color: "#969BA0" }}>
          Sedap Restaurant Admin Dashboard <br /> © 2020 All Rights Reserved
        </h2>
        <h3 style={{ fontSize: "14px", color: "#969BA0" }}>
          Made with ❤ by Peterdraw
        </h3>
      </div>
    </div>
  );
}
