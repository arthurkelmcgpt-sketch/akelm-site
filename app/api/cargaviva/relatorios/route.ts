import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const sanitizeFileSegment = (value: FormDataEntryValue | null) => {
  const rawValue = typeof value === "string" ? value : "";
  const normalized = rawValue
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized || "sem-identificacao";
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "Arquivo PDF não enviado." },
        { status: 400 },
      );
    }

    const name = sanitizeFileSegment(formData.get("name"));
    const city = sanitizeFileSegment(formData.get("city"));
    const profile = sanitizeFileSegment(formData.get("profile"));
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const pathname = `relatorios-cargaviva/${timestamp}-${profile}-${name}-${city}.pdf`;

    const blob = await put(pathname, file, {
      access: "private",
      addRandomSuffix: true,
      contentType: "application/pdf",
    });

    return NextResponse.json({
      pathname: blob.pathname,
      url: blob.url,
    });
  } catch (error) {
    console.error("Erro ao salvar relatório no Vercel Blob", error);

    return NextResponse.json(
      { error: "Não foi possível salvar o relatório." },
      { status: 500 },
    );
  }
}
