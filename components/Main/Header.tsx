import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
export default function Header() {
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Image src="/here.png" alt="Logo" width={70} height={50} />
      </Toolbar>
    </React.Fragment>
  );
}
