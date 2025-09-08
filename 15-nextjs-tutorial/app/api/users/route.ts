import { fetchUsers, saveUser } from "@/utils/action";
import { NextRequest, NextResponse } from "next/server";

// GET request handler
export const GET = async (req: NextRequest) => {
  // // Get the search params from URL and pull the ID
  // const { searchParams } = new URL(req.url);
  // const id = searchParams.get("id");
  // console.log(id);

  // Simpler version with NextRequest
  console.log(req.url);
  console.log(req.nextUrl.searchParams.get("id"));

  // Get the users and return them
  const users = await fetchUsers();
  return Response.json({ users });

  // Return redirect
  // return NextResponse.redirect(new URL("/", req.url));
};

// POST request handler
export const POST = async (req: Request) => {
  // Get the user details and create new object
  const user = await req.json();
  const newUser = { ...user, id: Date.now().toString() };

  // Save the user
  await saveUser(newUser);

  // Return success message
  return Response.json({ msg: "User created" });
};
