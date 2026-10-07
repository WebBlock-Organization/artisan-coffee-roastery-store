import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const tenantId = process.env.NEXT_PUBLIC_TENANT_ID;
    if (!tenantId) {
      return NextResponse.json(
        { error: "Tenant ID environment variable is missing" },
        { status: 400 }
      );
    }

    const setting = await prisma.siteSetting.findUnique({
      where: {
        tenantId: tenantId,
      },
    });

    return NextResponse.json(setting || {});
  } catch (error) {
    console.error("Error fetching settings:", error);
    return NextResponse.json(
      { error: "Internal Server Error fetching site settings" },
      { status: 500 }
    );
  }
}
