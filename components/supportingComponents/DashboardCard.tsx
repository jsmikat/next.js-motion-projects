import { BarChart3, TrendingUp, Users } from "lucide-react";

export const DashboardCard = () => {
  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 font-sans shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
            Overview
          </p>
          <h2 className="mt-1 text-2xl font-medium text-neutral-900">
            Dashboard
          </h2>
        </div>
        <div className="flex size-10 items-center justify-center rounded-full bg-neutral-100">
          <BarChart3 size={18} className="text-neutral-600" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="rounded-xl bg-neutral-50 p-4">
          <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-violet-100">
            <TrendingUp size={14} className="text-violet-600" />
          </div>
          <p className="text-2xl font-semibold text-neutral-900">2.4k</p>
          <p className="mt-1 text-xs text-neutral-400">Visitors</p>
        </div>

        <div className="rounded-xl bg-neutral-50 p-4">
          <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-blue-100">
            <Users size={14} className="text-blue-600" />
          </div>
          <p className="text-2xl font-semibold text-neutral-900">184</p>
          <p className="mt-1 text-xs text-neutral-400">Users</p>
        </div>

        <div className="rounded-xl bg-neutral-50 p-4">
          <div className="mb-3 flex size-8 items-center justify-center rounded-lg bg-emerald-100">
            <BarChart3 size={14} className="text-emerald-600" />
          </div>
          <p className="text-2xl font-semibold text-neutral-900">94%</p>
          <p className="mt-1 text-xs text-neutral-400">Growth</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between text-xs text-neutral-400">
          <span>Activity</span>
          <span>Last 7 days</span>
        </div>
        <div className="mt-4 flex items-end justify-between gap-2">
          {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-neutral-200 transition-colors hover:bg-violet-400"
              style={{ height: `${height}px` }}
            />
          ))}
        </div>
        <div className="mt-3 flex justify-between text-[10px] text-neutral-300">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
};
