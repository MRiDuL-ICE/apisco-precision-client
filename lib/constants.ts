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
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Key Services", href: "/key-services" },
  { label: "Product", href: "/product" },
  { label: "Technical Support", href: "/technical-support" },
  { label: "Sourcing Solutions", href: "/sourcing-solutions" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    number: "01",
    label: "Representation",
    title: "Bridging global manufacturers to pharmaceutical industry",
    text: "Acting as the authorised local partner for overseas API, excipient and packaging manufacturers — handling enquiries, quotations and order flow into the pharmaceutical industry.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    label: "Sourcing",
    title: "Product sourcing",
    text: "Identifying and qualifying suppliers against a customer's specification and requirements, and ensuring compliance with pharmacopoeial standard, before a sample is ever requested.",
    icon: Boxes,
  },
  {
    number: "03",
    label: "Documentation",
    title: "Regulatory documentation support",
    text: "Compiling and forwarding US-DMFs, CEP, DMF and COA, MOA, MSDS etc, and coordinating dossier submissions to Regulatory Bodies.",
    icon: FileCheck2,
  },
  {
    number: "04",
    label: "Logistics",
    title: "Import & logistics coordination",
    text: "Managing LC documentation, HS classification, customs clearance and shippment tracking from origin port to buyer's warehouse.",
    icon: PackageCheck,
  },
  {
    number: "05",
    label: "Quality",
    title: "Quality assurance & vendor qualification",
    text: "We verify that commercial supply match the approved sample, and we facilitate vendor audit per customer's request.",
    icon: ClipboardCheck,
  },
] as const;

export const PRODUCT_CATEGORIES = [
  {
    number: "D.01",
    mark: "API",
    title: "Active Pharmaceutical Ingredients",
    text: "Quality-assured APIs backed by DMF support, documentation and impurity profile, ready for your formulation and registration needs.",
    icon: FlaskConical,
  },
  {
    number: "D.02",
    mark: "EX",
    title: "Pharmaceutical Excipients",
    text: "Functional excipients from trusted manufacturers matched to your formulation, for solid and liquid dosage forms.",
    icon: Layers3,
  },
  {
    number: "D.03",
    mark: "PK",
    title: "Packaging Materials",
    text: "Primary and secondary packaging materials that match your approved specs, from qualified suppliers.",
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
    "real-time support from the manufacturer's technical contact whenever inspectors need answers.",
  ],
  [
    "Dossier variation support",
    "ongoing support for variations, renewals and regulator queries across the full product lifecycle.",
  ],
] as const;

export const SOLUTION_ITEMS = [
  {
    title: "Alternate-source identification",
    text: "early warnings on Price shifts, shortages, regulatory changes and supply risks across every principal we represent, so buyers are never caught off guard.",
    tag: "Supply Continuity",
  },
  {
    title: "Sample-to-commercial pathway",
    text: "samples, technical evaluation and pricing managed end to end, before you commit to a commercial order.",
    tag: "Process",
  },
  {
    title: "Custom sourcing briefs",
    text: "finding qualified suppliers for hard to find molecules or single-source molecules with no established supply route.",
    tag: "Sourcing",
  },
  {
    title: "Price and lead-time monitoring",
    text: "whether you're a manufacturer seeking representation, a buyer with a sourcing brief, or following up on an existing order, email is the quickest way to reach us",
    tag: "Monitoring",
  },
] as const;
