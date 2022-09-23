import Sammy from "../img/sammy.jpg";
import "../main.css"

export default function Welcome() {
  return (
    <>
      <div className="wrapper content-center">
        <h1>Welcome To My App</h1>
        <p>This is going to be the coolest app in the world!</p>
        <img src={Sammy} alt="Sammy image" width={200} height={200} />
      </div>
    </>
  );
}
