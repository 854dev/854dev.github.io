import PageLayout from "components/layout/PageLayout";
import React from "react";

function Post() {
  return (
    <PageLayout>
      <div>
        게시물 목록 페이지 입니다
        <p>{process.env.BACKEND_API_URL}</p>
      </div>
    </PageLayout>
  );
}

export default Post;
