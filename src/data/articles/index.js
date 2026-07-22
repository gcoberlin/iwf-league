import { legacyArticles } from './legacy'
import kimmichTransferArticle from './2026-07-22-kimmich'

const legacyWithDates = legacyArticles.map((article, index) => ({
  ...article,
  topStory: false,
  publishedAt: article.publishedAt ?? `2026-07-${String(20 - index).padStart(2, '0')}`,
  hero: article.hero?.replace('./images/redaktion.png', './redaktion.png')
}))

export const articles = [kimmichTransferArticle, ...legacyWithDates]
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
