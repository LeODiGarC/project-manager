import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { userSchema } from "@/schemas/user";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = userSchema.parse(body);

    const user = await prisma.user.create({ data: parsed });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}