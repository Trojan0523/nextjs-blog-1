import Link from 'next/link';
import 'styles/Home.module.scss';
import png from 'assets/images/1.png';
export default function Home() {
  return (
    <div>
      <h1>段落1</h1>
      <p>段落</p>
      <Link href="posts/first-post"><a>click me</a></Link>
      <img src={png} alt=""/>
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </div>
  );
}
