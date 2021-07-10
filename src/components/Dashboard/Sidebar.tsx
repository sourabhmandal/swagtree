import React, { useEffect, useRef, useState } from 'react';
import { NavLink, RouteComponentProps, useLocation } from 'react-router-dom';

const Sidebar: React.FC<ISidebarProps> = ({ setDashboardRoute }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [md, setmd] = useState(false);
  const trigger = useRef<any>();
  const sidebar = useRef<any>();
  const [currentPage, setCurrentPage] = useState('dash');

  return (
    <div className='lg:w-64 w-20 '>
      {/* Sidebar backdrop (mobile only) */}
      <div className={`p-4 bg-gray-800`} aria-hidden='true'>
        {/* Sidebar */}
        <div id='sidebar' ref={sidebar} className={` h-screen bg-gray-800`}>
          {/* Sidebar header */}
          <div className='flex justify-between mb-10 pr-3 px-2'>
            {/* Logo */}
            <NavLink exact to='/dashboard' className='block'>
              <svg width='32' height='32' viewBox='0 0 32 32'>
                <defs>
                  <linearGradient
                    x1='28.538%'
                    y1='20.229%'
                    x2='100%'
                    y2='108.156%'
                    id='logo-a'
                  >
                    <stop stopColor='#A5B4FC' stopOpacity='0' offset='0%' />
                    <stop stopColor='#A5B4FC' offset='100%' />
                  </linearGradient>
                  <linearGradient
                    x1='88.638%'
                    y1='29.267%'
                    x2='22.42%'
                    y2='100%'
                    id='logo-b'
                  >
                    <stop stopColor='#38BDF8' stopOpacity='0' offset='0%' />
                    <stop stopColor='#38BDF8' offset='100%' />
                  </linearGradient>
                </defs>
                <rect fill='#8b5cf6' width='32' height='32' rx='16' />
                <path
                  d='M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z'
                  fill='#4F46E5'
                />
                <path
                  d='M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z'
                  fill='url(#logo-a)'
                />
                <path
                  d='M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z'
                  fill='url(#logo-b)'
                />
              </svg>
            </NavLink>
          </div>

          {/* Links */}
          <div>
            <h3 className='text-xs uppercase text-gray-500 font-semibold pl-3 lg:block hidden'>
              welcome
            </h3>
            <ul className='mt-3'>
              {/* Overview */}
              <li
                className={`px-3 py-2 rounded-lg mb-0.5 last:mb-0 ${
                  currentPage === 'dash' && 'bg-gray-900 '
                }`}
              >
                <div className='flex flex-grow'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 mr-3'
                    viewBox='0 0 24 24'
                  >
                    <path
                      className={`fill-current text-gray-400 ${
                        currentPage === 'dash' && 'text-indigo-500'
                      }`}
                      d='M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z'
                    />
                    <path
                      className={`fill-current text-gray-600 ${
                        currentPage === 'dash' && 'text-indigo-600'
                      }`}
                      d='M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z'
                    />
                    <path
                      className={`fill-current text-gray-400 ${
                        currentPage === 'dash' && 'text-indigo-200'
                      }`}
                      d='M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z'
                    />
                  </svg>
                  <button
                    onClick={() => {
                      setDashboardRoute(0);
                      setCurrentPage('dash');
                    }}
                    className='lg:block hidden text-sm block text-gray-300 hover:text-white transition duration-150 font-medium'
                  >
                    Overview
                  </button>
                </div>
              </li>
              {/* Customers */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  currentPage === 'customers' && 'bg-gray-900'
                }`}
              >
                <div className='flex flex-grow'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 mr-3'
                    viewBox='0 0 24 24'
                  >
                    <path
                      className={`fill-current text-gray-400 ${
                        currentPage === 'customers' && 'text-indigo-300'
                      }`}
                      d='M7 0l6 7H8v10H6V7H1z'
                    />
                    <path
                      className={`fill-current text-gray-600 ${
                        currentPage === 'customers' && 'text-indigo-500'
                      }`}
                      d='M18 7v10h5l-6 7-6-7h5V7z'
                    />
                  </svg>
                  <button
                    onClick={() => ''}
                    className='lg:block hidden text-sm block text-gray-300 hover:text-white transition duration-150 font-medium'
                  >
                    Customer
                  </button>
                </div>
              </li>
              {/* Project */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  currentPage === 'projects' && 'bg-gray-900'
                }`}
              >
                <div className='flex items-center justify-between'>
                  <div className='flex flex-grow'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 mr-3'
                      viewBox='0 0 24 24'
                    >
                      <path
                        className={`fill-current text-gray-400 ${
                          currentPage === 'projects' && 'text-indigo-300'
                        }`}
                        d='M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z'
                      />
                      <path
                        className={`fill-current text-gray-700 ${
                          currentPage === 'projects' && 'text-indigo-600'
                        }`}
                        d='M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z'
                      />
                      <path
                        className={`fill-current text-gray-600 ${
                          currentPage === 'projects' && 'text-indigo-500'
                        }`}
                        d='M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z'
                      />
                    </svg>
                    <button
                      onClick={() => {
                        setDashboardRoute(1);
                        setCurrentPage('projects');
                      }}
                      className='lg:block hidden text-sm block text-gray-300 hover:text-white transition duration-150 font-medium'
                    >
                      projects
                    </button>
                  </div>
                </div>
              </li>
              {/* Campaigns */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  currentPage === 'campaigns' && 'bg-gray-900'
                }`}
              >
                <div className='flex flex-grow'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 mr-3'
                    viewBox='0 0 24 24'
                  >
                    <path
                      className={`fill-current text-gray-600 ${
                        currentPage === 'campaigns' && 'text-indigo-500'
                      }`}
                      d='M20 7a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 0120 7zM4 23a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 110 1.5 1.5 1.5 0 00-1.5 1.5A.75.75 0 014 23z'
                    />
                    <path
                      className={`fill-current text-gray-400 ${
                        currentPage === 'campaigns' && 'text-indigo-300'
                      }`}
                      d='M17 23a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 010-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1zM7 13a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 112 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z'
                    />
                  </svg>
                  <button
                    onClick={() => ''}
                    className='lg:block hidden text-sm block text-gray-300 hover:text-white transition duration-150 font-medium'
                  >
                    Campaign
                  </button>
                </div>
              </li>
              {/* Team */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  currentPage.startsWith('team-') && 'bg-gray-900'
                }`}
              >
                <div className='flex items-center justify-between'>
                  <div className='flex flex-grow'>
                    <svg
                      className='flex-shrink-0 h-6 w-6 mr-3'
                      viewBox='0 0 24 24'
                    >
                      <path
                        className={`fill-current text-gray-600 ${
                          currentPage === 'team' ? 'text-indigo-500' : ''
                        }`}
                        d='M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z'
                      />
                      <path
                        className={`fill-current text-gray-400 ${
                          currentPage === 'team' ? 'text-indigo-500' : ''
                        }`}
                        d='M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z'
                      />
                    </svg>
                    <button
                      onClick={() => {
                        setDashboardRoute(2);
                        setCurrentPage('team');
                      }}
                      className='lg:block hidden text-sm block text-gray-300 hover:text-white transition duration-150 font-medium'
                    >
                      Teams
                    </button>
                  </div>
                </div>
              </li>
              {/* Messages */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  currentPage === 'msg' && 'bg-gray-900'
                }`}
              >
                <div className='flex flex-grow'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 mr-3'
                    viewBox='0 0 24 24'
                  >
                    <path
                      className={`fill-current text-gray-600 ${
                        currentPage === 'msg' && 'text-indigo-500'
                      }`}
                      d='M14.5 7c4.695 0 8.5 3.184 8.5 7.111 0 1.597-.638 3.067-1.7 4.253V23l-4.108-2.148a10 10 0 01-2.692.37c-4.695 0-8.5-3.184-8.5-7.11C6 10.183 9.805 7 14.5 7z'
                    />
                    <path
                      className={`fill-current text-gray-400 ${
                        currentPage === 'msg' && 'text-indigo-300'
                      }`}
                      d='M11 1C5.477 1 1 4.582 1 9c0 1.797.75 3.45 2 4.785V19l4.833-2.416C8.829 16.85 9.892 17 11 17c5.523 0 10-3.582 10-8s-4.477-8-10-8z'
                    />
                  </svg>
                  <button
                    onClick={() => {
                      setDashboardRoute(3);
                      setCurrentPage('msg');
                    }}
                    className='lg:block hidden text-sm block text-gray-300 hover:text-white transition duration-150 font-medium'
                  >
                    Messages
                  </button>
                </div>
              </li>
              {/* Tasks */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  currentPage === 'tasks' && 'bg-gray-900'
                }`}
              >
                <div className='flex flex-grow'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 mr-3'
                    viewBox='0 0 24 24'
                  >
                    <path
                      className={`fill-current text-gray-600 ${
                        currentPage === 'tasks' && 'text-indigo-500'
                      }`}
                      d='M8 1v2H3v19h18V3h-5V1h7v23H1V1z'
                    />
                    <path
                      className={`fill-current text-gray-600 ${
                        currentPage === 'tasks' && 'text-indigo-500'
                      }`}
                      d='M1 1h22v23H1z'
                    />
                    <path
                      className={`fill-current text-gray-400 ${
                        currentPage === 'tasks' && 'text-indigo-300'
                      }`}
                      d='M15 10.586L16.414 12 11 17.414 7.586 14 9 12.586l2 2zM5 0h14v4H5z'
                    />
                  </svg>
                  <button
                    onClick={() => {
                      setDashboardRoute(4);
                      setCurrentPage('tasks');
                    }}
                    className='lg:block hidden text-sm block text-gray-300 hover:text-white transition duration-150 font-medium'
                  >
                    Tasks
                  </button>
                </div>
              </li>
              {/* Applications */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  currentPage === 'applications' && 'bg-gray-900'
                }`}
              >
                <div className='flex flex-grow'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 mr-3'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className={`fill-current text-gray-400 ${
                        currentPage === 'applications' && 'text-indigo-300'
                      }`}
                      cx='18.5'
                      cy='5.5'
                      r='4.5'
                    />
                    <circle
                      className={`fill-current text-gray-600 ${
                        currentPage === 'applications' && 'text-indigo-500'
                      }`}
                      cx='5.5'
                      cy='5.5'
                      r='4.5'
                    />
                    <circle
                      className={`fill-current text-gray-600 ${
                        currentPage === 'applications' && 'text-indigo-500'
                      }`}
                      cx='18.5'
                      cy='18.5'
                      r='4.5'
                    />
                    <circle
                      className={`fill-current text-gray-400 ${
                        currentPage === 'applications' && 'text-indigo-300'
                      }`}
                      cx='5.5'
                      cy='18.5'
                      r='4.5'
                    />
                  </svg>
                  <button
                    onClick={() => ''}
                    className='lg:block hidden text-sm block text-gray-300 hover:text-white transition duration-150 font-medium'
                  >
                    Application
                  </button>
                </div>
              </li>
              {/* Profile */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  currentPage === 'profile' && 'bg-gray-900'
                }`}
              >
                <div className='flex flex-grow'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 mr-3'
                    viewBox='0 0 24 24'
                  >
                    <path
                      className={`fill-current text-gray-600 ${
                        currentPage === 'profile' && 'text-indigo-500'
                      }`}
                      d='M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z'
                    />
                    <path
                      className={`fill-current text-gray-400 ${
                        currentPage === 'profile' && 'text-indigo-300'
                      }`}
                      d='M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z'
                    />
                    <path
                      className={`fill-current text-gray-600 ${
                        currentPage === 'profile' && 'text-indigo-500'
                      }`}
                      d='M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z'
                    />
                    <path
                      className={`fill-current text-gray-400 ${
                        currentPage === 'profile' && 'text-indigo-300'
                      }`}
                      d='M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z'
                    />
                  </svg>
                  <button
                    onClick={() => {
                      setDashboardRoute(5);
                      setCurrentPage('profile');
                    }}
                    className='lg:block hidden text-sm block text-gray-300 hover:text-white transition duration-150 font-medium'
                  >
                    Profile
                  </button>
                </div>
              </li>
              {/* Settings */}
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  currentPage === 'settings' && 'bg-gray-900'
                }`}
              >
                <div className='flex flex-grow'>
                  <svg
                    className='flex-shrink-0 h-6 w-6 mr-3'
                    viewBox='0 0 24 24'
                  >
                    <path
                      className={`fill-current text-gray-600 ${
                        currentPage === 'settings' && 'text-indigo-500'
                      }`}
                      d='M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z'
                    />
                    <path
                      className={`fill-current text-gray-400 ${
                        currentPage === 'settings' && 'text-indigo-300'
                      }`}
                      d='M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z'
                    />
                    <path
                      className={`fill-current text-gray-600 ${
                        currentPage === 'settings' && 'text-indigo-500'
                      }`}
                      d='M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z'
                    />
                    <path
                      className={`fill-current text-gray-400 ${
                        currentPage === 'settings' && 'text-indigo-300'
                      }`}
                      d='M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z'
                    />
                  </svg>
                  <button
                    onClick={() => {
                      setDashboardRoute(6);
                      setCurrentPage('settings');
                    }}
                    className='lg:block hidden text-sm block text-gray-300 hover:text-white transition duration-150 font-medium'
                  >
                    Settings
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

interface ISidebarProps {
  setDashboardRoute: React.Dispatch<React.SetStateAction<Number>>;
}
