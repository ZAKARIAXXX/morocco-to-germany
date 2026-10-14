import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Resend } from "resend";

import { getServerConfig } from "../config.server";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  germanLevel: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const submitContact = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    const config = getServerConfig();

    if (!config.resendApiKey) {
      console.warn("RESEND_API_KEY not set — logging submission instead");
      console.log("Contact form submission:", JSON.stringify(data, null, 2));
      return { success: true };
    }

    const resend = new Resend(config.resendApiKey);

    const germanLevelLabel = data.germanLevel ? `\nGerman Level: ${data.germanLevel}` : "";
    const interestLabel = data.interest ? `\nArea of Interest: ${data.interest}` : "";
    const phoneLabel = data.phone ? `\nPhone: ${data.phone}` : "";

    const html = [
      "<h2>New Ausbildung Bridge Enquiry</h2>",
      `<p><strong>Name:</strong> ${data.name}</p>`,
      `<p><strong>Email:</strong> ${data.email}</p>`,
      phoneLabel ? `<p>${phoneLabel}</p>` : "",
      germanLevelLabel ? `<p>${germanLevelLabel}</p>` : "",
      interestLabel ? `<p>${interestLabel}</p>` : "",
      "<hr />",
      `<p><strong>Message:</strong></p>`,
      `<p>${data.message.replace(/\n/g, "<br />")}</p>`,
    ]
      .filter(Boolean)
      .join("\n");

    const { error } = await resend.emails.send({
      from: config.resendFrom,
      to: config.contactEmail,
      subject: `New enquiry from ${data.name}`,
      html,
      replyTo: data.email,
    });

    if (error) {
      console.error("Resend send failed:", error);
      throw new Error("Failed to send enquiry");
    }

    return { success: true };
  });
