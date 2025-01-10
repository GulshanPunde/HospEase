import React from "react";

function CopyRight() {
  const styles = {
    
    link: {
      color: "white",
      textDecoration: "none",
    },
  };

  return (
    <div style={styles.container} className="p-2 text-center bg-dark text-danger">
      © {new Date().getFullYear()} Copyright:{" "}
      <a style={styles.link} href="#/">
      GMedicap.com
      </a>
    </div>
  );
}

export default CopyRight;
