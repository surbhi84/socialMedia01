export const AddComment = () => {
  return (
    <div className="border border-primary">
      <textarea
        // ref={heightRef}
        // value={postText}
        placeholder="Add a comment.."
        className={` w-full  p-1 h-8 bg-transparent scrollbar-hide rounded-md outline-none resize-none `}
        // onChange={(e) => setPostText(e.target.value)}
        // style={{ height: heightRef.current?.scrollHeight }}
      />
    </div>
  );
};
