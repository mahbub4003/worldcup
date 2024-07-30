import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    const result = await prisma.player.findMany({ where: { id } });
    if (result.length == 1) {
      return NextResponse.json({ status: "ok", data: result });
    } else {
      return NextResponse.json({ status: "fail", data: "do not found" });
    }
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
