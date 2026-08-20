import { legacyArticles } from './legacy'
import kimmichTransferArticle from './2026-07-22-kimmich'
import brownTransferArticle from './2026-07-22-brown'
import powerRankingArticle from './2026-07-24-power-ranking'
import transferTickerArticle from './2026-07-24-transferticker'
import fridayEditionArticle from './2026-07-31-freitagsausgabe'
import breakingOliseArticle from './2026-08-02-breaking-olise'
import wassiliOliseArticle from './2026-08-03-wassili-olise'
import fridayEdition0708 from './2026-08-07-freitagsausgabe'
import fridayEdition1408 from './2026-08-14-freitagsausgabe'
import kaneMarketArticle from './2026-08-17-kane'
import kaneMuhleArticle from './2026-08-18-kane-muhle'
import redaktionskonferenz2008 from './2026-08-20-redaktionskonferenz'

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

export const articles = [
  redaktionskonferenz2008,
  kaneMuhleArticle,
  kaneMarketArticle,
  fridayEdition1408,
  fridayEdition0708,
  wassiliOliseArticle,
  breakingOliseArticle,
  fridayEditionArticle,
  powerRankingArticle,
  transferTickerArticle,
  brownTransferArticle,
  ...previousArticles
]
  .map(article => article.slug === redaktionskonferenz2008.slug
    ? article
    : { ...article, topStory: false })
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
