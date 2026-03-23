import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { userSchema } from "@/schemas/user";

// GET: obtener un usuario por ID
export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: params.id },
      include: {
        memberships: true,
        boards: true,
        comments: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}

// PUT: actualizar un usuario por ID
export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const body = await req.json();
    const parsed = userSchema.parse(body);

    const updatedUser = await prisma.user.update({
      where: { id: params.id },
      data: parsed,
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    );
  }
}

// DELETE: eliminar un usuario por ID
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    await prisma.user.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
