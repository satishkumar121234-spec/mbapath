export interface CollegeProfile {
  id: string;
  name: string;
  type: "IIM" | "IIT" | "Private" | "University";
  tier: "Elite" | "Tier1" | "Tier2";
  percentile: {
    general: {
      dream: number;
      target: number;
      safe: number;
    };
  };
}

export const colleges: CollegeProfile[] = [
  // Elite IIMs
  {
    id: "iim-ahmedabad",
    name: "IIM Ahmedabad",
    type: "IIM",
    tier: "Elite",
    percentile: {
      general: { dream: 99.2, target: 99.5, safe: 99.8 },
    },
  },
  {
    id: "iim-bangalore",
    name: "IIM Bangalore",
    type: "IIM",
    tier: "Elite",
    percentile: {
      general: { dream: 99.1, target: 99.4, safe: 99.7 },
    },
  },
  {
    id: "iim-calcutta",
    name: "IIM Calcutta",
    type: "IIM",
    tier: "Elite",
    percentile: {
      general: { dream: 99.2, target: 99.5, safe: 99.8 },
    },
  },

  // Top IIMs
  {
    id: "iim-lucknow",
    name: "IIM Lucknow",
    type: "IIM",
    tier: "Tier1",
    percentile: {
      general: { dream: 98.5, target: 97.0, safe: 95.0 },
    },
  },
  {
    id: "iim-kozhikode",
    name: "IIM Kozhikode",
    type: "IIM",
    tier: "Tier1",
    percentile: {
      general: { dream: 98.3, target: 96.8, safe: 94.5 },
    },
  },
  {
    id: "iim-indore",
    name: "IIM Indore",
    type: "IIM",
    tier: "Tier1",
    percentile: {
      general: { dream: 98.0, target: 96.5, safe: 94.0 },
    },
  },

  // Elite non-IIMs
  {
    id: "fms-delhi",
    name: "FMS Delhi",
    type: "University",
    tier: "Elite",
    percentile: {
      general: { dream: 99.0, target: 99.3, safe: 99.6 },
    },
  },
  {
    id: "spjimr-mumbai",
    name: "SPJIMR Mumbai",
    type: "Private",
    tier: "Elite",
    percentile: {
      general: { dream: 98.5, target: 99.0, safe: 99.4 },
    },
  },

  // Tier-1 private schools
  {
    id: "mdi-gurgaon",
    name: "MDI Gurgaon",
    type: "Private",
    tier: "Tier1",
    percentile: {
      general: { dream: 97.0, target: 94.0, safe: 90.0 },
    },
  },
  {
    id: "iift-delhi",
    name: "IIFT Delhi",
    type: "University",
    tier: "Tier1",
    percentile: {
      general: { dream: 96.5, target: 93.5, safe: 89.0 },
    },
  },

  // IIT schools
  {
    id: "iit-bombay-sjmsom",
    name: "IIT Bombay (SJMSOM)",
    type: "IIT",
    tier: "Tier1",
    percentile: {
      general: { dream: 98.0, target: 95.5, safe: 92.0 },
    },
  },
  {
    id: "iit-delhi-dms",
    name: "IIT Delhi (DMS)",
    type: "IIT",
    tier: "Tier1",
    percentile: {
      general: { dream: 97.5, target: 95.0, safe: 91.5 },
    },
  },
  {
    id: "iit-kharagpur-vgsom",
    name: "IIT Kharagpur (VGSoM)",
    type: "IIT",
    tier: "Tier1",
    percentile: {
      general: { dream: 96.5, target: 93.5, safe: 89.5 },
    },
  },

  // Strong Tier-2 options
  {
    id: "imt-ghaziabad",
    name: "IMT Ghaziabad",
    type: "Private",
    tier: "Tier2",
    percentile: {
      general: { dream: 94.0, target: 90.0, safe: 85.0 },
    },
  },
  {
    id: "imi-new-delhi",
    name: "IMI New Delhi",
    type: "Private",
    tier: "Tier2",
    percentile: {
      general: { dream: 93.0, target: 88.0, safe: 83.0 },
    },
  },
  {
    id: "tapmi-manipal",
    name: "TAPMI Manipal",
    type: "Private",
    tier: "Tier2",
    percentile: {
      general: { dream: 92.0, target: 87.0, safe: 82.0 },
    },
  },
];