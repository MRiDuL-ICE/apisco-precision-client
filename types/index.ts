export type NavItem = {
  letter: string;
  label: string;
  id: string;
};

export type ServiceItem = {
  number: string;
  label: string;
  title: string;
  text: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
};

export type ProductCategory = {
  number: string;
  mark: string;
  title: string;
  text: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
};
