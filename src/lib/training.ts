import { CONTACT_MESSAGES, WIZARD_QUESTIONS } from "@/config/siteContent";
import type { PlanCode, TrainingAnswers } from "@/types/content";

export function recommendPlan(answers: TrainingAnswers): PlanCode {
  // Conversation starter, never a medical prescription or confirmed commercial offer.
  if (answers.goal === "saude" || answers.frequency === "2x") return "START";
  if (
    answers.frequency === "4x_plus" &&
    answers.preference === "autonomia" &&
    (answers.goal === "ganhar_massa" || answers.goal === "condicionamento")
  )
    return "PERFORMANCE";
  return "PRIME";
}
export function answerLabels(answers: TrainingAnswers): string[] {
  return WIZARD_QUESTIONS.map(
    (q) =>
      q.options.find((o) => o.id === answers[q.key])?.title ||
      "Ainda não escolhido",
  );
}
export function recommendationMessage(answers: TrainingAnswers): string {
  const labels = answerLabels(answers);
  return `${CONTACT_MESSAGES.quiz}\n\nRecomendação: ${recommendPlan(answers)} (provisória)\nObjetivo: ${labels[0]}\nFrequência: ${labels[1]}\nPreferência: ${labels[2]}`;
}
export function calculateBMI(weight: number, height: number): number | null {
  if (
    !Number.isFinite(weight) ||
    !Number.isFinite(height) ||
    weight < 20 ||
    weight > 350 ||
    height < 100 ||
    height > 250
  )
    return null;
  return weight / (height / 100) ** 2;
}
