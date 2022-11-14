import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

import featureImg1 from "./assets/images/illustration-grow-together.svg";
import featureImg2 from "./assets/images/illustration-flowing-conversation.svg";
import featureImg3 from "./assets/images/illustration-your-users.svg";

const App = () => {
  return (
    <>
      <Header />
      <Features
        title="Grow Together"
        text="Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form."
        img={featureImg1}
        dir="left"
      />
      <Features
        title="Flowing Conversations"
        text="You wouldn't paginate a conversation in real life, so why do it online? Our threads 
  have just-in-time loading for a more natural flow."
        img={featureImg2}
        dir="right"
      />
      <Features
        title="Your Users"
        text="It takes no time at all to integrate Huddle with your app's authentication solution. 
  This means, once signed in to your app, your users can start chatting immediately."
        img={featureImg3}
        dir="left"
      />
      <GetStarted />
      <Footer />
    </>
  );
};

export default App;
