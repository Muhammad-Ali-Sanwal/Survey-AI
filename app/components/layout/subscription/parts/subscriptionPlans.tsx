export type ISubscriptionPlans = {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  period: "month" | "year";
  monthlySurveysPerUser: number;
  yearlySurveysPerUser: number;
  isCurrent: boolean;
  monthlyResponsesCheck: number;
  yearlyResponsesCheck: number;
};

export const subscriptionPlans: ISubscriptionPlans[] = [
  {
    name: "Economy Fee",
    monthlyPrice: 0,
    yearlyPrice: 0,
    period: "month",
    isCurrent: true,
    monthlySurveysPerUser: 5,
    yearlySurveysPerUser: 60,
    monthlyResponsesCheck: 12,
    yearlyResponsesCheck: 144,
  },
  {
    name: "Normal Fee",
    monthlyPrice: 12,
    yearlyPrice: 1200,
    period: "month",
    isCurrent: false,
    monthlySurveysPerUser: 12,
    yearlySurveysPerUser: 144,
    monthlyResponsesCheck: 24,
    yearlyResponsesCheck: 288,
  },
  {
    name: "Higher Fee",
    monthlyPrice: 24,
    yearlyPrice: 2400,
    period: "month",
    isCurrent: false,
    yearlySurveysPerUser: 60,
    monthlySurveysPerUser: 720,
    monthlyResponsesCheck: 48,
    yearlyResponsesCheck: 576,
  },
  {
    name: "Custom Fee",
    monthlyPrice: 32,
    yearlyPrice: 3200,
    period: "month",
    isCurrent: false,
    monthlySurveysPerUser: 50,
    yearlySurveysPerUser: 600,
    monthlyResponsesCheck: 200,
    yearlyResponsesCheck: 2400,
  },
];

export type Plan = {
  planName: string;
  amount: string;
  purchaseDate: string;
  endDate: string;
  status: "Processing" | "Success";
};

export const BillingHistoryPlans: Plan[] = [
  {
    planName: "Starter Plan - Jun 2025",
    amount: "$19.00",
    purchaseDate: "01-06-2025",
    endDate: "31-06-2025",
    status: "Processing",
  },
  {
    planName: "Starter Plan - Jun 2025",
    amount: "$19.00",
    purchaseDate: "01-06-2025",
    endDate: "31-06-2025",
    status: "Success",
  },
  {
    planName: "Starter Plan - Jun 2025",
    amount: "$19.00",
    purchaseDate: "01-06-2025",
    endDate: "31-06-2025",
    status: "Success",
  },
  {
    planName: "Starter Plan - Jun 2025",
    amount: "$19.00",
    purchaseDate: "01-06-2025",
    endDate: "31-06-2025",
    status: "Success",
  },
];
