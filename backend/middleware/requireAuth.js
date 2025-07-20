import { getAuth } from "@clerk/express";

export const requireAuth = (req, res, next) => {
  const { userId } = getAuth(req);

  if (!userId) {
    return res.status(401).json({
      message: "Unauthorized. Please sign in.",
      redirect: "/sign-in", // optional frontend hint
    });
  }

  req.userId = userId; // Optional: attach to request
  next();
};
