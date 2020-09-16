import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import DetailView from 'src/views/detail/DetailView';
import MovieListView from 'src/views/movie/MovieListView';

import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';

import RegisterView from 'src/views/auth/RegisterView';


import BlankLayout from 'src/layouts/BlankLayout';
import MovieList from 'src/views/movie/MovieListView/MovieList'


const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'movies', element: <MovieListView /> },
      { path: 'movies/:id', element: <DetailView/>},
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <BlankLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: '/', element: <Navigate to="/login" /> }
    ]
  }
];

export default routes;
