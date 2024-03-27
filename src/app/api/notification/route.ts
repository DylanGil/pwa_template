import { NextRequest, NextResponse } from "next/server";
import webPush from "web-push";

webPush.setVapidDetails(
  `mailto:${process.env.WEB_PUSH_EMAIL}`,
  process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY || "",
  process.env.NEXT_PUBLIC_WEB_PUSH_PRIVATE_KEY || ""
);

const POST = async (req: NextRequest) => {
  const { subscription } = await req.json();

  const result = await webPush.sendNotification(
    subscription,
    JSON.stringify({
      title: "Hello Web Push",
      message: "Your web push notification is here!"
    })
  );
  console.log(result);

  return NextResponse.json(result);
};

export { POST };
