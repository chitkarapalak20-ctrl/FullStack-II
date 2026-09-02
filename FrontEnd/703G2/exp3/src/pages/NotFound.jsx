import { Link } from "react-router";

function NotFound() {
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
    },
    card: {
      backgroundColor: "#fff",
      padding: "50px",
      borderRadius: "15px",
      textAlign: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      maxWidth: "450px",
      width: "90%",
    },
    heading: {
      fontSize: "90px",
      color: "#2563eb",
      margin: 0,
    },
    subHeading: {
      fontSize: "32px",
      color: "#333",
      margin: "10px 0",
    },
    text: {
      color: "#666",
      lineHeight: "1.6",
      marginBottom: "30px",
    },
    button: {
      display: "inline-block",
      padding: "12px 24px",
      backgroundColor: "#2563eb",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "8px",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>404</h1>

        <h2 style={styles.subHeading}>Page Not Found</h2>

        <p style={styles.text}>
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link to="/login" style={styles.button}>
          ← Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;