import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const reqBody = await req.json();
    const result = await prisma.indevisualPlayingRecords.create({
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

//update indevisualPlayingRecords information.......

export async function PATCH(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  console.log("route", id);

  try {
    const reqBody = await req.json();
    const result = await prisma.indevisualPlayingRecords.update({
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
    const result = await prisma.indevisualPlayingRecords.findMany();
    return NextResponse.json({ status: "ok", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}

export async function DELETE(req, res) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  try {
    await prisma.indevisualPlayingRecords.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ status: "Delete success", id: parseInt(id) });
  } catch (e) {
    return NextResponse.json({ status: "Delete fail" });
  }
}
