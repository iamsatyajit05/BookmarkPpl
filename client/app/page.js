import { getServerSession } from "next-auth";
import authOptions from "@/lib/options";
import { redirect } from "next/navigation";
import UserProfile from "./component/UserProfile";

import Header from "./component/Header"
import MainBody from "./component/MainBody";

export default async function Home() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin");
    }
    
    return (
        <>
            <Header children={<UserProfile session={session} />} />
            <MainBody email={session.user.email} />
        </>
    )
}
