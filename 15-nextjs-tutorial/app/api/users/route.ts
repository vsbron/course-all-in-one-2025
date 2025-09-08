import { fetchUsers, saveUser } from "@/utils/action";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  // // Get the search params from URL and pull the ID
  // const { searchParams } = new URL(req.url);
  // const id = searchParams.get("id");
  // console.log(id);

  // Simpler version with NextRequest
  console.log(req.url);
  console.log(req.nextUrl.searchParams.get("id"));

  // Get the users
  const users = await fetchUsers();

  // Return the users as a response
  return NextResponse.redirect(new URL("/", req.url));
};
