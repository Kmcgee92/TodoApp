import React from "react";
// animxyz animation
import "@animxyz/core";

const Signup = ({ classes, setModalOpen }) => {
  return (
    <>
      {true && (
        <div className={classes.modalContainer}>
          <div className="xyz-in" xyz="inherit down">
            <div className={classes.modalContent}>
              <h2>You are about to clear your History.</h2>
              <div>
                {/* <button onClick={()=> clearHistoryModal(true)}>Confirm</button> */}
                {/* <button onClick={()=> clearHistoryModal(false)}>Cancel</button> */}
                <button onClick={() => setModalOpen(false)}>
                  CLICK ME TO CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;

// .warningOverlay {
//   z-index: 1000;
//   position: fixed;
//   top: 0;
//   height: 100%;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   padding-top: 200px;
//   background-color: rgba(20,20,20,.8);

//   .warningContainer {
//     border-left: 4px solid red;
//     position: fixed;
//     display: flex;
//     background-color: rgb(60,60,60);
//     height: 20%;
//     width: 50%;
//     transition: all ease-in 1s;
//     border-radius: 5px;
//     box-shadow: 1px 1px 10px 1px rgba(20,20,20,.8);
//     flex-direction: column;
//     align-items: center;
//      @media (max-width: 768px){
//         font-size: 60%;
//         width: 80%;
//         height: 50%;
//       }
//     h2 {
//       font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
//       text-transform: uppercase;
//       font-size: 20px;
//       position: relative;
//       width: 60%;
//       text-align: center;
//       color: white;
//       padding: 40px 0 10px 0;
//       margin: 0 30px;
//       border-bottom: 1px solid grey;
//       @media (max-width: 768px){
//         font-size: 120%;
//       }
//     }
//     div {
//       padding: 40px;
//       button {
//           height: 40px;
//           text-transform: uppercase;
//           text-shadow: 1px 2px black;
//           color: grey;
//           margin-right: 20px;
//           margin-left: 20px;
//           padding: 10px 18px;
//           font-size: 18px;
//           border: 2px solid grey;
//           background: none;
//           @media (max-width: 768px){
//           font-size: 10px;
//           padding: 5px 9px;
//           margin: 2px;
//         }
//         @media (max-width: 310px){
//           font-size: 8px;
//           font-size: 10px;
//           padding: 0px;
//           margin: 20px;
//           }
//         }
//         button:hover {
//           text-shadow: none;
//           color: black;
//           background-color: white;
//           border: 2px solid white;
//           cursor: pointer;
//       }
//       button:focus {
//         outline: none;
//       }
//     }
//   }

// }
