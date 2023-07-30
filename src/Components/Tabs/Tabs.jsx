import "./Tabs.css";
export default function Tabs() {
  return (
    <div className="flex justify-around border-gray-600 border-solid border-b ">
      <span className="pb-2.5 w-24 text-center transition-all">All</span>
      <span className="pb-2.5 w-24 text-center transition-all">Active</span>
      <span className="pb-2.5 w-24 text-center transition-all">Completed</span>
    </div>
  );
}
