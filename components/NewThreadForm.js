import React, { useState } from "react";
import styles from "/styles/NewThreadForm.module.css";
import { useRouter } from "next/router";
const NewThreadForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const router = useRouter();
  // const refreshData = () => {
  //   router.replace(router.asPath);
  //   router.reload();
  // };
  //event handlers
  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const textHandler = (event) => {
    setEnteredText(event.target.value);
  };
  //      form data
  const submitHandler = (event) => {
    event.preventDefault();
    //fetch

    if (
      fetch("/api/home", {
        method: "POST",
        body: JSON.stringify({
          title: enteredName,
          text: enteredText,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
    // else
    //   fetch("/api/home", {
    //     method: "GET",
    //   });

    // )
    //check, delete later
    const formData = {
      title: enteredName,
      text: enteredText,
    };
    console.log(formData);

    setEnteredName("");
    setEnteredText("");
    setToggle(!toggle);
    setTimeout(() => {
      console.log("Delayed for 2 second.");
    }, "2000");
    setTimeout(() => {
      console.log("Delayed for 1 second.");
    }, "1000");
    setTimeout(() => {
      router.reload() + "testing";
    }, "5000");
  };

  //      form toggle
  const [toggle, setToggle] = useState(false);

  const handClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/* threadbutton */}
      <button onClick={handClick} className={styles.newThreadButton}>
        Start a New Thread
      </button>
      {/* form */}
      {toggle ? (
        <>
          <form className={styles.formControls} onSubmit={submitHandler}>
            <div>
              <label className={styles.formNamelabel}>Thread Name:</label>
              <input
                className={styles.formNameText}
                type="text"
                value={enteredName}
                onChange={nameHandler}
              />
              <label className={styles.formCommentLabel}>Comment:</label>
              <textarea
                className={styles.formCommentText}
                type="text"
                value={enteredText}
                onChange={textHandler}
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

export default NewThreadForm;
