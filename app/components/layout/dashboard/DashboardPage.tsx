import Header from "./parts/Header";
import Analytics from "./parts/Analytics";
import RecentSurveys from "./parts/RecentSurveys";
import RecentResponses from "./parts/RecentResponses";
import TopBarMenu from "./parts/TopBarMenu";

const DashboardPage = () => {
  return (
    <div>
      <TopBarMenu showMiddleNavigation />
      <div className="max-w-[1300px] px-4 m-auto">
        <Header />
        <Analytics />
        <RecentSurveys />
        <RecentResponses />
      </div>
    </div>
  );
};

export default DashboardPage;
