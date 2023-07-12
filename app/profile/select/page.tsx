"use client";
import React, { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
} from "@mui/material";
import { ExpandMore, Person } from "@mui/icons-material";
import { setHeader } from "@/utils";
import { ProfileType } from "@/types/profile";
import Link from "next/link";

export default function ProfilesSelectPage() {
  const [profiles, setProfiles] = React.useState([] as ProfileType[]);
  const loadProfiles = () => {
    const headers = setHeader();
    fetch("/api/profiles", { method: "GET", headers })
      .then((res) => res.ok && res.json())
      .then((data) => data instanceof Array && setProfiles(data));
  };
  console.log(profiles);
  const reloadProfiles = useCallback(loadProfiles, [setProfiles]);
  useEffect(loadProfiles, [setProfiles]);
  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4" gutterBottom>
        Choose Profile
      </Typography>
      {profiles.map((profile) => (
        <ProfileAcoordion key={profile.id} profile={profile} />
      ))}
      <ProfileCreateAccordion reloadProfiles={reloadProfiles} />
    </Container>
  );
}

function ProfileAcoordion({
  profile: { id, profname, information },
}: {
  profile: ProfileType;
}) {
  const { replace } = useRouter();
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: [
              "action",
              "inherit",
              "primary",
              "secondary",
              "error",
              "info",
              "success",
              "warning",
            ][Math.floor(Math.random() * 8)],
          }}
          onClick={() =>
            fetch(`/api/profiles/as/${id}`, {
              headers: setHeader(),
            })
              .then((res) => {
                if (res.ok) return res.json();
              })
              .then(({ access }) => {
                localStorage.setItem("access", access); // TODO: 쿠키로 바꾸기
                replace("/feed");
              })
          }
        >
          <Person sx={{ width: 32, height: 32 }} />
        </Avatar>
        <Typography>
          {profname && profname.length < 10
            ? profname
            : profname && profname.slice(0, 10) + "..."}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{information}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

function ProfileCreateAccordion({
  reloadProfiles: loadProfiles,
}: {
  reloadProfiles: () => void;
}) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      profname: formData.get("profname"),
      information: formData.get("information"),
    };
    const res = await fetch("/api/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      loadProfiles();
      form.reset();
    }
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel-last-content"
        id="panel-last-header"
      >
        <Typography>Add profile</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="profname"
            label="Profile Name"
            name="profname"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="information"
            label="Information"
            type="information"
            id="information"
            autoComplete="current-information"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
