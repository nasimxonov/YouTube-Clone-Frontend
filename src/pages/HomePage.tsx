import CategorySection from "../components/Category-Section";
import Showcase from "../components/Showcase";
const HomePage = () => {
  return (
    <main>
      <div className="category-section w-full h-[40px]">
        <CategorySection />
      </div>

      <div className="showcase pr-2">
        <Showcase />
      </div>
    </main>
  );
};

export default HomePage;
