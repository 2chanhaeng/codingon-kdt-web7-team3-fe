"use client";

import { Chip, SvgIcon } from "@mui/joy";
import { Add, Remove } from "@mui/icons-material";
import config from "@/config";
import { setHeader } from "@/utils";
import { useEffect, useState } from "react";

export default function SubscribeButton({ id }: { id: string }) {
  const [subscribed, setSubscribed] = useState(false);
  useEffect(() => {
    fetch(`${config.api}/tag/${id}/subscribed`, {
      headers: setHeader(),
    })
      .then((res) => res.json())
      .then((res) => setSubscribed(!!res));
  }, [id]);
  const onClick = async () => {
    try {
      const res = await fetch(`${config.api}/tag/${id}/toggle`, {
        headers: setHeader(),
      });
      const toggled = await res.json();
      console.log(toggled);
      setSubscribed(toggled);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Chip onClick={onClick} variant={subscribed ? "outlined" : "solid"}>
      <SvgIcon>{subscribed ? <Remove /> : <Add />}</SvgIcon>
      Subscribe
    </Chip>
  );
}
