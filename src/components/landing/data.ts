import {
  FileX,
  UserX,
  MailX,
  SearchX,
  BadgeX,
  Languages,
  UserPlus,
  Upload,
  Sparkles,
  Rocket,
  ListChecks,
  FileText,
  PenLine,
  Target,
  ClipboardCheck,
  Map,
  Users,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const problems: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: FileX, title: "Incomplete documents", text: "Missing papers cause instant rejections and lost time." },
  { icon: UserX, title: "Weak, unprofessional CVs", text: "German employers expect a specific format you don't know." },
  { icon: MailX, title: "Generic motivation letters", text: "Copy-paste letters get ignored by Ausbildung companies." },
  { icon: SearchX, title: "Wrong programs", text: "Not knowing which Ausbildung fits your profile wastes applications." },
  { icon: BadgeX, title: "Expensive agencies", text: "Thousands of euros with zero guarantees or transparency." },
  { icon: Languages, title: "Confusing visa & language", text: "B1/B2, blocked accounts, embassy steps — overwhelming alone." },
];

export const steps: { icon: LucideIcon; step: string; title: string; text: string }[] = [
  { icon: UserPlus, step: "01", title: "Create Your Profile", text: "Tell us your background, goals, and German level in minutes." },
  { icon: Upload, step: "02", title: "Upload Documents & Info", text: "Securely add your CV, certificates and details — we organize everything." },
  { icon: Sparkles, step: "03", title: "Get Personalized Guidance", text: "Experts + AI optimize your CV, letters, and program matches." },
  { icon: Rocket, step: "04", title: "Apply with Confidence", text: "Submit strong applications and track every step to approval." },
];

export const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ListChecks, title: "Smart Document Checklist", text: "Auto-generated list tailored to your exact situation — never miss a paper." },
  { icon: FileText, title: "Expert CV Optimization", text: "AI + advisors craft a CV that meets German Ausbildung standards." },
  { icon: PenLine, title: "Motivation Letter Studio", text: "Write and refine letters that companies actually want to read." },
  { icon: Target, title: "Ausbildung Matcher", text: "Find programs and companies that fit your profile and goals." },
  { icon: ClipboardCheck, title: "Full Application Review", text: "Every application checked by experts before you submit." },
  { icon: Map, title: "Personalized Roadmap", text: "A clear timeline so you always know your next step." },
  { icon: Users, title: "Expert Mentorship", text: "Guidance from former Ausbildung students and advisors." },
  { icon: ShieldCheck, title: "Visa & Interview Prep", text: "Mock interviews and visa support to remove the stress." },
];

export const timeline = [
  { title: "Choose Program", text: "Match with the right Ausbildung for your goals." },
  { title: "Prepare Documents", text: "CV, letters & certificates — German-ready." },
  { title: "Submit Applications", text: "Apply to vetted companies with confidence." },
  { title: "Interviews", text: "Prepare and ace your video & phone interviews." },
  { title: "Visa Approval", text: "Get visa-ready with step-by-step guidance." },
  { title: "Move to Germany", text: "Start your paid training and new life. 🇩🇪" },
];

export const stats = [
  { to: 500, suffix: "+", label: "Students Assisted" },
  { to: 1000, suffix: "+", label: "Applications Reviewed" },
  { to: 95, suffix: "%", label: "Success Rate" },
  { to: 4.9, suffix: "/5", label: "Average Rating", decimals: 1 },
];

export const faqs = [
  {
    q: "What is an Ausbildung exactly?",
    a: "An Ausbildung is a paid vocational training in Germany combining hands-on work with classroom learning. You earn a salary while training (typically €900–€1,300/month) and finish with a recognized qualification and strong job prospects.",
  },
  {
    q: "What German level do I need?",
    a: "Most programs require B1, and some require B2. Don't worry — we help you plan your language path and build a strong application even while you're still improving your German.",
  },
  {
    q: "How much does the platform cost?",
    a: "We offer three transparent plans (see Pricing). They cost a fraction of traditional agencies — with no hidden fees and clear deliverables at every step.",
  },
  {
    q: "How long does the whole process take?",
    a: "It varies by program and your readiness, but most students move from profile creation to submitted applications within 4–10 weeks, with visa timelines depending on the embassy.",
  },
  {
    q: "Do you guarantee I'll get accepted?",
    a: "No honest service can guarantee acceptance, but our proven process and expert reviews dramatically improve your chances — our students see a 95% application success rate.",
  },
  {
    q: "Do you help with the visa and moving?",
    a: "Yes. Our Premium plan includes visa documentation guidance, interview preparation, and step-by-step support all the way to your move to Germany.",
  },
];

export const pricing = [
  {
    name: "Starter",
    price: "€49",
    tagline: "Get organized & started",
    features: [
      "Smart document checklist",
      "Basic CV review",
      "Ausbildung program guide",
      "Community access",
    ],
    cta: "Start with Starter",
    popular: false,
  },
  {
    name: "Professional",
    price: "€149",
    tagline: "The complete application toolkit",
    features: [
      "Everything in Starter",
      "Full CV optimization (German standard)",
      "Motivation letter writing & review",
      "Full application review",
      "Priority expert review",
      "Personalized roadmap",
    ],
    cta: "Choose Professional",
    popular: true,
  },
  {
    name: "Premium",
    price: "€349",
    tagline: "Personal advisor, hand-held",
    features: [
      "Everything in Professional",
      "Dedicated personal advisor",
      "Interview preparation & mock calls",
      "Visa & embassy support",
      "Guaranteed application strategy",
      "Priority WhatsApp support",
    ],
    cta: "Go Premium",
    popular: false,
  },
];