import React from "react";
import { render } from "react-dom";

import ChatBot from "react-simple-chatbot";

const App = () => {
  return(
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      marginTop: "40px",
    }}
  >
    <ChatBot
      headerTitle="Hi I am Chatur, your KAM-AI. I am here to help you grow your business on Meesho"
      bubbleOptionStyle={{ backgroundColor: "white", color: "black" }}
      style={{ minWidth: "550px", margin: "0 auto" }}
      // triggerNextStep={handleTrigger}
      steps={[
        {
          id: "1",
          message: "Please select your query or ask me anything",
          trigger: "2",
        },
        {
          id: "2",
          options: [
            { value: 1, label: "How are my sales trending", trigger: "3" },
            { value: 2, label: " Why have my sales decreased", trigger: "4" },
            {
              value: 3,
              label:
                "How are users liking my new products uploaded this month",
              trigger: "8",
            },
          ],
        },
        {
          id: "3",
          component: (
            <div>
              <p>
                Your sales for the month are Rs. 80,71,909. They are down by 10%
                from last month.
              </p>
              <div>
                <p>View Graph</p>
                <img
                  alt="old_image"
                  src="https://supplier-prod-temp-files.s3.ap-southeast-1.amazonaws.com/products-upload/cataloging/1689325979127/Screenshot2023-07-14at2.39.54PM.png"
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "8px",
                    border: "1px solid gray",
                  }}
                />

              </div>
            </div>
          ),
          trigger: 1,
        },
        {
          id: "4",
          component: (
            <div>
              <p>
                The demand for your top products are down due to competition.
                Reduce your prices on products facing competition pressure
              </p>
              <br></br>
              <p>
                Product ID : 10232891, Current Price: 203, Recommended price :
                193, Expected increase in Sales: Rs. 21000
              </p>{" "}
              <br></br>
              <p>
                Product ID : 48928928, Current Price: 183, Recommended price :
                154, Expected increase in Sales: Rs. 12000
              </p>{" "}
              <br></br>
              <p>
                Product ID : 48928928, Current Price: 43, Recommended price :
                24,Expected increase in Sales: Rs. 4000
              </p>{" "}
              <br></br>
            </div>
          ),
          trigger: 5,
        },
        {
          id: "5",
          message:
            "Please confirm the product ids on which you want to reduce prices",
          trigger: 6,
        },
        {
          id: 6,
          options: [
            { value: 10232891, label: "10232891", trigger: "10232891" },
            { value: 38928938, label: "38928938", trigger: "10232891" },
            { value: 48928928, label: "48928928", trigger: "10232891" },
          ],
        },
        {
          id: 10232891,
          message: "Congrats! Prices have been updated. ",
          trigger: 1,
        },
        {
          id: 8,
          component: (
            <div>
              <p>
                You have uploaded 3 new products this month. Please select the
                product you want to select
              </p>
              <br></br>
              <p>
                Product ID 1: 1234, Upload Date : 2023/06/24, Revenue : Rs.
                18392, User Reviews : 20, Rating : 4.2
              </p>{" "}
              <br></br>
              <p>
                Product ID 2: 38923, Upload Date : 2023/06/26, Revenue : Rs.
                4532, User Reviews : 25, Rating : 3.5
              </p>{" "}
              <br></br>
              <p>
                Product ID 3: 78956, Upload Date : 2021/07/22, Revenue : Rs.
                789, User Reviews : 19, Rating : 4.1
              </p>{" "}
              <br></br>
            </div>
          ),
          trigger: 9,
        },
        {
          id: 9,
          message: "Please select the PID on which you further analysis on",
          trigger: "select-pid",
        },
        {
          id: "select-pid",
          options: [
            { value: 1234, label: "1234", trigger: "10" },
            { value: 38923, label: "38923", trigger: "10" },
            { value: 78956, label: "78956", trigger: "10" },
          ],
          trigger: 10,
        },
        {
          id: 10,
          options: [
            {
              value: "Summarize Overall Reviews",
              label: "Summarize Overall Reviews",
              trigger: "Summarize Overall Reviews",
            },
            {
              value: "Summarize Improvement Areas",
              label: "Summarize Improvement Areas",
              trigger: "Summarize Improvement Areas",
            },
            {
              value: "Improve Product Description",
              label: "Improve Product Description",
              trigger: "Improve Product Description",
            },
            {
              value: "Improve Product Images",
              label: "Improve Product Images",
              trigger: "Improve Product Images",
              userDelay: 6000,
            },
          ],
        },
        {
          id: "Summarize Overall Reviews",
          component: (
            <div>
              <p>
                <strong>Size</strong>: The majority of customers found the
                t-shirt's size to be satisfactory. Some mentioned that the size
                was perfect and matched their expectations. However, a few
                reviews indicated that the size was a bit off for their liking.
              </p>
              <br></br>
              <p>
                <strong>Fit</strong>: In terms of fit, the general sentiment was
                positive. Many customers reported that the t-shirt fit well and
                was comfortable to wear. However, a small number of reviewers
                expressed disappointment, stating that the fit was not as
                flattering or comfortable as they had hoped.
              </p>{" "}
              <br></br>
              <p>
                <strong>Quality</strong>: The quality of the t-shirt received
                mixed reviews. While some customers praised the top-notch
                quality and exceptional craftsmanship, others described it as
                average or expected better. The quality seemed to be the aspect
                where opinions varied the most.
              </p>{" "}
              <br></br>
              <p>
                <strong>Overall</strong>: , the t-shirt generally received
                positive feedback regarding size and fit, with most customers
                being satisfied. However, there were differing opinions
                regarding the quality, with some customers finding it
                outstanding and others considering it average
              </p>{" "}
              <br></br>
            </div>
          ),
        },
        {
          id: "Summarize Improvement Areas",
          component: (
            <div>
              <p>
                <strong>Size</strong>: The saree's size was way off. It was much
                smaller than expected, and I couldn't even properly drape it.
                Very disappointed with the sizing.
              </p>
              <br></br>
              <p>
                <strong>Fit</strong>: The fit of this saree was terrible. It was
                too loose in some areas and too tight in others. It made me feel
                uncomfortable throughout the event. Not worth the purchase.
              </p>{" "}
              <br></br>
              <p>
                <strong>Quality</strong>: The quality of this saree was
                extremely poor. The fabric felt cheap, and it started fraying
                after just a couple of wears. Definitely not worth the money.
              </p>{" "}
              <br></br>
              <p>
                <strong>Value for Money</strong>: This saree was a complete
                waste of money. The price was exorbitant for the quality and
                design it offered. I regret purchasing it and would not
                recommend it to anyone.
              </p>{" "}
              <br></br>
              <p>
                <strong>Overall</strong>: , Overall, this saree was a big
                disappointment. The size and fit were not as described, the
                quality was subpar, and it definitely did not provide value for
                money. I would advise others to steer clear of this product
              </p>{" "}
              <br></br>
            </div>
          ),
        },
        {
          id: "Improve Product Description",
          component: (
            <div>
              <p>
                Introducing our affordable Silk Saree under 199! This saree
                combines elegance, comfort, and affordability in a beautiful
                package. It features high-quality silk fabric, intricate
                designs, and vibrant colors. Despite its budget-friendly price,
                it offers durability and excellent value for money. Embrace the
                luxury of silk without breaking the bank and make a lasting
                impression with this stunning saree.
              </p>
              <br></br>
            </div>
          ),
        },
        {
          id: "Improve Product Images",
          trigger: "approval-images",
          component: (
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  display: "flex",
                  margin: "0 10px",
                  alignItems: "center",
                }}
              >
                <span>Current Image: </span>
                <img
                  alt="old_image"
                  src="https://supplier-prod-temp-files.s3.ap-southeast-1.amazonaws.com/products-upload/cataloging/1689325949230/kurti.jpeg"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "8px",
                    border: "1px solid gray",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  margin: "0 10px",
                  alignItems: "center",
                }}
              >
                <span>New Image: </span>
                <img
                  alt="new_image"
                  src="https://supplier-prod-temp-files.s3.ap-southeast-1.amazonaws.com/products-upload/cataloging/1689325949234/kurti-removebg-preview1.png"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "8px",
                    border: "1px solid gray",
                  }}
                />
              </div>
            </div>
          ),
        },
        {
          id: "approval-images",
          options: [
            {
              id: "approval-images",
              label: "Please approve the new image",
              trigger: "approve",
            },
          ],
        },
        {
          id: "approve",
          message: "New image has been updated and reflected in the portal",
          trigger: 1,
        },
      ]}
    />
  </div>
  )
};

render(<App />, document.getElementById("root"));
