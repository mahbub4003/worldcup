// import { createToken } from "@/utility/jwtutility";
import { PrismaClient } from "@prisma/client";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const reqBody = await req.json();

    const result = await prisma.team.create({
      data: reqBody,
    });

    return NextResponse.json({ status: "ok", data: result });
  } catch (e) {
    return NextResponse.json(
      {
        status: "fail",
        data: e,
      },
      { headers: { addTeamError: "fail" } }
    );
  }
}

export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const result = await prisma.team.findMany();
    return NextResponse.json({ status: "ok", data: result });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
export async function DELETE(req, res) {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  try {
    await prisma.team.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ status: "Delete success", id: parseInt(id) });
  } catch (e) {
    return NextResponse.json({ status: "Delete fail" });
  }
}
