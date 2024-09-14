// import { createToken } from "@/utility/jwtutility";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const reqBody = await req.json();
    const result = await prisma.schedule.create({
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

//update schedules information.......

export async function PATCH(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  const reqBody = await req.json();

  try {
    const result = await prisma.schedule.update({
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

export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    // const prisma = new PrismaClient();
    const result = await prisma.schedule.findMany();
    return NextResponse.json({ status: "ok", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
export async function DELETE(req, res) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  // const prisma = new PrismaClient();
  try {
    await prisma.schedule.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ status: "Delete success", id: parseInt(id) });
  } catch (e) {
    return NextResponse.json({ status: "Delete fail" });
  }
}
