import React, { FC } from "react";
import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import { Launch } from "@mui/icons-material";

interface MyUrlFieldProps {
  source: string;
}

export const MyUrlField: FC<MyUrlFieldProps> = ({ source }) => {
  const record = useRecordContext();
  console.log("record", record, "source", source);
  if (!record) return null;

  return (
    <Link
      href={record[source] ?? "https://www.google.com/"}
      target="_blank"
      sx={{ textDecoration: "none" }}
    >
      {record[source] ?? "https://www.google.com/"}
      <Launch sx={{ fontSize: 15, ml: 1 }} />
    </Link>
  );
};

export const MyImageField: FC<MyUrlFieldProps> = ({ source }) => {
  const record = useRecordContext();
  console.log("record", record, "source", source);
  if (!record) return null;

  return (
    <img
      width={40}
      src={
        record[source] ??
        "https://i.pinimg.com/236x/6c/cd/c7/6ccdc7f235cc3018448266f22b1e09be.jpg"
      }
      alt={`${record.name}'s photo`}
    />
  );
};
