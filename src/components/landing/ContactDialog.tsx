import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { submitContact } from "@/lib/api/contact.functions";
import { useContactForm } from "@/hooks/use-contact-form";
import { useLocale } from "@/lib/i18n/context";
import { WHATSAPP } from "./Navbar";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  germanLevel: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactValues = z.infer<typeof contactSchema>;

const germanLevels = [
  { value: "A1", key: "contact.levelA1" },
  { value: "A2", key: "contact.levelA2" },
  { value: "B1", key: "contact.levelB1" },
  { value: "B2", key: "contact.levelB2" },
  { value: "C1", key: "contact.levelC1" },
  { value: "unsure", key: "contact.levelUnsure" },
];

const interestAreas = [
  { value: "nursing", key: "contact.interestNursing" },
  { value: "it", key: "contact.interestIt" },
  { value: "engineering", key: "contact.interestEngineering" },
  { value: "business", key: "contact.interestBusiness" },
  { value: "hospitality", key: "contact.interestHospitality" },
  { value: "other", key: "contact.interestOther" },
];

export function ContactDialog() {
  const { open, setOpen } = useContactForm();
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      germanLevel: "",
      interest: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactValues) {
    try {
      await submitContact({ data: values });
      setSubmitted(true);
      toast(t("contact.toastSuccess"), {
        description: t("contact.toastDesc"),
        icon: <CheckCircle2 className="size-4 text-success" />,
      });
    } catch {
      toast.error(t("contact.toastError"));
    }
  }

  function handleClose(open: boolean) {
    setOpen(open);
    if (!open) {
      setTimeout(() => {
        form.reset();
        setSubmitted(false);
      }, 200);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{t("contact.title")}</DialogTitle>
          <DialogDescription>{t("contact.subtitle")}</DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center py-8 text-center">
            <div className="flex size-14 items-center justify-center rounded-full bg-success/15 text-success">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{t("contact.successTitle")}</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              {t("contact.successText")}
            </p>
            <div className="mt-6 flex gap-3">
              <Button variant="glass" onClick={() => handleClose(false)}>
                {t("contact.close")}
              </Button>
              <Button variant="whatsapp" asChild>
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" /> {t("contact.successChat")}
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.name")}</FormLabel>
                    <FormControl>
                      <Input placeholder={t("contact.namePlaceholder")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.email")}</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder={t("contact.emailPlaceholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.phone")}</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder={t("contact.phonePlaceholder")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="germanLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.germanLevel")}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t("contact.germanLevelPlaceholder")} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {germanLevels.map((lvl) => (
                            <SelectItem key={lvl.value} value={lvl.value}>
                              {t(lvl.key)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.interest")}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t("contact.interestPlaceholder")} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {interestAreas.map((area) => (
                            <SelectItem key={area.value} value={area.value}>
                              {t(area.key)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.message")}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={t("contact.messagePlaceholder")}
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:justify-end">
                <Button type="button" variant="glass" onClick={() => handleClose(false)}>
                  {t("contact.cancel")}
                </Button>
                <Button type="submit" variant="hero" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> {t("contact.sending")}
                    </>
                  ) : (
                    <>
                      <Send className="size-4" /> {t("contact.submit")}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
