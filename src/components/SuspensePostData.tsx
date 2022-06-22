import { Suspense } from "react";
import { Spin } from "antd";

import { fetchProfileData } from "../context/data";

const resource = fetchProfileData();

const SuspensePostData = () => {
  const posts = resource.posts.read();
  return (
    <>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.text}</li>
        ))}
      </ul>
    </>
  );
};

const SuspenseUserData = () => {
  const user = resource.user.read();
  return (
    <>
      <h1>{user.name}</h1>
    </>
  );
};

const SuspenseShow = () => {
  return (
    <>
      <Suspense fallback={<Spin />}>
        <p>User Data</p>
        <SuspenseUserData />

        <div style={{ marginTop: 20 }}>
          <Suspense fallback={<Spin />}>
            <p>Posts Data</p>
            <SuspensePostData />
          </Suspense>
        </div>
      </Suspense>
    </>
  );
};

export default SuspenseShow;
