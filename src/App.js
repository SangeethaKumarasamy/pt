import "./App.css";

export default function App() {
  const price = [
    {
      type: "BASIC",
      price: "FREE",
      user: "✔ Single User",
      storage: "✔ 5GB Storage",
      project: "✔ Unlimited Calls",
      community: "✔ Community Access",
      support: "❌ Endless Support",
      status: "❌ Monthly Status Support",
    },
    {
      type: "SILVER",
      price: "$4.99",
      user: "✔ 5 User",
      storage: "✔ 45GB Storage",
      project: "✔ Unlimited Calls",
      community: "✔ Community Access",
      support: "✔ Endless Support",
      status: "❌ Monthly Status Support",
    },
    {
      type: "GOLD",
      price: "$19.99",
      user: "✔ Unlimited User",
      storage: "✔ 150GB Storage",
      project: "✔ Unlimited Calls ",
      community: "✔ Community Access",
      support: "✔ Endless Support",
      status: "✔ Monthly Status Support",
    },
  ];

  return (
    <div className="App">
      {price.map((obj) => (
        <Print
          type={obj.type}
          price={obj.price}
          user={obj.user}
          storage={obj.storage}
          project={obj.project}
          community={obj.community}
          support={obj.support}
          status={obj.status}
        />
      ))}
    </div>
  );
}

function Print({
  type,
  price,
  user,
  storage,
  project,
  community,
  support,
  status,
}) {
  const dis = { opacity: 0.5 };
  const bld = { "font-weight": "bold" };
  if (type === "GOLD") {
    return (
      <div className="phone">
        <div className="space">
          <h4>{type}</h4>
          <h1>{price}</h1>/month<hr></hr>
          <p style={bld}>{user}</p>
          <p>{storage}</p>
          <p>{project}</p>
          <p>{community}</p>
          <p>{support}</p>
          <p>{status}</p>
        </div>
        <button>SIGN UP</button>
      </div>
    );
  } else if (type === "BASIC") {
    return (
      <div className="phone">
        <div className="space">
          <h4>{type}</h4>
          <h1>{price}</h1>
          <hr></hr>
          <p>{user}</p>
          <p>{storage}</p>
          <p>{project}</p>
          <p>{community}</p>
          <p style={dis}>{support}</p>
          <p style={dis}>{status}</p>
        </div>
        <button>SIGN UP</button>
      </div>
    );
  } else if (type === "SILVER") {
    return (
      <div className="phone">
        <div className="space">
          <h4>{type}</h4>
          <h1>{price}</h1>/month<hr></hr>
          <p style={bld}>{user}</p>
          <p>{storage}</p>
          <p>{project}</p>
          <p>{community}</p>
          <p>{support}</p>
          <p style={dis}>{status}</p>
        </div>
        <button>SIGN UP</button>
      </div>
    );
  }
}
