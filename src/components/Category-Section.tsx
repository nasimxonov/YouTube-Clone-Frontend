import { useEffect } from "react";
import CategoryButton from "./ui/Category-Button";
import { useGetCategories } from "../hooks/requests/useGetCategories";
import { useCategoryStore } from "../store/useCategoryStore";

const CategorySection = () => {
  const { data } = useGetCategories();
  const { categories, activeCategoryId, setCategories, setActiveCategory } =
    useCategoryStore();

  useEffect(() => {
    if (data) {
      const formatted = [
        { id: "all", name: "All" },
        ...data.data.data.map((item: any) => ({
          id: item.id,
          name: item.title,
        })),
      ];
      setCategories(formatted);
    }
  }, [data, setCategories]);

  return (
    <div className="flex z-10 items-center gap-2 overflow-x-auto no-scrollbar">
      {categories.map((item) => (
        <CategoryButton
          key={item.id}
          id={item.id}
          isActive={item.id === activeCategoryId}
          onclick={setActiveCategory}
        >
          {item.name}
        </CategoryButton>
      ))}
    </div>
  );
};

export default CategorySection;
