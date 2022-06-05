export const Comment = () => {
  return (
    <div className="flex flex-col gap-1 rounded-lg p-3 my-3 dark:bg-darkLight ">
      {/* <h4>{post.firstName + " " + post.lastName} </h4> */}
      <span className="flex gap-1 flex-wrap text-primaryDark dark:text-primary">
        <h5>Surbhi Kukreti</h5>
        <span className=" text-primaryDark "> @sskukreti</span>
        <span className="text-sm dark:text-white self-center">commented</span>
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
        deleniti asperiores impedit dolores soluta dolor, vitae consequuntur
        eligendi qui omnis?
      </p>
    </div>
  );
};
