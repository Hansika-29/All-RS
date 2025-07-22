export default function Topbar() {
  return (
    <div className="p-4 bg-white border-b flex justify-between items-center">
      <h1 className="text-xl font-semibold text-primary">🎯 Recommender</h1>
      <div className="flex gap-4 items-center">
        <button className="text-sm px-2 py-1 rounded bg-accent">Light</button>
        <div className="rounded-full w-8 h-8 bg-primary text-white flex items-center justify-center">U</div>
      </div>
    </div>
  );
}
