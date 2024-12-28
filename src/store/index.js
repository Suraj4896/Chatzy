import { create } from "zustand";
import { createAuthSlice } from "./slices/auth-slice";
import { createChatSlice } from "./slices/chat-slice";

// Define the store correctly with set and get
export const useAppStore = create((set, get) => ({
    ...createAuthSlice(set), // Pass set only for auth
    ...createChatSlice(set, get), // Pass set and get for chat
}));
