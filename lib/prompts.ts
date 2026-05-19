export function assignmentPrompt(question: string) {
  return `
Act as a professional academic writer.

Write a fully humanized assignment answer for the following question:

${question}

Requirements:
- Natural student writing style
- Avoid robotic or AI words
- Use simple English
- Add realistic explanations
- No plagiarism
- Vary sentence lengths
- Use examples where needed
- Main headings: bold and underlined
- Subheadings: underlined
- Professional tone
- Include APA 7th references with working links
- Maximum 3000 words
  `;
}
