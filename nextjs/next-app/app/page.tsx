import Image from 'next/image';
import Link from 'next/link';
import UsersPage from './users/page';
import AddUser from './components/AddUser/AddUser';

export default function Home() {
  return (
    <main>
      <h1>Hello, World!</h1>
      <Link href='users/newuser'>
        {' '}
        <AddUser />
      </Link>
    </main>
  );
}
