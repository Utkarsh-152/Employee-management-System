import React, { useState } from 'react';
import { FiLogOut, FiCheckCircle, FiAlertCircle, FiClock, FiPlus } from 'react-icons/fi';

const EmployeeDashboard = ({ changeUser, data }) => {
  const [activeTab, setActiveTab] = useState('all');
  
  const filterTasks = (tasks, filter) => {
    switch(filter) {
      case 'active':
        return tasks.filter(task => task.active);
      case 'completed':
        return tasks.filter(task => task.completed);
      case 'failed':
        return tasks.filter(task => task.failed);
      case 'new':
        return tasks.filter(task => task.newTask);
      default:
        return tasks;
    }
  };

  const getStatusColor = (task) => {
    if (task.completed) return 'bg-green-100 text-green-800';
    if (task.failed) return 'bg-red-100 text-red-800';
    if (task.active) return 'bg-blue-100 text-blue-800';
    if (task.newTask) return 'bg-purple-100 text-purple-800';
    return 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (task) => {
    if (task.completed) return <FiCheckCircle className="w-5 h-5 text-green-600" />;
    if (task.failed) return <FiAlertCircle className="w-5 h-5 text-red-600" />;
    if (task.active) return <FiClock className="w-5 h-5 text-blue-600" />;
    if (task.newTask) return <FiPlus className="w-5 h-5 text-purple-600" />;
    return null;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome, {data.name}</h1>
              <p className="text-sm text-gray-500">{data.email}</p>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('loggedInUser');
                changeUser(null);
              }}
              className="flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700"
            >
              <FiLogOut className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Task Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm font-medium text-gray-500">Active Tasks</div>
            <div className="mt-2 text-3xl font-semibold text-blue-600">{data.taskCount.active}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm font-medium text-gray-500">New Tasks</div>
            <div className="mt-2 text-3xl font-semibold text-purple-600">{data.taskCount.newTask}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm font-medium text-gray-500">Completed Tasks</div>
            <div className="mt-2 text-3xl font-semibold text-green-600">{data.taskCount.completed}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-sm font-medium text-gray-500">Failed Tasks</div>
            <div className="mt-2 text-3xl font-semibold text-red-600">{data.taskCount.failed}</div>
          </div>
        </div>

        {/* Task Filters */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-4 px-4" aria-label="Tabs">
              {['all', 'active', 'new', 'completed', 'failed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                >
                  {tab} Tasks
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Task List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {filterTasks(data.tasks, activeTab).map((task, index) => (
              <li key={index} className="p-6 hover:bg-gray-50 transition-colors duration-150">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(task)}`}>
                        {getStatusIcon(task)}
                        <span className="ml-1 capitalize">
                          {task.completed ? 'Completed' : task.failed ? 'Failed' : task.active ? 'Active' : 'New'}
                        </span>
                      </span>
                      <span className="text-sm text-gray-500">{task.category}</span>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">{task.taskTitle}</h3>
                    <p className="mt-1 text-sm text-gray-500">{task.taskDescription}</p>
                    <p className="mt-2 text-sm text-gray-500">Due: {new Date(task.taskDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;