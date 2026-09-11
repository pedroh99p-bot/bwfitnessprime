export type PlanCode = "START" | "PRIME" | "PERFORMANCE";
export type Goal = "emagrecer" | "ganhar_massa" | "condicionamento" | "saude";
export type Frequency = "2x" | "3x" | "4x_plus";
export type Preference = "acompanhamento" | "autonomia";
export interface TrainingAnswers {
  goal?: Goal;
  frequency?: Frequency;
  preference?: Preference;
}
export interface WizardOption {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
export interface WizardQuestion {
  key: keyof TrainingAnswers;
  title: string;
  options: WizardOption[];
}
export interface PlanItem {
  code: PlanCode;
  description: string;
  benefits: string[];
  price: number | null;
}
export interface Specialist {
  id: string;
  name: string;
  role: string;
  badges: string[];
  summary: string;
  cref: string | null;
  photo: string | null;
}
export interface FacilityCategory {
  id: string;
  name: string;
  iconName: string;
  objectives: string[];
  description: string;
  photo: string | null;
}
export interface Review {
  id: string;
  text: string | null;
  author: string | null;
}
export interface FAQItem {
  question: string;
  answer: string;
}
