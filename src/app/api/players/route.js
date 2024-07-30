import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

//add players informations........
export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const reqBody = await req.json();
    const result = await prisma.player.create({
      data: {
        ...reqBody,
      },
    });

    return NextResponse.json({ status: "ok", data: result });
  } catch (e) {
    console.log(e.toString());
    return NextResponse.json({ status: "fail", data: e });
  }
}

//update players information.......

export async function PATCH(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  try {
    const reqBody = await req.json();
    const result = await prisma.player.update({
      where: { id: parseInt(id) },
      data: {
        ...reqBody,
      },
    });

    return NextResponse.json({ status: "ok", data: result });
  } catch (e) {
    console.log(e.toString());
    return NextResponse.json({ status: "fail", data: e });
  }
}

//get players informations............

export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const result = await prisma.player.findMany();
    return NextResponse.json({ status: "ok", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

//delete players profile....
export async function DELETE(req, res) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  try {
    await prisma.player.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ status: "Delete success", id: parseInt(id) });
  } catch (e) {
    return NextResponse.json({ status: "Delete fail" });
  }
}
