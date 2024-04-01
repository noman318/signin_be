import crypto from "crypto";

export function hashPassword(sPassword: string) {
  const hashedPassword = crypto
    .createHash("sha1")
    .update(sPassword)
    .digest("hex");
  const hashedPasswordHex = crypto
    .createHash("sha1")
    .update(Buffer.from(hashedPassword, "hex"))
    .digest("hex");

  const hashedPasswordUppercase = "*" + hashedPasswordHex.toUpperCase();
  return hashedPasswordUppercase;
}
