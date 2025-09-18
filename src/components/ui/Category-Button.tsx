interface ButtonProps {
  id: string;
  children: string;
  isActive: boolean;
  onclick: (id: string) => void;
}

const CategoryButton = ({ children, id, onclick, isActive }: ButtonProps) => {
  return (
    <button
      onClick={() => onclick(id)}
      className={
        !isActive
          ? `text-[16px] border border-[#d8d7d7] bg-[#f2f2f2] rounded-[8px] px-3`
          : `rounded-[8px] px-3 text-[16px] border border-[#d8d7d7] text-white bg-black`
      }
    >
      {children}
    </button>
  );
};

export default CategoryButton;
