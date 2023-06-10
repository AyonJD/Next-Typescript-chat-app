import Link from "next/link";
import { styled, Typography } from "@mui/material";
import Image from "next/image";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Image src="/images/logos/logo.png" alt="logo" height={50} width={50} priority />
      <Typography
        className="no_underline"
        variant="h5" textAlign="center" color="primary" ml={2}>
        Chat Now!
      </Typography>
    </LinkStyled>
  );
};

export default Logo;
