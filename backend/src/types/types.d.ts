
import "express-session";

declare module "express-session" {
    interface SessionData {
        senderId?: string; // Use `?` to make it optional
    }
}
