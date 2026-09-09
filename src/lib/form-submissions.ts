export type FormSubmissionValues = Record<string, unknown>;

export function formDataToObject(formData: FormData): FormSubmissionValues {
  const values: FormSubmissionValues = {};

  formData.forEach((value, key) => {
    const normalizedValue =
      typeof File !== 'undefined' && value instanceof File
        ? value.name
          ? {
              name: value.name,
              type: value.type,
              size: value.size,
            }
          : ''
        : value;

    const existingValue = values[key];

    if (existingValue === undefined) {
      values[key] = normalizedValue;
      return;
    }

    values[key] = Array.isArray(existingValue)
      ? [...existingValue, normalizedValue]
      : [existingValue, normalizedValue];
  });

  return values;
}

export async function submitFormToSheet(formName: string, values: object) {
  const response = await fetch('/api/form-submissions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      formName,
      values,
    }),
  });

  if (!response.ok) {
    const result = await response.json().catch(() => null);
    throw new Error(result?.error || 'Unable to submit form data.');
  }

  return response.json();
}
