const formIds = {
  franchise: process.env.FORMSPARK_FRANCHISE_FORM_ID,
  contact: process.env.FORMSPARK_CONTACT_FORM_ID,
} as const;

export async function POST(request: Request, context: RouteContext<"/api/forms/[formId]">) {
  const { formId: formType } = await context.params;
  const formId = formIds[formType as keyof typeof formIds];

  if (!formId) {
    return Response.json({ error: "Unknown form." }, { status: 404 });
  }

  try {
    const formData = await request.formData();
    const payload = Object.fromEntries(formData.entries());
    const formsparkResponse = await fetch(`https://submit-form.com/${formId}`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!formsparkResponse.ok) {
      return Response.json({ error: "Form service rejected the submission." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Form service is temporarily unavailable." }, { status: 502 });
  }
}
