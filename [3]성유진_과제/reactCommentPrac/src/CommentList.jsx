import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이민재",
    comment: "안녕하세요, 소플입니다.",
  },
  {
    name: "유재석",
    comment: "리액트 재미있어요~!",
  },
  {
    name: "강민경",
    comment: "저도 리액트 배워보고 싶어요!!",
  },
  {
    name: "성유진",
    comment: "이번 과제 신기해용 :)",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
