import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();x
  return NextResponse.json(users);
}
