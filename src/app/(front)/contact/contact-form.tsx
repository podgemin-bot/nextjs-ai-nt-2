"use client";

import { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormValues } from "./form-schema";
import { submitContactForm } from "./actions";

type FormStatus = "idle" | "pending" | "success" | "send-error";

const labels = {
  name: "ชื่อ",
  email: "อีเมล",
  subject: "หัวข้อ",
  message: "ข้อความ",
};

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [sendError, setSendError] = useState("");
  const [, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setFormStatus("pending");
    setSendError("");

    startTransition(async () => {
      const result = await submitContactForm(data);

      if (result.status === "success") {
        form.reset();
        setFormStatus("success");
      } else {
        setSendError(result.message);
        setFormStatus("send-error");
      }
    });
  }

  const isPending = formStatus === "pending" || form.formState.isSubmitting;

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <FieldGroup>
          {/* Honeypot - hidden from humans, catches bots */}
          <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <Controller
              name="website"
              control={form.control}
              render={({ field }) => (
                <input id="contact-website" type="text" tabIndex={-1} autoComplete="off" {...field} />
              )}
            />
          </div>

          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="contact-name">{labels.name}</FieldLabel>
                <Input
                  {...field}
                  id="contact-name"
                  autoComplete="name"
                  aria-invalid={fieldState.invalid}
                  disabled={isPending}
                  placeholder="ชื่อของคุณ"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="contact-email">{labels.email}</FieldLabel>
                <Input
                  {...field}
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={fieldState.invalid}
                  disabled={isPending}
                  placeholder="you@example.com"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="subject"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="contact-subject">{labels.subject}</FieldLabel>
                <Input
                  {...field}
                  id="contact-subject"
                  aria-invalid={fieldState.invalid}
                  disabled={isPending}
                  placeholder="หัวข้อที่ต้องการติดต่อ"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="contact-message">{labels.message}</FieldLabel>
                <Textarea
                  {...field}
                  id="contact-message"
                  rows={5}
                  aria-invalid={fieldState.invalid}
                  disabled={isPending}
                  placeholder="พิมพ์ข้อความของคุณ"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />
        </FieldGroup>

        {formStatus === "success" && (
          <div
            role="status"
            className="mt-6 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
          >
            ส่งข้อความสำเร็จ ทีมงานจะติดต่อกลับโดยเร็วที่สุด
          </div>
        )}

        {formStatus === "send-error" && (
          <div
            role="alert"
            className="mt-6 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {sendError}
          </div>
        )}

        <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={isPending}>
          {isPending ? "กำลังส่ง..." : "ส่งข้อความ"}
        </Button>
      </form>
    </div>
  );
}