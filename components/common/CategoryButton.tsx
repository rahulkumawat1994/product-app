const CategoryButton: React.FC<{
  name: string;
  onClick: (value: string) => void;
  value: string;
}> = ({ name, onClick, value }) => {
  return (
    <button
      className={`px-4 py-1 rounded-sm border capitalize  ${
        value === name ? "bg-slate-200" : "border-gray-400"
      }`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};
export default CategoryButton;
