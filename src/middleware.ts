import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware();
console.log("middleware running") //remember to delete this line when proj is complete
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};