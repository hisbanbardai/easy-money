import { prisma as db } from "@repo/db/client";
import { NextResponse } from "next/server";

export const GET = async function () {
  await db.user.create({
    data: {
      email: "hello",
      name: "world",
    },
  });

  return NextResponse.json({
    message: "user created",
  });
};
