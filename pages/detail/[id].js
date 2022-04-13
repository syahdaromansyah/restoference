import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRestaurantDetail } from '../../scripts/libs/restaurantDataHook';
import API_ENDPOINT from '../../scripts/globals/API_ENDPOINT';
import PrimaryLink from '../../components/PrimaryLink';
import NavApp from '../../components/NavApp';
import DetailRwDialog from '../../components/detail_page_component/DetailRwDialog';
import DetailProfile from '../../components/detail_page_component/DetailProfile';
import DetailAbout from '../../components/detail_page_component/DetailAbout';
import DetailMenu from '../../components/detail_page_component/DetailMenu';
import DetailForm from '../../components/detail_page_component/DetailForm';
import DetailCsRw from '../../components/detail_page_component/DetailCsRw';
import FooterApp from '../../components/FooterApp';

export default function Detail({ restaurantData }) {
  const nextRouter = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('success');
  const { restaurantDetailData } = useRestaurantDetail(nextRouter.query.id);

  const dialogReviewHandler = () => setOpenModal((prevValue) => !prevValue);

  const submitStatusHandler = (reviewStatus) => setSubmitStatus(reviewStatus);

  return (
    <div className='DetailPage'>
      <Head>
        <title>{`${restaurantData.name} Restaurant | RestoFerence`}</title>
      </Head>

      <DetailRwDialog
        open={openModal}
        dialogReviewHandler={dialogReviewHandler}
        submitStatus={submitStatus}
      />

      <div className='A11ySection'>
        <PrimaryLink
          href='#RestaurantDetail'
          className='fixed top-[-9999px] left-[-9999px] p-4 focus:top-4 focus:left-4'
        >
          Skip to content
        </PrimaryLink>
      </div>

      <header className='HeaderSection mb-6 md:mb-8 lg:mb-12'>
        <div className='container mx-auto px-4 pt-4 lg:pt-6 xl:pt-8'>
          <div className='max-w-4xl mx-auto'>
            <NavApp />
          </div>
        </div>
      </header>

      <main className='min-h-[1248px] md:min-h-[1148px] xl:min-h-[1120px] mb-12'>
        <article id='RestaurantDetail' className='RestaurantDetail'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto'>
              <div className='mb-6 md:mb-8'>
                <DetailProfile restaurantDetailData={restaurantData} />
              </div>

              <div className='mb-6'>
                <DetailAbout restaurantDetailData={restaurantData} />
              </div>

              <div className='mb-4'>
                <DetailMenu restaurantDetailData={restaurantData} />
              </div>

              <div className='mb-6'>
                <DetailForm
                  restaurantDetailData={restaurantData}
                  dialogReviewHandler={dialogReviewHandler}
                  submitStatusHandler={submitStatusHandler}
                />
              </div>

              <div>
                <DetailCsRw
                  restaurantDetailData={
                    restaurantDetailData ? restaurantDetailData : restaurantData
                  }
                />
              </div>
            </div>
          </div>
        </article>
      </main>

      <FooterApp />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const detailPageId = params.id;
  const responseData = await fetch(API_ENDPOINT.DETAIL(detailPageId));
  const restaurantData = await responseData.json();

  if (restaurantData.error)
    return {
      notFound: true,
    };

  return {
    props: {
      restaurantData: restaurantData.restaurant,
    },
  };
}
