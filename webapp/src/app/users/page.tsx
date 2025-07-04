import { Suspense } from 'react';
import UserList from './UserList';
import Loading from '@/app/loading';

export const dynamic = 'force-dynamic';

export default function UsersPage() {
  return (
    <div className="w-full max-w-5xl items-center justify-between font-mono text-sm">
      <h1 className="text-4xl font-bold">Users</h1>
      <Suspense fallback={<Loading />}>
        <UserList />
      </Suspense>
    </div>
  );
}
