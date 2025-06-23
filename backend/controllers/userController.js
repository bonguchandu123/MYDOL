import User from "../models/User.js";
import { clerkClient } from "@clerk/clerk-sdk-node";

export const updateUserBranchYear = async (req, res) => {
  try {
    const userId = req.auth.userId;
    console.log(userId)
    const { year, branch } = req.body;

    if (!year || !branch) {
      return res.status(400).json({ success: false, message: "Year and Branch are required." });
    }

    // Update MongoDB user
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { year, branch },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Update Clerk public_metadata
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        year,
        branch,
      },
    });

    res.status(200).json({
      success: true,
      message: "Year and branch updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Update error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
