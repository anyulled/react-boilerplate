// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'deals',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/Version4'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
      childRoutes: [
        {
          path: '/dealHeader',
          name: 'deal header',
          getComponent(nextState, cb) {
            System.import('components/Version4/header/AddHeaderInformation')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/addProduct',
          name: 'add product',
          getComponent(location, cb) {
            System.import('containers/Version4/AddProductContainer')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/productDetail',
          name: 'product detail',
          getComponent(location, cb) {
            System.import('components/Version4/products/ProductDetailsComponent')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/addCounterparty',
          name: 'add counterparty',
          getComponent(location, cb) {
            System.import('containers/Version4/AddCounterpartyContainer')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/addCurrencies',
          name: 'add currencies',
          getComponent(location, cb) {
            System.import('containers/Version4/AddCurrenciesContainer')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/addBooking',
          name: 'add booking',
          getComponent(location, cb) {
            System.import('containers/Version4/AddBookingContainer')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
        {
          path: '/bookingDetail',
          name: 'booking detail',
          getComponent(location, cb) {
            System.import('components/Version4/booking/BookingEditDetails')
              .then(loadModule(cb))
              .catch(errorLoading);
          },
        },
      ],
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
