export type MessageRegisterPayload = {
  content: string;
  receiverId: string;
};

export type MessageUpdatePayload = {
  content?: string;
  status?: "delivered" | "read";
};