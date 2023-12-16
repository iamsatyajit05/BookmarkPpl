import { getServerSession } from "next-auth";
import authOptions from "@/lib/options";
import { redirect } from "next/navigation";
import UserProfile from "./UserProfile";

export default async function Header() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/api/auth/signin");
    }

    return (
        <div className="border-b-2 border-gray-800">
            <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
                <div className="text-xl font-bold">Bookmark Ppl</div>
                <UserProfile session={session} />
            </div>
        </div>
    )
}