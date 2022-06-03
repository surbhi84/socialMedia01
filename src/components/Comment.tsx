export const Comment = () => {
  return (
    <div className="flex flex-col gap-1  ">
      {/* <h4>{post.firstName + " " + post.lastName} </h4> */}
      <span className="flex gap-1 text-primaryDark dark:text-primary">
        <h5>Surbhi Kukreti</h5>
        <span className=" text-primaryDark "> @sskukreti</span>
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
        deleniti asperiores impedit dolores soluta dolor, vitae consequuntur
        eligendi qui omnis?
      </p>
    </div>
  );
};
