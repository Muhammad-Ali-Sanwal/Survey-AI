import SubscriptionCard from "./parts/SubscriptionCards";
import BillingHistory from "./parts/BillingHistory";
import TopBarMenu from "../dashboard/parts/TopBarMenu";
const SubscriptionPage = () => {
  return (
    <div>
      <div>
        <TopBarMenu />
      </div>
      <div className="px-[20px] md:px-[70px] lg:px-[135px]">
        <SubscriptionCard />
        <BillingHistory />
      </div>
    </div>
  );
};

export default SubscriptionPage;
