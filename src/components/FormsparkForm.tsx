"use client";

import { FormEvent, ReactNode, useState } from "react";

type FormsparkFormProps = {
  children: ReactNode;
  className: string;
  formId: "franchise" | "contact";
};

export default function FormsparkForm({ children, className, formId }: FormsparkFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const response = await fetch(`/api/forms/${formId}`, {
      method: "POST",
      body: new FormData(form),
    }).catch(() => null);

    if (!response?.ok) {
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit} className={className} noValidate={status === "submitting"}>
      {children}
      <p className="sm:col-span-2 text-sm font-bold" aria-live="polite">
        {status === "submitting" && "Sending your message..."}
        {status === "success" && "Thanks! Your message has been sent."}
        {status === "error" && "We couldn’t send your message. Please try again or call us directly."}
      </p>
    </form>
  );
}
