import { useEffect, useState } from "react";
import useDelete from "../customHooks/useDelete";
import useFetch from "../customHooks/useFetch";

const Sent = () => {
  const [sentMails, setSentMails] = useState([]);
  const [url, setUrl] = useState(null);
  const [fetchUrl, setFetchUrl] = useState(null);
  const crntEmail = localStorage.getItem("crntEmail");

  const { loading, error } = useDelete(url);
  const { fetchData, fetchLoading, fetchError } = useFetch(fetchUrl);

  useEffect(() => {
    if (fetchData) {
      setSentMails(fetchData);
    }
    fetchFromEmails();
  }, [fetchData]);

  const fetchFromEmails = async () => {
    setFetchUrl(
      `https://mailbox-33dfa-default-rtdb.firebaseio.com/fromEmails.json`
    );
    console.log(sentMails);

    if (fetchLoading) {
      return <div>Loading...</div>;
    }

    if (fetchError) {
      return <div>{fetchError}</div>;
    }
    // try {
    //   const response = await fetch(
    //     `https://mailbox-33dfa-default-rtdb.firebaseio.com/fromEmails.json`
    //   );
    //   const data = await response.json();
    //   if (response.ok) {
    //     const temp = Object.entries(data);
    //     setSentMails(temp);
    //   } else {
    //     console.log("Error fetching emails");
    //   }
    // } catch (error) {
    //   console.log("Error fetching from emails:", error);
    // }
  };

  const deleteHandler = (key) => {
    console.log(key);
    setUrl(
      `https://mailbox-33dfa-default-rtdb.firebaseio.com/fromEmails/${key}.json`
    );
  };

  return (
    <>
      <h1>Sent Box</h1>
      {sentMails.length === 0 && <div>No mail found.</div>}
      {sentMails.length > 0 &&
        sentMails.map(
          (mail) =>
            mail[1].fromEmailData.replace("@", "").replace(".", "") ===
              crntEmail && (
              <div key={mail[0]} className="card card-size">
                <div>
                  <strong
                    className="d-flex"
                    style={{ cursor: "pointer" }}
                  >{`from - ${mail[1].fromEmailData}`}</strong>
                  <strong className="d-flex">{`Topic - ${mail[1].titleData}`}</strong>
                  <div className="d-flex">{mail[1].msgData}</div>
                  <button
                    className=" delete-button"
                    onClick={() => {
                      deleteHandler(mail[0]);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
        )}
    </>
  );
};

export default Sent;
