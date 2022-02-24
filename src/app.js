import React, { Suspense} from 'react';
import { Route, Switch, HashRouter} from 'react-router-dom';
import ErrorFallback from './Components/ErrorFallback';
import {ErrorBoundary} from 'react-error-boundary';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = React.lazy(() => import('./home'));

export default function App() {
  
  const productValues = [
    {
        id: 1,
        name: 'abc',
        price: 15.00,
        type: 'Books',
        active: true
    },
    {
        id: 2,
        name: 'xyz',
        price: 55.00,
        type: 'Electronics',
        active: true
    },
    {
        id: 3,
        name: 'dca',
        price: 30.50,
        type: 'Toys',
        active: false
    },
    {
        id: 4,
        name: 'rtc',
        price: 15.00,
        type: 'Food',
        active: true
    },
    {
        id: 5,
        name: 'pod',
        price: 250.00,
        type: 'Furniture',
        active: false
    },
    {
        id: 6,
        name: 'bcd',
        price: 400.90,
        type: 'Furniture',
        active: true
    },
    {
        id: 7,
        name: 'dop',
        price: 75.00,
        type: 'Books',
        active: false
    },
    {
        id: 8,
        name: 'lpo',
        price: 13.00,
        type: 'Toys',
        active: true
    },
    {
        id: 9,
        name: 'yux',
        price: 54.40,
        type: 'Electronics',
        active: true
    },
    {
        id: 10,
        name: 'wer',
        price: 40.00,
        type: 'Books',
        active: false
    },
    {
        id: 11,
        name: 'iur',
        price: 12.00,
        type: 'Toys',
        active: true
    },
    {
        id: 12,
        name: 'qtp',
        price: 15.00,
        type: 'Toys',
        active: true
    },
    {
        id: 13,
        name: 'hgu',
        price: 210.00,
        type: 'Furniture',
        active: false
    },
    {
        id: 14,
        name: 'gyu',
        price: 100.00,
        type: 'Electronics',
        active: true
    },
    {
        id: 15,
        name: 'asd',
        price: 32.10,
        type: 'Books',
        active: true
    },
    {
        id: 16,
        name: 'mno',
        price: 25.20,
        type: 'Food',
        active: true
    },
    {
        id: 17,
        name: 'nmo',
        price: 80.50,
        type: 'Furniture',
        active: true
    },
    {
        id: 18,
        name: 'kop',
        price: 50.50,
        type: 'Books',
        active: true
    },
    {
        id: 19,
        name: 'iop',
        price: 35.00,
        type: 'Food',
        active: true
    }
];
const productLabels = [
    {
        label: 'name'
    },
    {
        label: 'price'
    },
    {
        label: 'type',   
        options: [
          { name: 'books'},
          { name: 'electronics' },
          { name: 'food'},
          { name: 'furniture'},
          { name: 'toys' }
       ]
    },
    {
        label: 'active', format: (value) => (value ? 'true' : 'false') 
    }
];

  return (

    <HashRouter>
      <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // reset the state of your app so the error doesn't happen again
          }}>
        <div className="page-wrapper">
            <Suspense fallback={<div></div>}>
              <Switch>
                  <Route exact path="/" render={ props =>
                      <Home {...props} productValues={productValues} productLabels={productLabels} />
                  }/>
              </Switch>
            </Suspense>
        </div>
        </ErrorBoundary>
      </HashRouter>
  
    );
  }



