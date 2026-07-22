import { legacyArticles } from './legacy'
import kimmichTransferArticle from './2026-07-22-kimmich'
import brownTransferArticle from './2026-07-22-brown'

const legacyWithDates = legacyArticles.map((article, index) => ({
  ...article,
  topStory: false,
  publishedAt: article.publishedAt ?? `2026-07-${String(20 - index).padStart(2, '0')}`,
  hero: article.hero?.replace('./images/redaktion.png', './redaktion.png')
}))

const previousArticles = [
  { ...kimmichTransferArticle, topStory: false },
  ...legacyWithDates
]

export const articles = [brownTransferArticle, ...previousArticles]
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
