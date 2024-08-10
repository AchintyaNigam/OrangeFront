"use client";
import React from "react";
import { useEffect, useState } from "react";
import { fetchTasks } from "@/pocketbase";

interface Task {
  id: string;
  status: string;
  remark1: string;
  remark2: string;
  remark3: string;
  remark4: string;
  remark5: string;
  remarkCust: string;
  modelID: string;
  inspectionDay: Date;
  location: string;
  timeOfInspection: Date;
  customerName: string;
  customerID: string;
  serialNo: string;
  serviceHours: string;
  customerNotes: string;
  created: Date;
  updated: Date;
  productImage: File;
}

const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      const records = await fetchTasks();
      setTasks(records as unknown as Task[]);
    };

    loadTasks();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-[]">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 border rounded-lg shadow-md bg-white"
          >
            <h2 className="text-xl font-semibold">{task.customerName}</h2>
            <p className="text-gray-600">Model: {task.modelID}</p>
            <p className="text-gray-600">Serial No: {task.serialNo}</p>
            <p className="text-gray-600">Location: {task.location}</p>
            <p className="text-gray-600">
              Inspection Day:{" "}
              {new Date(task.inspectionDay).toLocaleDateString()}
            </p>
            <p className="text-gray-600">
              Time of Inspection:{" "}
              {new Date(task.timeOfInspection).toLocaleTimeString()}
            </p>
            <p className="text-gray-600">Service Hours: {task.serviceHours}</p>
            <p className="text-gray-600">
              Customer Notes: {task.customerNotes}
            </p>
            <p className="text-gray-600">Remark 1: {task.remark1}</p>
            <p className="text-gray-600">Remark 2: {task.remark2}</p>
            <p className="text-gray-600">Remark 3: {task.remark3}</p>
            <p className="text-gray-600">Remark 4: {task.remark4}</p>
            <p className="text-gray-600">Remark 5: {task.remark5}</p>
            <p className="text-gray-600">Custom Remark: {task.remarkCust}</p>
            <p className="text-gray-500">
              Created: {new Date(task.created).toLocaleString()}
            </p>
            <p className="text-gray-500">
              Updated: {new Date(task.updated).toLocaleString()}
            </p>
            <span
              className={`inline-block px-3 py-1 rounded-full text-white ${
                task.status === "completed" ? "bg-green-500" : "bg-yellow-500"
              }`}
            >
              {task.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
