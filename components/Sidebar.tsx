import React from "react";
import { Inter, Khula } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const khula = Khula({ subsets: ['latin'], weight: '800' });

export type Task = {
  task: string;
  dateCreated: string;
};

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  data: Task[];
  loading: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, data, loading }) => {
  if (loading) {
    return (
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#FFF5D7] text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-20`}
      >
        <button
          className="absolute top-4 right-4 text-gray-800 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="p-6">
          <h2 className={`${khula.className} text-xl font-semibold`}>Task History</h2>
          <p>Loading tasks...</p>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#FFF5D7] text-black transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-20`}
      >
        <button
          className="absolute top-4 right-4 text-gray-800 hover:text-white"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="p-6">
          <h2 className={`${khula.className} text-xl font-semibold`}>Task History</h2>
          <p>No tasks available.</p>
        </div>
      </div>
    );
  }

  const groupTasksByMonth = (tasks: Task[]) => {
    const grouped: Record<string, Task[]> = {};
  
    tasks.forEach((task) => {
      const date = new Date(task.dateCreated);
      const year = date.getUTCFullYear();
      const month = date.getUTCMonth();
      const monthLabel = `${year}-${String(month + 2).padStart(2, "0")}`;
  
      if (!grouped[monthLabel]) {
        grouped[monthLabel] = [];
      }
  
      grouped[monthLabel].push(task);
    });
  
    return grouped;
  };
  
  const groupedData = groupTasksByMonth(data);

  const formatMonth = (monthLabel: string) => {
    const date = new Date(`${monthLabel}-01`);
    return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(date);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#FFF5D7] text-black transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out shadow-lg z-20`}
    >
      <button
        className="absolute top-4 right-4 text-gray-800 hover:text-white"
        onClick={onClose}
      >
        ✕
      </button>
      <div className="p-6">
        <h2 className={`${khula.className} text-xl font-semibold`}>Task History</h2>
        <ul className="mt-4">
          {Object.keys(groupedData).map((month) => (
            <li key={month}>
              <h3 className="font-semibold mt-4">{formatMonth(month)}</h3>
              <ol className="mt-2 pl-2">
                {groupedData[month]
                  .sort((a, b) => new Date(a.dateCreated).getUTCDate() - new Date(b.dateCreated).getUTCDate())
                  .map((task, index) => (
                    <li key={index} className={`${inter.className} my-2`}>
                      <span className="text-sm text-black">
                        {new Date(task.dateCreated).getUTCDate()}.
                      </span>{" "}
                      {task.task}
                    </li>
                  ))}
              </ol>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;