import React from "react";
import { PostCore } from "pages/types";
import Card from "components/core/Card";

interface PostListProps {
  items: PostCore[];
}

function PostList(props: PostListProps) {
  const { items } = props;

  return (
    <ul>
      {items.map((elem) => {
        return (
          <Card>
            <li key={elem.id}>
              <span>{elem.title}</span>
              <span>{elem.author}</span>
              <span>{elem.createdAt}</span>
              <span>{elem.updatedAt}</span>
            </li>
          </Card>
        );
      })}
    </ul>
  );
}

export default PostList;
