import {
  Boxes,
  ClipboardCheck,
  FileCheck2,
  FlaskConical,
  Layers3,
  Microscope,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

export const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Key Services", id: "services" },
  { label: "Product", id: "product" },
  { label: "Technical Support", id: "support" },
  { label: "Sourcing Solutions", id: "solutions" },
  { label: "Contact", id: "contact" },
] as const;

export const SERVICES = [
  {
    number: "01",
    label: "Representation",
    title: "Indenting & principal representation",
    text: "Acting as the authorised local agent for overseas API, excipient and packaging manufacturers — handling enquiries, quotations and order flow into the Bangladesh market.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    label: "Sourcing",
    title: "API & excipient sourcing",
    text: "Identifying and qualifying suppliers against a manufacturer's specification and pharmacopoeial standard, before a sample is ever requested.",
    icon: Boxes,
  },
  {
    number: "03",
    label: "Documentation",
    title: "Regulatory documentation support",
    text: "Compiling and forwarding DMFs, COAs, CEPs and MSDS, and coordinating dossier submissions to DGDA.",
    icon: FileCheck2,
  },
  {
    number: "04",
    label: "Logistics",
    title: "Import & logistics coordination",
    text: "Managing LC documentation, HS classification, customs clearance and freight scheduling from origin port to buyer's warehouse.",
    icon: PackageCheck,
  },
  {
    number: "05",
    label: "Quality",
    title: "Quality assurance & vendor qualification",
    text: "Vendor audits and batch-to-batch consistency checks, with sample-to-commercial verification before a principal is onboarded.",
    icon: ClipboardCheck,
  },
] as const;

export const PRODUCT_CATEGORIES = [
  {
    number: "D.01",
    mark: "API",
    title: "Active Pharmaceutical Ingredients",
    text: "Bulk drug substances sourced to BP / USP / EP specification, with COA and impurity profile carried through to the buyer.",
    icon: FlaskConical,
  },
  {
    number: "D.02",
    mark: "EX",
    title: "Pharmaceutical Excipients",
    text: "Binders, fillers, coating agents and disintegrants sourced for solid and liquid dosage manufacturing.",
    icon: Layers3,
  },
  {
    number: "D.03",
    mark: "PK",
    title: "Packaging Materials",
    text: "Blister foil, PVC / PVDC film and cartons sourced against a manufacturer's existing packaging specification.",
    icon: ShieldCheck,
  },
  {
    number: "D.04",
    mark: "RS",
    title: "Reference Standards & Impurities",
    text: "Certified reference standards and impurity markers for method validation and routine QC testing.",
    icon: Microscope,
  },
] as const;

export const SUPPORT_ITEMS = [
  [
    "Formulation & compatibility queries",
    "routed directly to the principal's technical team, with a documented response.",
  ],
  [
    "Batch documentation review",
    "every COA checked against pharmacopoeial limits before a shipment clears.",
  ],
  [
    "Audit-window coordination",
    "during WHO-GMP and DGDA inspections, keeping the principal's technical contact reachable.",
  ],
  [
    "Dossier variation support",
    "stability data and regulatory queries handled for existing submissions, not only new ones.",
  ],
] as const;

export const SOLUTION_ITEMS = [
  [
    "Alternate-source identification",
    "to protect supply continuity when a principal's capacity is constrained.",
  ],
  [
    "Sample-to-commercial pathway",
    "sample dispatch, technical evaluation and scale-up quotation before the first commercial order.",
  ],
  [
    "Custom sourcing briefs",
    "for hard-to-place or single-source molecules that don't have a standing supply line yet.",
  ],
  [
    "Price and lead-time monitoring",
    "across represented principals, flagged before it becomes the buyer's problem.",
  ],
] as const;
