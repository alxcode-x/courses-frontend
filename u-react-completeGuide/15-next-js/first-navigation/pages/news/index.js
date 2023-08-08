//domain.com/news
import Link from 'next/link';

function NewsPage() {
  return (
    <>
      <div>news</div>
      <ul>
        <li>
          <Link href='news/some-id'>some page</Link>
        </li>
        <li>
          <Link href='news/some-other-id'>some other page</Link>
        </li>
      </ul>
    </>
  )
}

export default NewsPage