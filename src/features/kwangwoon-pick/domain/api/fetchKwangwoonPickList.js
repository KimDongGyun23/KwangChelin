/**
 * 카테고리와 검색어로 식당 목록 필터링
 * @param {string | null} category - 선택된 카테고리 ('전체' 또는 null이면 전체)
 * @param {string | null} keyword - 검색어 (null 또는 빈 문자열이면 전체)
 * @returns {Array}
 */

import { RESTAURANT_DUMMY_DATA } from '@/mock'

export const fetchKwangwoonPickList = (category, keyword) => {
  return RESTAURANT_DUMMY_DATA.filter((restaurant) => {
    const matchCategory = !category || category === '전체' || restaurant.category === category

    const matchKeyword = !keyword || restaurant.name.toLowerCase().includes(keyword.toLowerCase())

    return matchCategory && matchKeyword
  })
}
