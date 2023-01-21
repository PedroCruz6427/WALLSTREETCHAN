import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "/styles/NewThreadForm.module.css";
const PostPage = (props) => {
  const postId = props.postId;
  const [enteredReply, setEnteredReply] = useState("");
  const router = useRouter();
  // const refreshData = () => {
  //   router.replace(router.asPath);
  //   router.reload();
  // };
  //event handlers
  const replyHandler = (event) => {
    setEnteredReply(event.target.value);
  };
  //      form data
  const submitHandler = (event) => {
    event.preventDefault();

    //fetch
    fetch("/api/postPage", {
      method: "POST",
      body: JSON.stringify({ reply: enteredReply, id: postId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //delete later
    console.log(enteredReply);
    console.log("Attained id: " + postId + " " + enteredReply);
    //
    setEnteredReply("");
    setToggle(!toggle);
    // refreshData();
    setTimeout(() => {
      console.log("Delayed for 2 second.");
    }, "2000");
    setTimeout(() => {
      console.log("Delayed for 1 second.");
    }, "1000");
    setTimeout(() => {
      router.reload() + "testing";
    }, "5000");

    // console.log(router.query + "hello there");
  };

  const [toggle, setToggle] = useState(false);

  const handClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/* threadbutton */}
      <button onClick={handClick} className={styles.newThreadButton}>
        Reply
      </button>
      {/* form */}
      {toggle ? (
        <>
          <form className={styles.formControls} onSubmit={submitHandler}>
            <div>
              <label className={styles.formCommentLabel}></label>
              <textarea
                className={styles.formCommentText}
                type="text"
                value={enteredReply}
                onChange={replyHandler}
              />
              <button className={styles.newThreadSubmit} type="submit">
                Submit
              </button>
            </div>
          </form>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default PostPage;
