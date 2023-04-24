import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './Home';
import NewArrivals from './NewArrivals';
import Women from './Women';
import Men from './Men';
import Kids from './Kids';
import Collaborations from './Collaborations';
import Sport from './Sport';
import Sale from './Sale';
import Gift from './Gift';
import NotFound from './NotFound';
import Layout from './Layout';

const Routes = () => {
    const element = useRoutes([
        {
            children:[
                {
                   element:<Layout/>,
                     children:[
                      
                      {
                        path:'/',
                        element:<Home/>
        
                      },
                      {
                        path:'/newarrivals',
                        element:<NewArrivals/>
    
                      },
                      {
                        path:'/women',
                        element:<Women/>
                      },
                      {
                        path:'/men',
                        element:<Men/>
                      },
                      {
                        path:'/kids',
                        element:<Kids/>
                      },
                      {
                        path:'/collaborations',
                        element:<Collaborations/>
                      },
                      {
                        path:'/sport',
                        element:<Sport/>
                      },
                      {
                        path:'/sale',
                        element:<Sale/>
                      },
                      {
                        path:'/gift',
                        element:<Gift/>
                      },
                      {
                        path:'*',
                        element:<NotFound/>
                      },
                             ]
                },
                      ]
        },
        {
            children:[
                {
                //   path:'/login',
                //   element:<Login/>
                }
                    ]
        }
    ])
    
    return element
    }
export default Routes