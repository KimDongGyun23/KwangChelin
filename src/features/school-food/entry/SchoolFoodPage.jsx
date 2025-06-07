import { useEffect, useState } from 'react'

import { instance } from '@/api/client'
import { FloatingButton, MainLayout } from '@/components'

import { SchoolFoodOfficialLink } from '../ui/SchoolFoodOfficialLink'
import styles from './SchoolFoodPage.module.css'

export const SchoolFoodPage = () => {
  const [reviewList, setReviewList] = useState([])

  const fetchReviewList = async () => {
    const reviewList = await instance.get(`/reviews/page/${1}`)
    console.log(reviewList)
    setReviewList(reviewList)
  }

  useEffect(() => {
    fetchReviewList()
  }, [])

  return (
    <MainLayout title='학식 정보'>
      <div className={styles.container}>
        <SchoolFoodOfficialLink />
        <p className={styles.label}>학식 리뷰 확인해 보세요!</p>

        {/* <SchoolFoodReviewList reviewList={reviewList} /> */}
      </div>
      <FloatingButton to={'/school-food/review'} />
    </MainLayout>
  )
}
