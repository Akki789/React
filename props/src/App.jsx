import "./App.css"
import ReturnComponents from "./Components/ReturnComponents"
import Showmessage from "./Components/Showmessage"
import Greetingmessage from "./Components/Greeting"
import PassData from "./Components/PassData"
import ListItems from "./Components/ListItems"
import ObjectProp from "./Components/ObjectProp"
import ReusableButton from "./Components/ReusableButton"
import TernaryProps from "./Components/TernaryProps"
import FunctionasProp from "./Components/FunctionasProp"
import PropsDrilling from "./Components/PropsDrilling"
import DrillingwithChild from "./Components/DrillingwithChild"
import ConditionalwithProps from "./Components/ConditionalwithProps"
import CustomCard from "./Components/CustomCard"
import PropsDrilling2 from "./Components/PropsDrilling2"

export default function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <Greeting name="Akash" age={22} />
        <UserCard name="Faizan" age={30} place="Pune" />
        <Active isActive={false} />
        <Numbers nums={[10, 20, 30, 40]} />
        <User info={{ name: "Akash", age: 26, place: "Pune" }} />

        <h2>Task 1</h2>
        <Button text="Login" color="green" />
        <Button text="Signup" color="blue" />
        <Button text="Logout" color="red" />

        <h2>Task 2</h2>
        <ProductCard
          title="iPhone 15"
          price={799}
          inStock={true}
        />
        <ProductCard
          title="Headphones"
          price={1699}
          inStock={false}
        />

        <UserProfile
          user={{
            name: "Aarav",
            age: 21,
            email: "aarav@mail.com",
            skills: ["HTML", "CSS", "React"]
          }}
        />

        {/* //Assignment Starts from here*/}
          <Showmessage />
          <ReturnComponents />
          <Greetingmessage name="Akash" city="Gorakhpur"/>
          <PassData name="Akash" age={22} isOnline={true} />
          <ListItems skills={["HTML", "CSS", "JS", "React", "Node"]} />
          <ObjectProp user={{name :"Akash", age:20, email: "aakash@gmail.com"}}/>
          <ReusableButton text="Login" color="green"/>
          <ReusableButton text="Signup" color="blue"/>
          <TernaryProps title="iPhone" inStock={false}/>
          <FunctionasProp onPress={() => alert("Pressed!")}/>
             <h2>📝 Assignment 11 — Props Drilling (3 levels)</h2>
          <PropsDrilling />
            <h2>📝 Assignment 12 — Props Drilling + children together</h2>
          <DrillingwithChild />
          <ConditionalwithProps name="Akash" role="admin"/>
          
          <CustomCard>
            <p>This is Children</p>
          </CustomCard>

          <PropsDrilling2 />


      </div>
    </div>
  )
}

function Greeting(props) {
  return <h2>Hello {props.name} Age: {props.age}</h2>
}

function UserCard(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>Age: {props.age}</p>
      <p>Place: {props.place}</p>
    </div>
  )
}

function Active(props) {
  return (
    <div>
      {props.isActive ? <h2>You are active</h2> : <h2>You are not active</h2>}
    </div>
  )
}

function Numbers(props) {
  return (
    <div>
      {props.nums.map((n, i) => (
        <li id={i}>{n}</li>
      ))}
    </div>
  )
}

function User(props) {
  return (
    <div>
      <p>{props.info.name}</p>
      <p>{props.info.age}</p>
      <p>{props.info.place}</p>
    </div>
  )
}


function Button({ text, color }) {
  return (
    <button style={{ background: color, padding: "10px" }}>
      {text}
    </button>
  );
}

function ProductCard({ title, price, inStock }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>${price}</p>

      {inStock ? (
        <span style={{ color: "green" }}>In Stock</span>
      ) : (
        <span style={{ color: "red" }}>Out of Stock</span>
      )}
    </div>
  );
}

function UserProfile({ user }) {
  return (
    <>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>

      <h3>Skills:</h3>
      <ul>
        {user.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </>
  );
}

