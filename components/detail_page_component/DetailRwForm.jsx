import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import API_ENDPOINT from '../../scripts/globals/API_ENDPOINT';
import TextInput from '../TextInput';
import TextAreaInput from '../TextAreaInput';
import PrimaryButton from '../PrimaryButton';

export default function ReviewForm({
  dialogReviewHandler,
  submitStatusHandler,
}) {
  const nextRouter = useRouter();
  const [reviewName, setReviewName] = useState('');
  const [reviewMsg, setReviewMsg] = useState('');

  const reviewNameInputHandler = (e) => {
    const reviewNameValue = e.target.value;
    setReviewName(reviewNameValue);
  };

  const reviewMsgInputHandler = (e) => {
    const reviewMsgValue = e.target.value;
    setReviewMsg(reviewMsgValue);
  };

  const reviewSubmitHandler = async () => {
    try {
      const detailPageId = nextRouter.query.id;
      const reviewInputNotEmpty =
        reviewName.replaceAll(' ', '') && reviewMsg.replaceAll(' ', '');

      if (reviewInputNotEmpty) {
        await axios.post(API_ENDPOINT.REVIEW, {
          id: detailPageId,
          name: reviewName,
          review: reviewMsg,
        });

        setReviewName('');
        setReviewMsg('');
        submitStatusHandler('success');
      } else {
        submitStatusHandler('reject');
      }
    } catch (error) {
      submitStatusHandler('offline');
    } finally {
      dialogReviewHandler();
    }
  };

  return (
    <div className='grid gap-2'>
      <TextInput
        id='reviewName'
        placeholder='Review name'
        value={reviewName}
        onChange={reviewNameInputHandler}
      />

      <label htmlFor='reviewText'>
        <span className='inline-block fixed left-[-9999px]'>Review text</span>

        <TextAreaInput
          id='reviewText'
          placeholder='Review text'
          rows={6}
          value={reviewMsg}
          onChange={reviewMsgInputHandler}
        />
      </label>

      <div>
        <PrimaryButton onClick={reviewSubmitHandler}>
          Submit review
        </PrimaryButton>
      </div>
    </div>
  );
}
