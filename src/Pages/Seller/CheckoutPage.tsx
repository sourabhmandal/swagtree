import NavOne from '../../components/User/BottomNav/NavOne';
import TopNav from '../../components/User/Header/TopNav';
import Layout from './Layout';

function CheckoutPage() {
  return (
    <Layout>
      <TopNav />
      <div className='m-3'>
        <input
          className='mt-5 border-b p-2 focus:outline-none pb-0 w-full'
          placeholder='Card Holder Name'
        />
        <input
          className='mt-5 border-b p-2 focus:outline-none pb-0 w-full'
          placeholder='Card Number'
        />
        <div className='flex'>
          <input
            className='mt-5 border-b w-1/2 p-2 focus:outline-none pb-0 w-full'
            placeholder='Expiry Date'
          />
          <input
            className='mt-5 border-b p-2 ml-1 w-1/2 focus:outline-none pb-0 w-full'
            placeholder='CVV'
            type='number'
          />
        </div>
        <div className='my-5'>
          <button className='w-full rounded-md mb-2 bg-black text-white p-3 text-center'>
            Proceed To Confirm
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default CheckoutPage;
