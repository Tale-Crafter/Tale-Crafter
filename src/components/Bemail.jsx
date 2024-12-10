const App = () => {
    return (
      <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <main className="main">
          <section className="content" style={{ width: "50%", margin: "0 auto" }}>
            
          <img src={process.env.PUBLIC_URL + '/bmailing.png'} alt="Language"  style={{ width: "147px", height:"147px" }}/>
            <p>
            We’ve just sent you an email to: <strong>business.address@company.com </strong>Please click on the link in the email to proceed.
            </p>
            <p>
            Make sure you check your spam folder in case you don’t see it in the next few minutes
            </p>
          </section>
        </main>
      </div>
    );
  };
  
  export default App;
  