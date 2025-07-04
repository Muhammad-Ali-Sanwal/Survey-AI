import { createBrowserRouter, Navigate } from "react-router-dom";
import SignInPage from "~/components/layout/auth/signin/SignInPage";
import NotFound from "./components/NotFound";
import DetailedReport from "./components/layout/dashboard/parts/SurveyDetailedReport/DetailedReport";
import ResponseDetails from "./components/layout/dashboard/parts/ResponseDetails/ResponseDetails";
import SurveyViaChat from "./routes/SurveyViaChat";
import VerifyEmail from "./components/layout/auth/VerifyEmail";
import EmailVerified from "./components/layout/auth/EmailVerified";
import ForgotPassword from "./components/layout/auth/ForgotPassword/ForgotPassword";
import VarificationCode from "./components/layout/auth/ForgotPassword/VarificationCode";
import NewPassword from "./components/layout/auth/ForgotPassword/NewPassword";
import ResetSuccessfull from "./components/layout/auth/ForgotPassword/ResetSuccessfull";
import SignUp from "~/components/layout/auth/SignUp";
import PostSignupOptions from "./components/layout/PostSignupOptions/PostSignupOptions";
import SettingsPage from "./components/layout/settings/settings.";
import SubscriptionPage from "./components/layout/subscription/Subscription";
import PaymentPage from "./components/layout/payment/PaymentPage";
import SubscriptionPalnsPage from "./components/layout/subscription/SubscriptionPlans";
import DashboardPage from "./components/layout/dashboard/DashboardPage";
import AllSurveysPage from "./components/layout/dashboard/AllSurveys";
import PricingSatisfactionSurvey from "./components/layout/dashboard/parts/PricingSatisfactionSurvey";
import SurveyBuilderPage from "./components/layout/SurveyBuilder/SurveyBuilder";
import CreateSurveyPage from "./components/layout/CreateSurveyByTextAndVoice/CreateSurvey";
import SurvayFinished from "./components/layout/CreateSurveyByTextAndVoice/SurvayFinished";
import SurveyViaCall from "./components/layout/CreateSurveyByTextAndVoice/SurveyViaCall";

const routes = [
  {
    path: "/",
    element: <Navigate to="/sign-up" replace />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
  },
  {
    path: "/email-verified",
    element: <EmailVerified />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/verify-code",
    element: <VarificationCode />,
  },
  {
    path: "/reset-password",
    element: <NewPassword />,
  },
  {
    path: "/reset-successfull",
    element: <ResetSuccessfull />,
  },
  {
    path: "/lets-start",
    element: <PostSignupOptions />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/subscription",
    element: <SubscriptionPage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/subscription-plans",
    element: <SubscriptionPalnsPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/all-surveys",
    element: <AllSurveysPage />,
  },
  {
    path: "/all-surveys/pricingSurvay",
    element: <PricingSatisfactionSurvey />,
  },
  {
    path: "/all-surveys/pricingSurvay/detailed-report",
    element: <DetailedReport />,
  },
  {
    path: "/all-surveys/pricingSurvay/detailed-report/response-details",
    element: <ResponseDetails />,
  },
  {
    path: "/survey-builder",
    element: <SurveyBuilderPage />,
  },
  {
    path: "/survey",
    element: <CreateSurveyPage />,
  },
  {
    path: "/survey/chat",
    element: <SurveyViaChat />,
  },
  {
    path: "/survey/call",
    element: <SurveyViaCall />,
  },
  {
    path: "/survey-finished",
    element: <SurvayFinished />,
  },
];
// Add 404 route
routes.push({
  path: "*",
  element: <NotFound />,
});

export default createBrowserRouter(routes);
