// Stubbed letter provider. Do not modify this file.
//
// In production this would call a postal/print API. Here it just validates
// the request, waits a little, logs, and returns a fake reference, which is
// enough to wire a Letter node up to "send" something.

export type LetterRecipient = {
  name: string;
  addressLines: string[]; // e.g. ["12 Main Street", "Apt 4", "Ranelagh", "Dublin 6"]
  eircode?: string;
};

export type SendLetterRequest = {
  recipient: LetterRecipient;
  subject: string;
  body: string; // final rendered text, placeholders already filled in
  reference?: string; // your own id, e.g. the matter reference
};

export type SendLetterResult = {
  providerId: string;
  status: "queued";
  queuedAt: string;
};

export class LetterProviderError extends Error {}

export async function sendLetter(
  request: SendLetterRequest,
): Promise<SendLetterResult> {
  if (!request.recipient.name.trim()) {
    throw new LetterProviderError("Recipient name is required");
  }
  if (request.recipient.addressLines.filter((l) => l.trim()).length < 2) {
    throw new LetterProviderError("At least two address lines are required");
  }
  if (!request.body.trim()) {
    throw new LetterProviderError("Letter body is empty");
  }
  if (/\{\{\s*\w+\s*\}\}/.test(request.body)) {
    throw new LetterProviderError("Letter body still contains unfilled placeholders");
  }

  await new Promise((resolve) => setTimeout(resolve, 300));

  const result: SendLetterResult = {
    providerId: `ltr_${Math.random().toString(36).slice(2, 12)}`,
    status: "queued",
    queuedAt: new Date().toISOString(),
  };
  console.log(
    `[letter-provider] queued ${result.providerId} to ${request.recipient.name}` +
      (request.reference ? ` (ref ${request.reference})` : ""),
  );
  return result;
}
