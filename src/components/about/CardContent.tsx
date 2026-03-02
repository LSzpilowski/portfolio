import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { WorkSection } from "./sections/WorkSection";
import { tabs } from "./data";

interface CardContentProps {
  activeTabIdx: number;
  isOnTop: boolean;
  tabIdx?: number;
}

export const CardContent = ({ activeTabIdx, isOnTop, tabIdx }: CardContentProps) => {
  const currentTabIdx = isOnTop ? activeTabIdx : (tabIdx ?? activeTabIdx);
  const tab = tabs[currentTabIdx];
  
  const renderContent = () => {
    switch (currentTabIdx) {
      case 0:
        return <AboutSection />;
      case 1:
        return <SkillsSection />;
      case 2:
        return <WorkSection />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-2xl font-bold mb-4 text-center flex-shrink-0">
        {tab.title}
      </h3>
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {renderContent()}
      </div>
    </div>
  );
};
