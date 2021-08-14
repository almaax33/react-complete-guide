import { Route } from "react-router-dom";

function Welcome() {
  return (
    <section>
      <h2>Let's get started!</h2>
      <Route path="/welcome/new-user">
        <p>welcome new guy</p>
      </Route>
    </section>
  );
}

export default Welcome;
