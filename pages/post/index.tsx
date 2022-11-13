import PageLayout from "components/layout/PageLayout";
import PostList from "components/post/PostList";
import React from "react";
/**
 *
 * 제시된 백엔드 API에로부터 게시물을 서버에서 렌더링
 *
 *  */
function Post() {
  return (
    <PageLayout>
      <h1>studio854 블로그 페이지</h1>
      <PostList items={}></PostList>
    </PageLayout>
  );
}

export default Post;
